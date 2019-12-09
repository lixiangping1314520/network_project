<template>
  <div class="map-wrapper">
    <div class="map-menu">
      <div class="cell-list-header">站点列表<i class="el-icon-search" @click='isSearch=!isSearch'></i></div>
      <input type="text"
             name="cellName"
             class="searchCell"
             placeholder="请输入搜索内容"
             v-model="cellName"
             v-if='isSearch'>
      <div class="nothingCell"
           v-if="isCell">没有找到数据</div>
      <ul class="cell-list"
          v-else>
        <li>
          <div @click="{{isShowAllTable = !isShowAllTable}}" style="cursor: pointer;">总表</div>
          <ul class="list-item" v-show="isShowAllTable">
            <li class="cell-item"
              v-for="cellItem in filterPoints"
              @click="choiceCell($event,cellItem)">
              {{cellItem.Cell}}
            </li>
          </ul>
        </li>
        <li>
          <div @click="{{isShowPlanTable = !isShowPlanTable}}" style="cursor: pointer;">邻区规划站点</div>
          <ul class="list-item" v-show="isShowPlanTable">
            <li class="cell-item"
              v-for="cellItem in planTable"
              @click="choiceCell($event,cellItem)">
              {{cellItem.Cell}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <el-row class="map-content">
      <el-row class="toolBar">
        <el-button type="primary" size="mini" @click="showNeiplan">显示规划点位</el-button>
        <el-button type="primary" size="mini" @click.prevent="addMarker">显示总表</el-button>
        <el-button type="primary" size="mini" @click="getNeiplanResult">获取邻区规划</el-button>
      </el-row>
      <div id="allmap"
           style="height: 400px; border: 1px solid lightgray">
      </div>
      <!-- <div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="百度" style="width:150px;" @highlight="" /></div> -->
      <!-- <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div> -->
      <button @click.prevent="rangeBtn"
              class="rangeBtn">测距</button>
      <el-button @click.prevent="removeMarker"
              class="addMarker">清空地图数据</el-button>
    </el-row>
  </div>
</template>

<script type="text/javascript">
import BMap from 'BMap'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      cellName: '',
      isSearch: false,
      myDis: null,
      allPoints: [],
      points: [],
      bm: null,
      convertor: null,
      planTable: null,
      NeiplanResult: null,
      // 多边形样式
      ploygonStyle: {
        strokeColor: 'red',
        strokeWeight: 1,
        strokeOpacity: 1,
        fillColor: 'red',
        fillOpacity: 0.5,
        opts: 'hello'
      },
      ploygonStyle_1: {
        strokeColor: 'orange',
        strokeWeight: 1,
        strokeOpacity: 1,
        fillColor: 'orange',
        fillOpacity: 0.5,
        opts: 'hello'
      },
      ploygonStyle_2: {
        strokeColor: 'pink',
        strokeWeight: 1,
        strokeOpacity: 1,
        fillColor: 'pink',
        fillOpacity: 0.5,
        opts: 'hello'
      },
      // 可视区域
      bs: null,
      isShowAllTable: true,
      isShowPlanTable: false,
      currentCell: ''
    }
  },
  created () {
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 获取邻区关系表
    // 获取总表及规划站点
    // 获取总表站点
    this.getTable()
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
    console.log()
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    // 点击打开测距功能
    rangeBtn () {
      this.myDis.open()
      // 关闭鼠标测
      // myDis.close()
    },
    // 初始化地图
    initMap () {
      // 创建Map实例
      let map = new BMap.Map('allmap')
      this.bm = map
      // 地图初始化
      let point = new BMap.Point(102.772465, 24.985747)
      this.bm.centerAndZoom(point, 14)
      this.myDis = new BMapLib.DistanceTool(map)
      // 创建点
      // this.bm.centerAndZoom('昆明', 13)
      // 设置地图显示的城市 此项是必须设置
      // this.bm.setCurrentCity('昆明')
      // 地图坐标转换
      this.convertor = new BMap.Convertor()
      // 开启鼠标滚轮缩放
      this.bm.enableScrollWheelZoom(true)
      // 添加地图类型控件
      this.bm.addControl(new BMap.MapTypeControl({
        mapTypes: [
          BMAP_NORMAL_MAP,
          BMAP_HYBRID_MAP
        ]
      }))
      // 获取当前地图视图
      const self = this
      map.addEventListener('dragend', function () {
        self.points = []
        if (self.allPoints.length) {
          self.getCounts(this)
          self.draw(self.points, self.ploygonStyle)
        }
      })
    },
    // 画出以point2点为圆心，半径为radius，夹角从sDegree到eDegree的扇形
    Sector1 (point2, radius, sDegree, eDegree, strokeColour, strokeWeight, Strokepacity, fillColour, fillOpacity, opts) {
      // 创建构成多边形的点数组
      let points = []
      // 根据扇形的总夹角确定每步夹角度数，最大为10
      let step = ((eDegree - sDegree) / 10) || 10
      points.push(point2)
      // 循环获取每步的圆弧上点的坐标，存入点数组
      for (let i = sDegree; i < eDegree + 0.001; i += step) {
        points.push(this.EOffsetBearing(point2, radius, i))
      }
      points.push(point2)
      return points
    },
    // 使用数学的方法计算需要画扇形的圆弧上的点坐标
    EOffsetBearing (point3, dist, bearing) {
      // 计算1经度与原点的距离
      let lngConv = this.bm.getDistance(point3, new BMap.Point(point3.lng + 0.1, point3.lat)) * 10
      // 计算1纬度与原点的距离
      let latConv = this.bm.getDistance(point3, new BMap.Point(point3.lng, point3.lat + 0.1)) * 10
      // 正弦计算待获取的点的纬度与原点纬度差
      let lat = dist * Math.sin(bearing * Math.PI / 180) / latConv
      // 余弦计算待获取的点的经度与原点经度差
      let lng = dist * Math.cos(bearing * Math.PI / 180) / lngConv
      return new BMap.Point(point3.lng + lng, point3.lat + lat)
    },
    // 批量导入站点
    addMarker () {
      this.getCounts(this.bm)
      this.draw(this.points, this.ploygonStyle)
    },
    // 设置覆盖物信息框内的内容,传入站点信息
    setInfoWindow (pointItem) {
      let infoWindowHtml = ''
      for (var key in pointItem) {
        infoWindowHtml += "<p style='margin:0;line-height:20px;font-size:13px;width:250px'><span style='display:inline-block;width:160px'>" + key + ':</span>' + pointItem[key] + '</p>'
      }
      let sContent = '<div style="height: 100px; overflow-y: scroll;margin-top:10px">' + infoWindowHtml + '</div>'
      return new BMap.InfoWindow(sContent)
    },
    // 批量删除数据
    removeMarker () {
      this.bm.clearOverlays()
      this.points = []
    },
    // 谷歌坐标转百度
    translateCallback (data) {
      if (data.status === 0) {
        this.bm.centerAndZoom(data.points[0], 14)
      }
    },
    // 列表中选中站名后执行
    choiceCell ($event, cellItem) {
      let cellItems = document.querySelectorAll('.cell-item')
      for (var i = cellItems.length - 1; i >= 0; i--) {
        cellItems[i].classList.remove('choiced')
      }
      $event.target.classList.add('choiced')
      // 跳转至对应点位
      let point = new BMap.Point(cellItem.Longitude, cellItem.Latitude)
      var pointArr = []
      pointArr.push(point)
      this.convertor.translate(pointArr, 1, 5, this.translateCallback)
    },
    // 获取所需表格
    getTable () {
      var heads = {
        headers: {
          'username': JSON.parse(sessionStorage.user).username,
          'projectname': sessionStorage.pname,
          'filetype': 'map'
        }
      }
      this.$http.post(
        this.user.httppath + 'api/Geo/GetAllTable?neifiletype=lte',
        { neifiletype: 'lte' },
        heads
      ).then((res) => {
        console.log(res)
        this.allPoints = res.allTable.slice(0, 10000)
        this.planTable = res.planTable
      })
    },
    // 获取视区范围,并判断是否在可是在可视区域
    getCounts (map) {
      this.bs = map.getBounds()
      this.allPoints.forEach((item) => {
        let point = new BMap.Point(item.Longitude, item.Latitude)
        if (this.bs.containsPoint(point)) {
          this.points.push(item)
        }
      })
    },
    //
    draw (points, ploygonStyle) {
      let bm = this.bm
      let len = points.length
      let groupCount = len / 10 + 1

      // 批量撒点只能一次加载10个，所以要分批次加载
      if (groupCount > 1) {
        for (let i = 0; i < groupCount; i++) {
          let pos = []
          let pointItems = []
          for (let j = 0; j < 10; j++) {
            if (i * 10 + j < len) {
              // 设置百度经纬度
              let point = new BMap.Point(points[(i * 10) + j].Longitude, points[(i * 10) + j].Latitude)
              let pointItem = points[(i * 10) + j]
              pos.push(point)
              pointItems.push(pointItem)
            }
          }
          const self = this
          this.convertor.translate(pos, 1, 5, function (data) {
            if (data.status === 0) {
              for (let i = 0; i < data.points.length; i++) {
                let deg = pointItems[i].Dir
                // 画扇形
                // 以画多边形区域的方法画扇形区域
                let oval = new BMap.Polygon(self.Sector1(data.points[i], 100, -deg + 90 - 20, -deg + 90 + 20), ploygonStyle)
                // 设置覆盖物信息框内的内容,传入站点信息
                let infoWindow = self.setInfoWindow(pointItems[i])
                bm.addOverlay(oval)
                // 点击单个覆盖物时显示信息内容
                oval.onclick = function (e) {
                  bm.openInfoWindow(infoWindow, new BMap.Point(data.points[i].lng, data.points[i].lat))
                  self.currentCell = pointItems[i]
                }
              }
            }
          })
        }
      }
    },
    showNeiplan () {
      this.draw(this.planTable, this.ploygonStyle_1)
    },
    getNeiplanResult () {
      if (!this.currentCell) {
        return
      }
      var heads = {
        headers: {
          'username': JSON.parse(sessionStorage.user).username,
          'projectname': sessionStorage.pname,
          'filetype': 'map'
        }
      }
      this.$http.post(
        this.user.httppath + 'api/Geo/GetNeighborCell?neifiletype=lte',
        {
          servingcell: this.currentCell.Cell
        },
        heads
      ).then((res) => {
        this.NeiplanResult = res
        if (res === '没有服务小区') {
          this.$notify({
            title: '警告',
            message: '没有找到服务小区',
            type: 'warning'
          })
          return
        }
        this.draw(this.NeiplanResult, this.ploygonStyle_2)
        var points = []
        for (var i = 0; i < this.NeiplanResult.length; i++) {
          var pointArray = []
          var point = new BMap.Point(this.NeiplanResult[i].Longitude, this.NeiplanResult[i].Latitude)
          pointArray.push(point)
          this.convertor.translate(pointArray, 1, 5, (data) => {
            points.push(data.points[0])
          })
        }
        setTimeout(() => {
          var stratPoint = []
          stratPoint.push(new BMap.Point(this.currentCell.Longitude, this.currentCell.Latitude))
          this.convertor.translate(stratPoint, 1, 5, (data) => {
            for (var i = 0; i < points.length; i++) {
              // 与邻区规划站点连线
              const point1 = new BMap.Point(data.points[0].lng, data.points[0].lat)
              const point2 = new BMap.Point(points[i].lng, points[i].lat)
              var polyline = new BMap.Polyline([
                point1,
                point2
              ], {strokeColor: 'red', strokeWeight: 1, strokeOpacity: 0.5})
              // 创建折线
              this.bm.addOverlay(polyline)
            }
          })
        }, 500)
      })
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user
    }),
    filterPoints () {
      return this.allPoints.filter((data) => {
        return data.Cell.match(this.cellName.toUpperCase())
      })
    },

    // 判断站点容器里是否有内容
    isCell () {
      return this.filterPoints.length === 0
    }
  }
}
</script>

