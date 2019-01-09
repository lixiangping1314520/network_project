<template>
  <div class="map-wrapper">
    <div class="map-menu">
      <p class="cell-list-header">站点列表</p>
      <input type="text"
             name="cellName"
             class="searchCell"
             placeholder="请输入搜索内容"
             v-model="cellName">
      <div class="nothingCell"
           v-if="isCell">没有找到数据</div>
      <ul class="cell-list"
          v-else>
        <li class="cell-item"
            v-for="cellItem in filterPoints"
            @click="choiceCell($event,cellItem)">
          {{cellItem.CELL}}
        </li>
      </ul>
    </div>
    <div class="map-content">
      <div id="allmap"
           style="height: 600px;">
      </div>
      <!-- <div id="r-result">请输入:<input type="text" id="suggestId" size="20" value="百度" style="width:150px;" @highlight="" /></div> -->
      <!-- <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div> -->
      <button @click.prevent="rangeBtn"
              class="rangeBtn">测距</button>
      <button @click.prevent="addMarker"
              class="addMarker">导入数据</button>
      <button @click.prevent="removeMarker"
              class="removeMarker">删除数据</button>
    </div>
  </div>
</template>

<script type="text/javascript">
import BMap from 'BMap'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      cellName: '',
      myDis: null,
      points: [],
      bm: null
    }
  },
  created () {
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
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
      let point = new BMap.Point(104.063749, 30.659203)
      this.bm.centerAndZoom(point, 10)
      // this.myDis = new BMapLib.DistanceTool(this.bm) 于建
      // 创建点
      // this.bm.centerAndZoom('成都', 12)
      // 设置地图显示的城市 此项是必须设置
      this.bm.setCurrentCity('成都')
      // 开启鼠标滚轮缩放
      this.bm.enableScrollWheelZoom(true)
      // 添加地图类型控件
      this.bm.addControl(new BMap.MapTypeControl({
        mapTypes: [
          // BMAP_NORMAL_MAP, 于建
          // BMAP_HYBRID_MAP
        ]
      }))
    },
    // 批量导入站点
    addMarker () {
      // 请求数据至本地
      this.points = [
        {
          ECGI: 'L1',
          CELL: 'CDF000131',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 70,
          eNBId: 459081,
          cellId: 31,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 111,
          physical: 0,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 519
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 250,
          eNBId: 459081,
          cellId: 32,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 2,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 297
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000131',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 70,
          eNBId: 459081,
          cellId: 31,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 111,
          physical: 0,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 519
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 250,
          eNBId: 459081,
          cellId: 32,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 2,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 297
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.102,
          Latitude: 30.6675,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.105,
          Latitude: 30.651388,
          Dir: 70,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.105,
          Latitude: 30.651388,
          Dir: 250,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.105,
          Latitude: 30.651388,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.149166,
          Latitude: 30.664722,
          Dir: 70,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.149166,
          Latitude: 30.664722,
          Dir: 250,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.149166,
          Latitude: 30.664722,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.165555,
          Latitude: 30.718055,
          Dir: 70,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.165555,
          Latitude: 30.718055,
          Dir: 250,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.165555,
          Latitude: 30.718055,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.079444,
          Latitude: 30.713611,
          Dir: 70,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.079444,
          Latitude: 30.713611,
          Dir: 180,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        },
        {
          ECGI: 'L1',
          CELL: 'CDF000132',
          Site: 'CDF0001',
          Longitude: 104.079444,
          Latitude: 30.713611,
          Dir: 350,
          eNBId: 459081,
          cellId: 33,
          TAC: 33029,
          EARFCN: 1650,
          PCI: 113,
          physical: 1,
          LayerSubCellId: 37,
          physicalLayerCellIdGroup: 591
        }
      ]
      let bm = this.bm
      let convertor = new BMap.Convertor()
      let len = this.points.length
      let groupCount = len / 10 + 1

      // 多边形样式
      let ploygonStyle = {
        strokeColor: 'red',
        strokeWeight: 1,
        strokeOpacity: 1,
        fillColor: 'red',
        fillOpacity: 0.5,
        opts: 'hello'
      }
      // 以画多边形区域的方法画扇形区域 画出以point2点为圆心，半径为radius，夹角从sDegree到eDegree的扇形
      function Sector1 (point2, radius, sDegree, eDegree, strokeColour, strokeWeight, Strokepacity, fillColour, fillOpacity, opts) {
        // 创建构成多边形的点数组
        let points = []
        // 根据扇形的总夹角确定每步夹角度数，最大为10
        let step = ((eDegree - sDegree) / 10) || 10
        points.push(point2)
        // 循环获取每步的圆弧上点的坐标，存入点数组
        for (let i = sDegree; i < eDegree + 0.001; i += step) {
          points.push(EOffsetBearing(point2, radius, i))
        }
        points.push(point2)
        // 根据构成的点数组以及其他参数画多边形
        // let polygon = new BMap.Polygon(
        //   points, {strokeColor: strokeColour, strokeWeight: strokeWeight, strokeOpacity: Strokepacity, fillColor: fillColour, fillOpacity: fillOpacity})
        if (sDegree === eDegree) {
          let planepoint = points[1]
          let myIcon = new BMap.Icon('../images/uav.png',
            new BMap.Size(36, 36))
          let marker = new BMap.Marker(planepoint, {
            icon: myIcon
          })
          // 创建信息窗口对象
          let infoWindow = new BMap.InfoWindow('信息:', opts)
          marker.addEventListener('click', function () {
            // 开启信息窗口
            this.bm.openInfoWindow(infoWindow, planepoint)
            // window.external.Test(sDegree)
          })
          this.bm.addOverlay(marker)
        }
        return points
      }
      // 使用数学的方法计算需要画扇形的圆弧上的点坐标
      function EOffsetBearing (point3, dist, bearing) {
        // 计算1经度与原点的距离
        let lngConv = bm.getDistance(point3, new BMap.Point(point3.lng + 0.1, point3.lat)) * 10
        // 计算1纬度与原点的距离
        let latConv = bm.getDistance(point3, new BMap.Point(point3.lng, point3.lat + 0.1)) * 10
        // 正弦计算待获取的点的纬度与原点纬度差
        let lat = dist * Math.sin(bearing * Math.PI / 180) / latConv
        // 余弦计算待获取的点的经度与原点经度差
        let lng = dist * Math.cos(bearing * Math.PI / 180) / lngConv
        return new BMap.Point(point3.lng + lng, point3.lat + lat)
      }
      // 批量撒点只能一次加载10个，所以要分批次加载
      if (groupCount > 1) {
        for (let i = 0; i < groupCount; i++) {
          let pos = []
          let pointItems = []
          for (let j = 0; j < 10; j++) {
            if (i * 10 + j < len) {
              let point = new BMap.Point(this.points[(i * 10) + j].Longitude, this.points[(i * 10) + j].Latitude)
              let pointItem = this.points[(i * 10) + j]
              pos.push(point)
              pointItems.push(pointItem)
            }
          }

          convertor.translate(pos, 1, 5, function (data) {
            console.log(data)
            if (data.status === 0) {
              for (let i = 0; i < data.points.length; i++) {
                let deg = pointItems[i].Dir
                // 画扇形
                let oval = new BMap.Polygon(Sector1(data.points[i], 300, -deg + 90 - 20, -deg + 90 + 20), ploygonStyle)
                // 设置覆盖物信息框内的内容
                let infoWindowHtml = ''
                for (var key in pointItems[i]) {
                  infoWindowHtml += "<p style='margin:0;line-height:20px;font-size:13px;width:250px'><span style='display:inline-block;width:160px'>" + key + ':</span>' + pointItems[i][key] + '</p>'
                }
                let sContent = '<div style="height: 100px; overflow-y: scroll;margin-top:10px">' + infoWindowHtml + '</div>'
                let infoWindow = new BMap.InfoWindow(sContent)
                bm.addOverlay(oval)
                oval.onclick = function (e) {
                  bm.openInfoWindow(infoWindow, new BMap.Point(pointItems[i].Longitude + 0.009, pointItems[i].Latitude + 0.0035))
                }
                // bm.setCenter(data.points[i]) // 设置地图中心
              }
            }
          })
        }
      }
    },

    // 批量删除数据
    removeMarker () {
      this.bm.clearOverlays()
      this.points = []
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
      this.bm.centerAndZoom(point, 15)
    }
  },
  computed: {
    filterPoints () {
      return this.points.filter((data) => {
        return data.CELL.match(this.cellName.toUpperCase())
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
* {
  margin: 0;
  padding: 0;
}
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
  border: 1px solid gray;
  padding: 10px 8px;
  box-sizing: border-box;
  margin: 10px 0;
  border-radius: 10px;
  outline: none;
}
.cell-item.choiced {
  color: #409eff;
}
.cell-item {
  padding-bottom: 5px;
  cursor: pointer;
}
.map-content {
  flex: 1;
}
button.addMarker,
button.removeMarker {
  margin-top: 10px;
  padding: 10px;
}
button.rangeBtn {
  position: absolute;
  right: 119px;
  top: 30px;
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