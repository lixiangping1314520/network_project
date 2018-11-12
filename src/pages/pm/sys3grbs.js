const sys3grbs = [
  {
    id: 'ManagedElement',
    label: 'ManagedElement',
    children: [
      {
        id: 'ManagedElement_Equipment',
        label: 'Equipment',
        children: [
          {
            id: 'ManagedElement_Equipment_DigitalCable',
            label: 'DigitalCable'
          },
          {
            id: 'ManagedElement_Equipment_SectorAntenna',
            label: 'SectorAntenna',
            children: [
              {
                id: 'ManagedElement_Equipment_SectorAntenna_AntennaBranch',
                label: 'AntennaBranch'
              }
            ]
          },
          {
            id: 'ManagedElement_Equipment_Subrack',
            label: 'Subrack',
            children: [
              {
                id: 'ManagedElement_Equipment_Subrack_DownlinkBaseBandPool',
                label: 'DownlinkBaseBandPool'
              },
              {
                id: 'ManagedElement_Equipment_Subrack_Slot',
                label: 'Slot',
                children: [
                  {
                    id: 'ManagedElement_Equipment_Subrack_Slot_PlugInUnit',
                    label: 'PlugInUnit',
                    children: [
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu',
                        label: 'Cbu',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal',
                            label: 'ExchangeTerminal',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_E1PhysPathTerm',
                                label: 'E1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_E3PhysPathTerm',
                                label: 'E3PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_J1PhysPathTerm',
                                label: 'J1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp',
                                label: 'Os155SpiTtp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp',
                                    label: 'Sts1SpeTtp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp',
                                        label: 'Vt15Ttp',
                                        children: [
                                          {
                                            id:
                                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp_T1Ttp',
                                            label: 'T1Ttp'
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Sts3CspeTtp',
                                    label: 'Sts3CspeTtp'
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc3Ttp',
                                    label: 'Vc3Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc3Ttp_Vc11Ttp',
                                        label: 'Vc11Ttp'
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp',
                                    label: 'Vc4Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp',
                                        label: 'Vc12Ttp',
                                        children: [
                                          {
                                            id:
                                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp_E1Ttp',
                                            label: 'E1Ttp'
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_T1PhysPathTerm',
                                label: 'T1PhysPathTerm'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_ExchangeTerminal_T3PhysPathTerm',
                                label: 'T3PhysPathTerm'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit',
                            label: 'GeneralProcessorUnit',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit_FastEthernet',
                                label: 'FastEthernet'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_GeneralProcessorUnit_MediumAccessUnit',
                                label: 'MediumAccessUnit'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_TimingUnit',
                            label: 'TimingUnit',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Cbu_TimingUnit_GpsSyncRef',
                                label: 'GpsSyncRef'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ControlSwitch',
                        label: 'ControlSwitch',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ControlSwitch_ControlSwitchPort',
                            label: 'ControlSwitchPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetPort',
                        label: 'EthernetPort'
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule',
                        label: 'EthernetSwitchModule',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetBridgePort',
                            label: 'EthernetBridgePort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetBridgePort_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetSwitchModulePort',
                            label: 'EthernetSwitchModulePort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_EthernetSwitchModulePort_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_Lag',
                            label: 'Lag',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_Lag_SwitchPortStp',
                                label: 'SwitchPortStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_EthernetSwitchModule_SwitchStp',
                            label: 'SwitchStp'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp',
                        label: 'ExchangeTerminalIp',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch',
                            label: 'EthernetSwitch',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort',
                                label: 'EthernetSwitchPort',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort_SwitchPortStp',
                                    label: 'SwitchPortStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_Lag',
                                label: 'Lag',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_Lag_SwitchPortStp',
                                    label: 'SwitchPortStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_EthernetSwitch_SwitchStp',
                                label: 'SwitchStp'
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet',
                            label: 'GigaBitEthernet',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet_IpInterface',
                                label: 'IpInterface',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_GigaBitEthernet_IpInterface_IpFlowMonitor',
                                    label: 'IpFlowMonitor'
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort',
                            label: 'InternalEthernetPort',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort_IpInterface',
                                label: 'IpInterface',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminalIp_InternalEthernetPort_IpInterface_IpFlowMonitor',
                                    label: 'IpFlowMonitor'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal',
                        label: 'ExchangeTerminal',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_E1PhysPathTerm',
                            label: 'E1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_E3PhysPathTerm',
                            label: 'E3PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_J1PhysPathTerm',
                            label: 'J1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp',
                            label: 'Os155SpiTtp',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp',
                                label: 'Sts1SpeTtp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp',
                                    label: 'Vt15Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts1SpeTtp_Vt15Ttp_T1Ttp',
                                        label: 'T1Ttp'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Sts3CspeTtp',
                                label: 'Sts3CspeTtp'
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc3Ttp',
                                label: 'Vc3Ttp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc3Ttp_Vc11Ttp',
                                    label: 'Vc11Ttp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp',
                                label: 'Vc4Ttp',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp',
                                    label: 'Vc12Ttp',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_Os155SpiTtp_Vc4Ttp_Vc12Ttp_E1Ttp',
                                        label: 'E1Ttp'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_T1PhysPathTerm',
                            label: 'T1PhysPathTerm'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_ExchangeTerminal_T3PhysPathTerm',
                            label: 'T3PhysPathTerm'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit',
                        label: 'GeneralProcessorUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit_FastEthernet',
                            label: 'FastEthernet'
                          },
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_GeneralProcessorUnit_MediumAccessUnit',
                            label: 'MediumAccessUnit'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Lag',
                        label: 'Lag',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_Lag_SwitchPortStp',
                            label: 'SwitchPortStp'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice',
                        label: 'PiuDevice',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp',
                            label: 'ExchangeTerminalIp',
                            children: [
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch',
                                label: 'EthernetSwitch',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_EthernetSwitchPort',
                                    label: 'EthernetSwitchPort'
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_Lag',
                                    label: 'Lag',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_Lag_SwitchPortStp',
                                        label: 'SwitchPortStp'
                                      }
                                    ]
                                  },
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_EthernetSwitch_SwitchStp',
                                    label: 'SwitchStp'
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet',
                                label: 'GigaBitEthernet',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet_IpInterface',
                                    label: 'IpInterface',
                                    children: [
                                      {
                                        id:
                                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_GigaBitEthernet_IpInterface_IpFlowMonitor',
                                        label: 'IpFlowMonitor'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                id:
                                  'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_InternalEthernetPort',
                                label: 'InternalEthernetPort',
                                children: [
                                  {
                                    id:
                                      'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_PiuDevice_ExchangeTerminalIp_InternalEthernetPort_IpInterface',
                                    label: 'IpInterface'
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchCoreUnit',
                        label: 'SwitchCoreUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchCoreUnit_SwitchInternalLinkPort',
                            label: 'SwitchInternalLinkPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchExtensionUnit',
                        label: 'SwitchExtensionUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_SwitchExtensionUnit_SwitchInternalLinkPort',
                            label: 'SwitchInternalLinkPort'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_TimingUnit',
                        label: 'TimingUnit',
                        children: [
                          {
                            id:
                              'ManagedElement_Equipment_Subrack_Slot_PlugInUnit_TimingUnit_GpsSyncRef',
                            label: 'GpsSyncRef'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'ManagedElement_Equipment_Subrack_UplinkBaseBandPool',
                label: 'UplinkBaseBandPool'
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_IpOam',
        label: 'IpOam',
        children: [
          {
            id: 'ManagedElement_IpOam_Ip',
            label: 'Ip',
            children: [
              {
                id: 'ManagedElement_IpOam_Ip_EthernetLink',
                label: 'EthernetLink'
              },
              {
                id: 'ManagedElement_IpOam_Ip_IpAtmLink',
                label: 'IpAtmLink'
              },
              {
                id: 'ManagedElement_IpOam_Ip_IpHostLink',
                label: 'IpHostLink'
              }
            ]
          },
          {
            id: 'ManagedElement_IpOam_Ospf',
            label: 'Ospf',
            children: [
              {
                id: 'ManagedElement_IpOam_Ospf_OspfArea',
                label: 'OspfArea'
              },
              {
                id: 'ManagedElement_IpOam_Ospf_OspfInterface',
                label: 'OspfInterface'
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_IpSystem',
        label: 'IpSystem',
        children: [
          {
            id: 'ManagedElement_IpSystem_DnsClient',
            label: 'DnsClient'
          },
          {
            id: 'ManagedElement_IpSystem_DnsResolver',
            label: 'DnsResolver'
          },
          {
            id: 'ManagedElement_IpSystem_EthernetOamLocalMep',
            label: 'EthernetOamLocalMep'
          },
          {
            id: 'ManagedElement_IpSystem_Icmp',
            label: 'Icmp'
          },
          {
            id: 'ManagedElement_IpSystem_IcmpServer',
            label: 'IcmpServer'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostEt',
            label: 'IpAccessHostEt'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostGpb',
            label: 'IpAccessHostGpb'
          },
          {
            id: 'ManagedElement_IpSystem_IpAccessHostSpb',
            label: 'IpAccessHostSpb'
          },
          {
            id: 'ManagedElement_IpSystem_IpMux',
            label: 'IpMux'
          },
          {
            id: 'ManagedElement_IpSystem_Ippm',
            label: 'Ippm',
            children: [
              {
                id: 'ManagedElement_IpSystem_Ippm_TwampResponder',
                label: 'TwampResponder'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpSec',
            label: 'IpSec',
            children: [
              {
                id: 'ManagedElement_IpSystem_IpSec_IkePeer',
                label: 'IkePeer'
              },
              {
                id: 'ManagedElement_IpSystem_IpSec_IpSecTunnel',
                label: 'IpSecTunnel'
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_IpTerminationHost',
            label: 'IpTerminationHost'
          },
          {
            id: 'ManagedElement_IpSystem_Ipv6Interface',
            label: 'Ipv6Interface',
            children: [
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_DefaultRouter',
                label: 'DefaultRouter'
              },
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_DscpGroup',
                label: 'DscpGroup',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpInOctets',
                    label: 'pmIfStatsDscpInOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpInPkts',
                    label: 'pmIfStatsDscpInPkts'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpOutOctets',
                    label: 'pmIfStatsDscpOutOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_DscpGroup_pmIfStatsDscpOutPkts',
                    label: 'pmIfStatsDscpOutPkts'
                  }
                ]
              },
              {
                id: 'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor',
                label: 'IpFlowMonitor',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowInOctets',
                    label: 'pmIpFlowInOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowInPkts',
                    label: 'pmIpFlowInPkts'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowOutOctets',
                    label: 'pmIpFlowOutOctets'
                  },
                  {
                    id:
                      'ManagedElement_IpSystem_Ipv6Interface_IpFlowMonitor_pmIpFlowOutPkts',
                    label: 'pmIpFlowOutPkts'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_TrafficManagement',
            label: 'TrafficManagement',
            children: [
              {
                id:
                  'ManagedElement_IpSystem_TrafficManagement_TrafficScheduler',
                label: 'TrafficScheduler',
                children: [
                  {
                    id:
                      'ManagedElement_IpSystem_TrafficManagement_TrafficScheduler_TrafficManagementQueue',
                    label: 'TrafficManagementQueue'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_IpSystem_VpnInterface',
            label: 'VpnInterface'
          }
        ]
      },
      {
        id: 'ManagedElement_NodeBFunction',
        label: 'NodeBFunction',
        children: [
          {
            id: 'ManagedElement_NodeBFunction_Iub',
            label: 'Iub',
            children: [
              {
                id: 'ManagedElement_NodeBFunction_Iub_IubDataStreams',
                label: 'IubDataStreams',
                children: [
                  {
                    id:
                      'ManagedElement_NodeBFunction_Iub_IubDataStreams_pmIubMacdPduRbsReceivedBits',
                    label: 'pmIubMacdPduRbsReceivedBits'
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_NodeBFunction_RbsLocalCell',
            label: 'RbsLocalCell',
            children: [
              {
                id: 'ManagedElement_NodeBFunction_RbsLocalCell_Aich',
                label: 'Aich'
              },
              {
                id:
                  'ManagedElement_NodeBFunction_RbsLocalCell_EDchResourcesCell',
                label: 'EDchResourcesCell'
              },
              {
                id: 'ManagedElement_NodeBFunction_RbsLocalCell_HsDschResources',
                label: 'HsDschResources',
                children: [
                  {
                    id:
                      'ManagedElement_NodeBFunction_RbsLocalCell_HsDschResources_pmSumOfHsScchUsedPwr',
                    label: 'pmSumOfHsScchUsedPwr'
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_RbsLocalCell_HsDschResources_pmSumOfHsScchUsedPwrHsFach',
                    label: 'pmSumOfHsScchUsedPwrHsFach'
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_RbsLocalCell_HsDschResources_pmSumOfHsUsedPwr',
                    label: 'pmSumOfHsUsedPwr'
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_RbsLocalCell_HsDschResources_pmSumOfHsUsedPwrHsFach',
                    label: 'pmSumOfHsUsedPwrHsFach'
                  }
                ]
              },
              {
                id: 'ManagedElement_NodeBFunction_RbsLocalCell_RadioLinksCell',
                label: 'RadioLinksCell'
              },
              {
                id: 'ManagedElement_NodeBFunction_RbsLocalCell_Sccpch',
                label: 'Sccpch'
              }
            ]
          },
          {
            id: 'ManagedElement_NodeBFunction_Sector',
            label: 'Sector',
            children: [
              {
                id: 'ManagedElement_NodeBFunction_Sector_Carrier',
                label: 'Carrier',
                children: [
                  {
                    id: 'ManagedElement_NodeBFunction_Sector_Carrier_Aich',
                    label: 'Aich'
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_Sector_Carrier_EDchResources',
                    label: 'EDchResources',
                    children: [
                      {
                        id:
                          'ManagedElement_NodeBFunction_Sector_Carrier_EDchResources_pmNoiseFloorHighRes',
                        label: 'pmNoiseFloorHighRes'
                      }
                    ]
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_Sector_Carrier_HsDschResources',
                    label: 'HsDschResources',
                    children: [
                      {
                        id:
                          'ManagedElement_NodeBFunction_Sector_Carrier_HsDschResources_pmSumOfHsScchUsedPwr',
                        label: 'pmSumOfHsScchUsedPwr'
                      },
                      {
                        id:
                          'ManagedElement_NodeBFunction_Sector_Carrier_HsDschResources_pmSumOfHsScchUsedPwrHsFach',
                        label: 'pmSumOfHsScchUsedPwrHsFach'
                      },
                      {
                        id:
                          'ManagedElement_NodeBFunction_Sector_Carrier_HsDschResources_pmSumOfHsUsedPwr',
                        label: 'pmSumOfHsUsedPwr'
                      },
                      {
                        id:
                          'ManagedElement_NodeBFunction_Sector_Carrier_HsDschResources_pmSumOfHsUsedPwrHsFach',
                        label: 'pmSumOfHsUsedPwrHsFach'
                      }
                    ]
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_Sector_Carrier_pmAverageRssiHigh',
                    label: 'pmAverageRssiHigh'
                  },
                  {
                    id: 'ManagedElement_NodeBFunction_Sector_Carrier_Prach',
                    label: 'Prach'
                  },
                  {
                    id:
                      'ManagedElement_NodeBFunction_Sector_Carrier_RadioLinks',
                    label: 'RadioLinks'
                  },
                  {
                    id: 'ManagedElement_NodeBFunction_Sector_Carrier_Sccpch',
                    label: 'Sccpch'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ManagedElement_SwitchFabric',
        label: 'SwitchFabric',
        children: [
          {
            id: 'ManagedElement_SwitchFabric_InternalLinkGroup',
            label: 'InternalLinkGroup'
          }
        ]
      },
      {
        id: 'ManagedElement_TransportNetwork',
        label: 'TransportNetwork',
        children: [
          {
            id: 'ManagedElement_TransportNetwork_Aal0TpVccTp',
            label: 'Aal0TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal1TpVccTp',
            label: 'Aal1TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal2PathVccTp',
            label: 'Aal2PathVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal2Sp',
            label: 'Aal2Sp',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Aal2Sp_Aal2Ap',
                label: 'Aal2Ap'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Aal5TpVccTp',
            label: 'Aal5TpVccTp'
          },
          {
            id: 'ManagedElement_TransportNetwork_AtmPort',
            label: 'AtmPort',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_AtmPort_VplTp',
                label: 'VplTp',
                children: [
                  {
                    id: 'ManagedElement_TransportNetwork_AtmPort_VplTp_VpcTp',
                    label: 'VpcTp',
                    children: [
                      {
                        id:
                          'ManagedElement_TransportNetwork_AtmPort_VplTp_VpcTp_VclTp',
                        label: 'VclTp'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_ImaGroup',
            label: 'ImaGroup',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_ImaGroup_ImaLink',
                label: 'ImaLink'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Sctp',
            label: 'Sctp',
            children: [
              {
                id: 'ManagedElement_TransportNetwork_Sctp_SctpAssociation',
                label: 'SctpAssociation'
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_Synchronization',
            label: 'Synchronization',
            children: [
              {
                id:
                  'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet',
                label: 'GigaBitEthernet',
                children: [
                  {
                    id:
                      'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface',
                    label: 'IpInterface',
                    children: [
                      {
                        id:
                          'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_DscpGroup',
                        label: 'DscpGroup',
                        children: [
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_DscpGroup_pmIfStatsDscpInOctets',
                            label: 'pmIfStatsDscpInOctets'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_DscpGroup_pmIfStatsDscpInPkts',
                            label: 'pmIfStatsDscpInPkts'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_DscpGroup_pmIfStatsDscpOutOctets',
                            label: 'pmIfStatsDscpOutOctets'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_DscpGroup_pmIfStatsDscpOutPkts',
                            label: 'pmIfStatsDscpOutPkts'
                          }
                        ]
                      },
                      {
                        id:
                          'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_IpFlowMonitor',
                        label: 'IpFlowMonitor',
                        children: [
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_IpFlowMonitor_pmIpFlowInOctets',
                            label: 'pmIpFlowInOctets'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_IpFlowMonitor_pmIpFlowInPkts',
                            label: 'pmIpFlowInPkts'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_IpFlowMonitor_pmIpFlowOutOctets',
                            label: 'pmIpFlowOutOctets'
                          },
                          {
                            id:
                              'ManagedElement_TransportNetwork_Synchronization_GigaBitEthernet_IpInterface_IpFlowMonitor_pmIpFlowOutPkts',
                            label: 'pmIpFlowOutPkts'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'ManagedElement_TransportNetwork_UniSaalTp',
            label: 'UniSaalTp'
          }
        ]
      }
    ]
  }
]
export default sys3grbs