<style type="text/css" scoped>
ul,
li {
  list-style-type: none;
}
.map-wrapper {
  margin: 20px 20px;
  display: flex;
}
.map-menu {
  width: 200px;
  margin-right: 20px;
  border: 1px solid #ebeef5;
  border-radius: 5px;
}
.cell-list-header {
  height: 40px;
  line-height: 40px;
  background: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
  padding-left: 10px;
  font-size: 16px;
}
.el-icon-search {
  margin-top: 12px;
  float: right;
  margin-right: 5px;
}
.cell-list {
  padding: 0 10px;
  background: white;
  height: 400px;
  font-size: 15px;
  overflow-y: scroll;
}
.nothingCell {
  padding: 0 10px;
  background: white;
  height: 400px;
  font-size: 15px;
}
.searchCell {
  width: 100%;
  border: 1px solid lightgray;
  padding: 10px 8px;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 10px;
  outline: none;
}
.list-item{
  padding-left: 10px;
}
.cell-item.choiced {
  color: #409eff;
}
.cell-item {
  padding-bottom: 5px;
  cursor: pointer;
}
.toolBar{
  line-height: 50px;
}
.map-content {
  width: 500px;
  height: 400px;
  flex: 1;
}
button.addMarker,
button.removeMarker {
  margin-top: 10px;
  padding: 10px;
}
button.rangeBtn {
  position: absolute;
  right: 90px;
  top: 61px;
  border: 1px solid rgb(139, 164, 220);
  background: white;
  padding: 2px 6px;
  font: 12px/1.3em arial, sans-serif;
  text-align: center;
  white-space: nowrap;
  border-radius: 3px 0px 0px 3px;
  color: black;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 3px;
}
.cell-message-box {
  width: 10px;
  height: 10px;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
}
img {
  top: 0;
}
</style>