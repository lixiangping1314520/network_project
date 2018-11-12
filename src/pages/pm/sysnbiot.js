const sysnbiot = [
  {
    id: 'ManagedElement',
    label: 'ManagedElement',
    children: [
      {
        id: 'ManagedElement_ENodeBFunction',
        label: 'ENodeBFunction',
        children: [
          {
            id: 'ManagedElement_ENodeBFunction_EUtranCellFDD',
            label: 'EUtranCellFDD',
            children: [
              {
                id:
                  'ManagedElement_ENodeBFunction_EUtranCellFDD_EUtranFreqRelation',
                label: 'EUtranFreqRelation',
                children: [
                  {
                    id:
                      'ManagedElement_ENodeBFunction_EUtranCellFDD_EUtranFreqRelation_EUtranCellRelation',
                    label: 'EUtranCellRelation'
                  }
                ]
              },
              {
                id: 'ManagedElement_ENodeBFunction_EUtranCellFDD_UeMeasControl',
                label: 'UeMeasControl',
                children: [
                  {
                    id:
                      'ManagedElement_ENodeBFunction_EUtranCellFDD_UeMeasControl_PmUeMeasControl',
                    label: 'PmUeMeasControl'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_ENodeBFunction_AdmissionControl',
            label: 'AdmissionControl'
          },
          {
            id: 'ManagedElement_ENodeBFunction_SectorCarrier',
            label: 'SectorCarrier'
          },
          {
            id: 'ManagedElement_ENodeBFunction_NbIotCell',
            label: 'NbIotCell'
          },
          {
            id: 'ManagedElement_ENodeBFunction_SecurityHandling',
            label: 'SecurityHandling'
          }
        ]
      },
      {
        id: 'ManagedElement_Transport',
        label: 'Transport',
        children: [
          {
            id: 'ManagedElement_Transport_VlanPort',
            label: 'VlanPort'
          },
          {
            id: 'ManagedElement_Transport_EthernetPort',
            label: 'EthernetPort'
          },
          {
            id: 'ManagedElement_Transport_SctpEndpoint',
            label: 'SctpEndpoint',
            children: [
              {
                id: 'ManagedElement_Transport_SctpEndpoint_SctpAssociation',
                label: 'SctpAssociation'
              }
            ]
          },
          {
            id: 'ManagedElement_Transport_Router',
            label: 'Router',
            children: [
              {
                id: 'ManagedElement_Transport_Router_InterfaceIPv4',
                label: 'InterfaceIPv4'
              }
            ]
          },
          {
            id: 'ManagedElement_Transport_Sctp',
            label: 'Sctp'
          }
        ]
      },
      {
        id: 'ManagedElement_Equipment',
        label: 'Equipment',
        children: [
          {
            id: 'ManagedElement_Equipment_FieldReplaceableUnit',
            label: 'FieldReplaceableUnit',
            children: [
              {
                id:
                  'ManagedElement_Equipment_FieldReplaceableUnit_BbProcessingResource',
                label: 'BbProcessingResource'
              },
              {
                id: 'ManagedElement_Equipment_FieldReplaceableUnit_RiPort',
                label: 'RiPort'
              },
              {
                id:
                  'ManagedElement_Equipment_FieldReplaceableUnit_MpProcessingResource',
                label: 'MpProcessingResource'
              }
            ]
          },
          {
            id: 'ManagedElement_Equipment_RiLink',
            label: 'RiLink'
          }
        ]
      },
      {
        id: 'ManagedElement_NodeBFunction',
        label: 'NodeBFunction',
        children: [
          {
            id: 'ManagedElement_NodeBFunction_NodeBLocalCellGroup',
            label: 'NodeBLocalCellGroup'
          }
        ]
      },
      {
        id: 'ManagedElement_EquipmentSupportFunction',
        label: 'EquipmentSupportFunction',
        children: [
          {
            id: 'ManagedElement_EquipmentSupportFunction_PowerDistribution',
            label: 'PowerDistribution'
          },
          {
            id: 'ManagedElement_EquipmentSupportFunction_PowerSupply',
            label: 'PowerSupply'
          },
          {
            id: 'ManagedElement_EquipmentSupportFunction_Climate',
            label: 'Climate'
          }
        ]
      }
    ]
  }
]
export default sysnbiot
