const kpi = {
  '3grbs': {
    '3G': [
      {
        kpiC: 'UL_CE_USAGE_AVG',
        kpiE: 'UL_CE_USAGE_AVG',
        counter: 'pmSumCapacityUlCe / pmSamplesCapacityUlCe'
      },
      {
        kpiC: 'UL_CE_USAGE_AVG[%]',
        kpiE: 'UL_CE_USAGE_AVG[%]',
        counter: 'pmSumCapacityUlCe / pmSamplesCapacityUlCe/164'
      },
      {
        kpiC: 'DL_CE_USAGE_AVG',
        kpiE: 'DL_CE_USAGE_AVG',
        counter: 'pmSumCapacityDlCe / pmSamplesCapacityDlCe'
      },
      {
        kpiC: 'DL_CE_USAGE_AVG[%]',
        kpiE: 'DL_CE_USAGE_AVG[%]',
        counter: 'pmSumCapacityDlCe / pmSamplesCapacityDlCe/84'
      },
      {
        kpiC: 'Max Transmited Carrier Power',
        kpiE: 'Max Transmited Carrier Power',
        counter: 'max ( pmTransmittedCarrierPower )'
      },
      {
        kpiC: 'Transmited Carrier Power avg',
        kpiE: 'Transmited Carrier Power avg',
        counter: 'avg ( pmTransmittedCarrierPower )'
      },
      {
        kpiC: 'Transmited Carrier Power Non HS',
        kpiE: 'Transmited Carrier Power Non HS',
        counter: 'avg ( pmTransmittedCarrierPowerNonHs )'
      },
      {
        kpiC: 'Max Transmited Carrier Power Non HS',
        kpiE: 'Max Transmited Carrier Power Non HS',
        counter: 'max ( pmTransmittedCarrierPowerNonHs )'
      },
      {
        kpiC: 'Transmited Carrier Power HS',
        kpiE: 'Transmited Carrier Power HS',
        counter: 'avg ( pmTransmittedCarrierPowerHs )'
      },
      {
        kpiC: 'Max Transmited Carrier Power HS',
        kpiE: 'Max Transmited Carrier Power HS',
        counter: 'max ( pmTransmittedCarrierPowerHs )'
      },
      {
        kpiC: 'Non HS Transmited Carrier power max utilization[%]',
        kpiE: 'Non HS Transmited Carrier power max utilization[%]',
        counter:
          '100 * max ( pmTransmittedCarrierPowerNonHs ) / max ( pmTransmittedCarrierPower )'
      }
    ]
  },
  '3grnc': {
    Integrity: [
      {
        kpiC: 'Cell Traffic Volume DL PS Data HS',
        kpiE: 'Cell Traffic Volume DL PS Data HS',
        counter: 'pmDlTrafficVolumePsIntHs / 1000'
      },
      {
        kpiC: 'Cell Traffic Volume DL PS Streaming HS',
        kpiE: 'Cell Traffic Volume DL PS Streaming HS',
        counter: 'pmDlTrafficVolumePsStrHs / 1000'
      },
      {
        kpiC: 'Cell Traffic Volume UL PS Data EUL',
        kpiE: 'Cell Traffic Volume UL PS Data EUL',
        counter: 'pmUlTrafficVolumePsIntEul / 1000'
      },
      {
        kpiC: 'Ps HS',
        kpiE: 'Ps HS',
        counter:
          '( pmDlTrafficVolumePsIntHs + pmDlTrafficVolumePsStrHs ) / 1000'
      },
      {
        kpiC: 'Ps Interactive (R99)Dl Non Hs',
        kpiE: 'Ps Interactive (R99)Dl Non Hs',
        counter:
          '( pmDlTrafficVolumePs384 + pmDlTrafficVolumePs128 +  pmDlTrafficVolumePs64 + pmDlTrafficVolumePs16 + pmDlTrafficVolumePs8 + pmDlTrafficVolumePsCommon ) / 1000'
      },
      {
        kpiC: 'Ps Interactive (R99)Ul Non Hs',
        kpiE: 'Ps Interactive (R99)Ul Non Hs',
        counter:
          '( pmUlTrafficVolumePs384 + pmUlTrafficVolumePs128 +  pmUlTrafficVolumePs64 + pmUlTrafficVolumePs16 + pmUlTrafficVolumePs8 + pmUlTrafficVolumePsCommon ) / 1000'
      },
      {
        kpiC: 'Cell Traffic Speech(Erl)',
        kpiE: 'Cell Traffic Speech(Erl)',
        counter:
          'pmSumBestAmrNbMmRabEstablish / pmSamplesBestAmrNbMmRabEstablish + pmSumBestAmrWbRabEstablish / pmSamplesBestAmrWbRabEstablish + pmSumBestAmr12200RabEstablish / pmSamplesBestAmr12200RabEstablish + pmSumBestAmr7950RabEstablish / pmSamplesBestAmr7950RabEstablish'
      },
      {
        kpiC: 'Cell Traffic CS64(Erl)',
        kpiE: 'Cell Traffic CS64(Erl)',
        counter: 'pmSumBestCs64RabEstablish / pmSamplesBestCs64RabEstablish'
      },
      {
        kpiC: 'Cell Traffic（CS）',
        kpiE: 'Cell Traffic（CS）',
        counter:
          'pmSumBestAmrNbMmRabEstablish / pmSamplesBestAmrNbMmRabEstablish + pmSumBestAmrWbRabEstablish / pmSamplesBestAmrWbRabEstablish + pmSumBestAmr12200RabEstablish / pmSamplesBestAmr12200RabEstablish + pmSumBestAmr7950RabEstablish / pmSamplesBestAmr7950RabEstablish'
      },
      {
        kpiC: 'PS Data Average RLC Total Throughput DL(kbps)',
        kpiE: 'PS Data Average RLC Total Throughput DL(kbps)',
        counter: 'pmSumDchDlRlcTotPacketThp / pmSamplesDchDlRlcTotPacketThp'
      },
      {
        kpiC: 'HS Data Average RLC Total Throughput DL(kbps)',
        kpiE: 'HS Data Average RLC Total Throughput DL(kbps)',
        counter: 'sum ( pmSumAckedBitsSPi ) / ( 0.002 * pmNoActiveSubFrames )'
      },
      {
        kpiC: 'PS Data Average RLC Total Throughput UL(kbps)',
        kpiE: 'PS Data Average RLC Total Throughput UL(kbps)',
        counter: 'pmSumDchUlRlcTotPacketThp / pmSamplesDchUlRlcTotPacketThp'
      }
    ],
    Mobility: [
      {
        kpiC: 'No of Successful RL Addition Source Best Cell Speech',
        kpiE: 'No of Successful RL Addition Source Best Cell Speech',
        counter: 'pmRlAddSuccessBestCellSpeech'
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Cell Speech',
        kpiE: 'No of attempts RL Addition Source Best Cell Speech',
        counter: 'pmRlAddAttemptsBestCellSpeech'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell Speech(%)',
        kpiE: 'Successful RL Addition Source Best Cell Speech(%)',
        counter:
          '100 * ( pmRlAddSuccessBestCellSpeech / pmRlAddAttemptsBestCellSpeech )'
      },
      {
        kpiC: 'No of Successful RL Addition Source Best Cell CS64',
        kpiE: 'No of Successful RL Addition Source Best Cell CS64',
        counter: 'pmRlAddSuccessBestCellCsConvers'
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Cell CS64',
        kpiE: 'No of attempts RL Addition Source Best Cell CS64',
        counter: 'pmRlAddAttemptsBestCellCsConvers'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell CS64(%)',
        kpiE: 'Successful RL Addition Source Best Cell CS64(%)',
        counter:
          '100 * ( pmRlAddSuccessBestCellCsConvers / pmRlAddAttemptsBestCellCsConvers )'
      },
      {
        kpiC: 'No of Successful RL Addition Source Best Packet Low',
        kpiE: 'No of Successful RL Addition Source Best Packet Low',
        counter: 'pmRlAddSuccessBestCellPacketLow'
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Packet Low',
        kpiE: 'No of attempts RL Addition Source Best Packet Low',
        counter: ' pmRlAddAttemptsBestCellPacketLow'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell Packet Low',
        kpiE: 'Successful RL Addition Source Best Cell Packet Low',
        counter:
          '100 * ( pmRlAddSuccessBestCellPacketLow / pmRlAddAttemptsBestCellPacketLow )'
      },
      {
        kpiC: 'No of Successful RL Addition Source Best Packet High',
        kpiE: 'No of Successful RL Addition Source Best Packet High',
        counter: 'pmRlAddSuccessBestCellPacketHigh'
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Packet High',
        kpiE: 'No of attempts RL Addition Source Best Packet High',
        counter: 'pmRlAddAttemptsBestCellPacketHigh'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell Packet High',
        kpiE: 'Successful RL Addition Source Best Cell Packet High',
        counter:
          '100 * ( pmRlAddSuccessBestCellPacketHigh / pmRlAddAttemptsBestCellPacketHigh )'
      },
      {
        kpiC: 'No of Successful RL Addition Source Best Cell Streaming',
        kpiE: 'No of Successful RL Addition Source Best Cell Streaming',
        counter: 'pmRlAddSuccessBestCellStream '
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Cell Streaming',
        kpiE: 'No of attempts RL Addition Source Best Cell Streaming',
        counter: 'pmRlAddAttemptsBestCellStream'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell Streaming',
        kpiE: 'Successful RL Addition Source Best Cell Streaming',
        counter:
          '100 * ( pmRlAddSuccessBestCellStream / pmRlAddAttemptsBestCellStream )'
      },
      {
        kpiC: 'No of Successful RL Addition Source Best Cell Stand Alone',
        kpiE: 'No of Successful RL Addition Source Best Cell Stand Alone',
        counter: 'pmRlAddSuccessBestCellStandAlone'
      },
      {
        kpiC: 'No of attempts RL Addition Source Best Cell Stand Alone',
        kpiE: 'No of attempts RL Addition Source Best Cell Stand Alone',
        counter: 'pmRlAddAttemptsBestCellStandAlone'
      },
      {
        kpiC: 'Successful RL Addition Source Best Cell Stand Alone',
        kpiE: 'Successful RL Addition Source Best Cell Stand Alone',
        counter:
          '100 * ( pmRlAddSuccessBestCellStandAlone / pmRlAddAttemptsBestCellStandAlone )'
      },
      {
        kpiC: 'No of Successful RL Addition Target cell',
        kpiE: 'No of Successful RL Addition Target cell',
        counter: 'pmNoTimesRlAddToActSet'
      },
      {
        kpiC: 'No of attempts RL Addition Target cell',
        kpiE: 'No of attempts RL Addition Target cell',
        counter: 'pmNoTimesRlAddToActSet + pmNoTimesCellFailAddToActSet'
      },
      {
        kpiC: 'Successful RL Addition Target Cell',
        kpiE: 'Successful RL Addition Target Cell',
        counter:
          '100 * pmNoTimesRlAddToActSet / ( pmNoTimesRlAddToActSet + pmNoTimesCellFailAddToActSet )'
      },
      {
        kpiC: 'Successful non-blind IFHO for CS Speech',
        kpiE: 'Successful non-blind IFHO for CS Speech',
        counter: 'pmSuccNonBlindInterFreqHoCsSpeech12'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for CS Speech',
        kpiE: 'Attempts of non-blind IFHO for CS Speech',
        counter: 'pmAttNonBlindInterFreqHoCsSpeech12'
      },
      {
        kpiC: 'IF HO Success Rate CS Speech [%]',
        kpiE: 'IF HO Success Rate CS Speech [%]',
        counter:
          '100 * ( pmSuccNonBlindInterFreqHoCsSpeech12 / pmAttNonBlindInterFreqHoCsSpeech12 )'
      },
      {
        kpiC: 'Successful non-blind IFHO for CS Conversational RAB',
        kpiE: 'Successful non-blind IFHO for CS Conversational RAB',
        counter: 'pmSuccNonBlindInterFreqHoCsConversational'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for CS Conversational RAB',
        kpiE: 'Attempts of non-blind IFHO for CS Conversational RAB',
        counter: 'pmAttNonBlindInterFreqHoCsConversational'
      },
      {
        kpiC: 'IF HO Success Rate CS64 [%]',
        kpiE: 'IF HO Success Rate CS64 [%]',
        counter:
          '100 * ( pmSuccNonBlindInterFreqHoCsConversational / pmAttNonBlindInterFreqHoCsConversational )'
      },
      {
        kpiC:
          'Succesful non-blind IFHO for PS Interactive ( data rate =< 64kbps)',
        kpiE:
          'Succesful non-blind IFHO for PS Interactive ( data rate =< 64kbps)',
        counter: 'pmSuccNonBlindInterFreqHoPsInteractiveLess64'
      },
      {
        kpiC:
          'Attempts of non-blind IFHO for PS Interactive ( data rate =< 64kbps)',
        kpiE:
          'Attempts of non-blind IFHO for PS Interactive ( data rate =< 64kbps)',
        counter: 'pmAttNonBlindInterFreqHoPsInteractiveLess64'
      },
      {
        kpiC:
          'Succesful non-blind IFHO for PS Interactive ( data rate > 64kbps)',
        kpiE:
          'Succesful non-blind IFHO for PS Interactive ( data rate > 64kbps)',
        counter: 'pmSuccNonBlindInterFreqHoPsInteractiveGreater64'
      },
      {
        kpiC:
          'Attempts of non-blind IFHO for PS Interactive ( data rate > 64kbps)',
        kpiE:
          'Attempts of non-blind IFHO for PS Interactive ( data rate > 64kbps)',
        counter: 'pmAttNonBlindInterFreqHoPsInteractiveGreater64'
      },
      {
        kpiC: 'IF HO Success Rate PS Interactive [%]',
        kpiE: 'IF HO Success Rate PS Interactive [%]',
        counter:
          '100 * ( pmSuccNonBlindInterFreqHoPsInteractiveLess64 + pmSuccNonBlindInterFreqHoPsInteractiveGreater64 ) /  ( pmAttNonBlindInterFreqHoPsInteractiveLess64 + pmAttNonBlindInterFreqHoPsInteractiveGreater64 )'
      },
      {
        kpiC: 'Successful non-blind IFHO for streaming RABs',
        kpiE: 'Successful non-blind IFHO for streaming RABs',
        counter: 'pmSuccNonBlindInterFreqHoStreamingOther'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for streaming RABs',
        kpiE: 'Attempts of non-blind IFHO for streaming RABs',
        counter: 'pmAttNonBlindInterFreqHoStreamingOther'
      },
      {
        kpiC: 'IF HO Success Rate Streaming [%]',
        kpiE: 'IF HO Success Rate Streaming [%]',
        counter:
          '100 * ( pmSuccNonBlindInterFreqHoStreamingOther  / pmAttNonBlindInterFreqHoStreamingOther )'
      },
      {
        kpiC: 'Successful non-blind IFHO for PS Ineractive HS',
        kpiE: 'Successful non-blind IFHO for PS Ineractive HS',
        counter: 'pmSuccNonBlindIfhoPsIntHs'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for PS Interactive HS',
        kpiE: 'Attempts of non-blind IFHO for PS Interactive HS',
        counter: 'pmAttNonBlindIfhoPsIntHs'
      },
      {
        kpiC: 'IF HO Success Rate PS Interactive HS [%]',
        kpiE: 'IF HO Success Rate PS Interactive HS [%]',
        counter:
          '100 *  ( pmSuccNonBlindIfhoPsIntHs / pmAttNonBlindIfhoPsIntHs )'
      },
      {
        kpiC: 'Successful non-blind IFHO for PS Ineractive Eul',
        kpiE: 'Successful non-blind IFHO for PS Ineractive Eul',
        counter: 'pmSuccNonBlindIfhoPsIntEul'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for PS Interactive Eul',
        kpiE: 'Attempts of non-blind IFHO for PS Interactive Eul',
        counter: 'pmAttNonBlindIfhoPsIntEul'
      },
      {
        kpiC: 'IF HO Success Rate PS Interactive EUL [%]',
        kpiE: 'IF HO Success Rate PS Interactive EUL [%]',
        counter:
          '100 *  ( pmSuccNonBlindIfhoPsIntEul / pmAttNonBlindIfhoPsIntEul )'
      },
      {
        kpiC: 'Successful non-blind IFHO for PS Streaming HS',
        kpiE: 'Successful non-blind IFHO for PS Streaming HS',
        counter: 'pmSuccNonBlindIfhoPsStrHs'
      },
      {
        kpiC: 'Attempts of non-blind IFHO for PS Streaming HS',
        kpiE: 'Attempts of non-blind IFHO for PS Streaming HS',
        counter: 'pmAttNonBlindIfhoPsStrHs'
      },
      {
        kpiC: 'IF HO Success Rate PS Streaming HS [%]',
        kpiE: 'IF HO Success Rate PS Streaming HS [%]',
        counter:
          '100 * ( pmSuccNonBlindIfhoPsStrHs / pmAttNonBlindIfhoPsStrHs )'
      },
      {
        kpiC: 'No of successful outgoing IRAT HO for Speech RAB',
        kpiE: 'No of successful outgoing IRAT HO for Speech RAB',
        counter: 'pmNoSuccessOutIratHoSpeech '
      },
      {
        kpiC: 'No of attempts of outgoing IRAT HO for Speech RAB',
        kpiE: 'No of attempts of outgoing IRAT HO for Speech RAB',
        counter: 'pmNoAttOutIratHoSpeech '
      },
      {
        kpiC: 'No of successful outgoing IRAT HO for Multi RAB',
        kpiE: 'No of successful outgoing IRAT HO for Multi RAB',
        counter: 'pmNoSuccessOutIratHoMulti'
      },
      {
        kpiC: 'No of attempts of outgoing IRAT HO for Multi RAB',
        kpiE: 'No of attempts of outgoing IRAT HO for Multi RAB',
        counter: 'pmNoAttOutIratHoMulti'
      },
      {
        kpiC: 'No of successful outgoing IRAT HO for CS57',
        kpiE: 'No of successful outgoing IRAT HO for CS57',
        counter: 'pmNoSuccessOutIratHoCs57'
      },
      {
        kpiC: 'No of attempts of outgoing IRAT HO for CS57',
        kpiE: 'No of attempts of outgoing IRAT HO for CS57',
        counter: 'pmNoAttOutIratHoCs57'
      },
      {
        kpiC: 'No of successful outgoing IRAT HO for Sb speech',
        kpiE: 'No of successful outgoing IRAT HO for Sb speech',
        counter: 'pmNoSucceessOutSbHoSpeech'
      },
      {
        kpiC: 'No of attempts of outgoing IRAT HO for Sb speech',
        kpiE: 'No of attempts of outgoing IRAT HO for Sb speech',
        counter: 'pmNoAttOutSbHoSpeech'
      },
      {
        kpiC: 'CS IRAT HO Success Rate (outgoing)',
        kpiE: 'CS IRAT HO Success Rate (outgoing)',
        counter:
          '100 * ( pmNoSuccessOutIratHoCs57 + pmNoSuccessOutIratHoSpeech + pmNoSuccessOutIratHoMulti + pmNoSucceessOutSbHoSpeech ) / ( pmNoAttOutIratHoCs57+pmNoAttOutIratHoMulti + pmNoAttOutIratHoSpeech + pmNoAttOutSbHoSpeech )'
      },
      {
        kpiC: 'Successful  IRAT CC for UE on dedicated channel for PS RAB',
        kpiE: 'Successful  IRAT CC for UE on dedicated channel for PS RAB',
        counter: 'pmNoOutIratCcSuccess'
      },
      {
        kpiC: 'Attempts of IRAT CC for UE on dedicated channel for PS RAB',
        kpiE: 'Attempts of IRAT CC for UE on dedicated channel for PS RAB',
        counter: 'pmNoOutIratCcAtt'
      },
      {
        kpiC: 'PS IRAT (UMTS to GSM) Success Rate',
        kpiE: 'PS IRAT (UMTS to GSM) Success Rate',
        counter:
          '100 * ( pmNoOutIratCcSuccess / ( pmNoOutIratCcAtt - pmNoOutIratCcReturnOldCh )'
      },
      {
        kpiC: 'Successful incoming IRAT CC for PS RAB(GPRS to WCDMA)',
        kpiE: 'Successful incoming IRAT CC for PS RAB(GPRS to WCDMA)',
        counter: 'pmTotNoRrcConnectSuccessIratCellResel'
      },
      {
        kpiC: 'Attempts of inncoming IRAT CC for PS RAB(GPRS to WCDMA)',
        kpiE: 'Attempts of inncoming IRAT CC for PS RAB(GPRS to WCDMA)',
        counter: 'pmTotNoRrcConnectAttIratCellResel'
      },
      {
        kpiC: 'PS IRAT HO Incoming Success Rate(GPRS to WCDMA)',
        kpiE: 'PS IRAT HO Incoming Success Rate(GPRS to WCDMA)',
        counter:
          '100 * ( pmTotNoRrcConnectSuccessIratCellResel / pmTotNoRrcConnectAttIratCellResel - pmTotNoRrcConnectFailCongIratCellResel )'
      },
      {
        kpiC: 'Ue rejection failures for Speech RAB',
        kpiE: 'Ue rejection failures for Speech RAB',
        counter: 'pmNoFailOutIratHoSpeechUeRejection'
      },
      {
        kpiC: 'Ue rejection failures for MultiRAB',
        kpiE: 'Ue rejection failures for MultiRAB',
        counter: 'pmNoFailOutIratHoMultiUeRejection'
      },
      {
        kpiC: 'Physical channel failure for Speech RAB',
        kpiE: 'Physical channel failure for Speech RAB',
        counter: 'pmNoFailOutIratHoSpeechReturnOldChPhyChFail'
      },
      {
        kpiC: 'Physical channel failure for Multi RAB',
        kpiE: 'Physical channel failure for Multi RAB',
        counter: 'pmNoFailOutIratHoMultiReturnOldChPhyChFail'
      },
      {
        kpiC: 'Other reason failure for Speech RAB',
        kpiE: 'Other reason failure for Speech RAB',
        counter: 'pmNoFailOutIratHoSpeechReturnOldChNotPhyChFail'
      },
      {
        kpiC: 'Other reason failure for Multi RAB',
        kpiE: 'Other reason failure for Multi RAB',
        counter: 'pmNoFailOutIratHoMultiReturnOldChNotPhyChFail'
      },
      {
        kpiC: 'IRAT CS Incoming HO success',
        kpiE: 'IRAT CS Incoming HO success',
        counter: 'pmNoInCsIratHoSuccess'
      },
      {
        kpiC: 'IRAT CS Incoming HO attempt',
        kpiE: 'IRAT CS Incoming HO attempt',
        counter: 'pmNoInCsIratHoAtt'
      },
      {
        kpiC: 'Cell IRAT HO percentage(CS)[%]',
        kpiE: 'Cell IRAT HO percentage(CS)[%]',
        counter:
          ' 100 * ( pmNoAttOutIratHoSpeech + pmNoAttOutIratHoMulti ) / pmNoRabEstablishSuccessSpeech'
      },
      {
        kpiC: 'Cell IRAT HO percentage(PS)[%]',
        kpiE: 'Cell IRAT HO percentage(PS)[%]',
        counter:
          '100 * ( pmNoOutIratCcAtt / pmNoRabEstablishSuccessPacketInteractive )'
      },
      {
        kpiC: 'PS Rab Establish success',
        kpiE: 'PS Rab Establish success',
        counter: 'pmNoRabEstablishSuccessPacketInteractive'
      },
      {
        kpiC: 'Speech Rab Establish success',
        kpiE: 'Speech Rab Establish success',
        counter: 'pmNoRabEstablishSuccessSpeech'
      }
    ],
    Retainability: [
      {
        kpiC: 'Normal release (Speech)',
        kpiE: 'Normal release (Speech)',
        counter: 'pmNoNormalRabReleaseSpeech'
      },
      {
        kpiC: 'System release (Speech)',
        kpiE: 'System release (Speech)',
        counter: 'pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'DCR (Speech ) [%]',
        kpiE: 'DCR (Speech ) [%]',
        counter:
          '100*pmNoSystemRabReleaseSpeech / ( pmNoNormalRabReleaseSpeech + pmNoSystemRabReleaseSpeech )'
      },
      {
        kpiC: 'Normal release (Video)',
        kpiE: 'Normal release (Video)',
        counter: 'pmNoNormalRabReleaseCs64'
      },
      {
        kpiC: 'System release (Video)',
        kpiE: 'System release (Video)',
        counter: 'pmNoSystemRabReleaseCs64'
      },
      {
        kpiC: 'DCR (Video ) [%]',
        kpiE: 'DCR (Video ) [%]',
        counter:
          '100*pmNoSystemRabReleaseCs64 / ( pmNoNormalRabReleaseCs64+pmNoSystemRabReleaseCs64 )'
      },
      {
        kpiC: 'Normal release (PS non HS)',
        kpiE: 'Normal release (PS non HS)',
        counter:
          '( pmNoSystemRabReleasePacket + pmNoNormalRabReleasePacket - pmNoSystemRbReleaseHs - pmNoNormalRbReleaseHs - pmNoSystemRabReleasePacketStream - pmNoNormalRabReleasePacketStream - pmNoSystemRabReleasePacketStream128-pmNoNormalRabReleasePacketStream128 - pmNoSystemRabReleasePacketUra - pmNoNormalRabReleasePacketUra + pmChSwitchSuccFachUra + DC_E_RAN_UCELL.pmDlUpswitchSuccessHs )'
      },
      {
        kpiC: 'System release (PS non HS)',
        kpiE: 'System release (PS non HS)',
        counter:
          'pmNoSystemRabReleasePacket - pmNoSystemRbReleaseHs - pmNoSystemRabReleasePacketStream - pmNoSystemRabReleasePacketStream128 - pmNoSystemRabReleasePacketUra'
      },
      {
        kpiC: 'Channel Switching Dch to Hs',
        kpiE: 'Channel Switching Dch to Hs',
        counter: 'pmDlUpswitchSuccessHs'
      },
      {
        kpiC: 'Channel Switching Dch to FACH',
        kpiE: 'Channel Switching Dch to FACH',
        counter: 'pmPsIntDchToFachSucc'
      },
      {
        kpiC: 'DCR (PS non HS ) [%]',
        kpiE: 'DCR (PS non HS ) [%]',
        counter:
          '100 * ( pmNoSystemRabReleasePacket - pmNoSystemRbReleaseHs - pmNoSystemRabReleasePacketStream - pmNoSystemRabReleasePacketStream128 - pmNoSystemRabReleasePacketUra ) / ( pmNoSystemRabReleasePacket + pmNoNormalRabReleasePacket - pmNoSystemRbReleaseHs - pmNoNormalRbReleaseHs - pmNoSystemRabReleasePacketStream - pmNoNormalRabReleasePacketStream - pmNoSystemRabReleasePacketStream128 - pmNoNormalRabReleasePacketStream128 - pmNoSystemRabReleasePacketUra - pmNoNormalRabReleasePacketUra + pmChSwitchSuccFachUra + DC_E_RAN_UCELL.pmDlUpswitchSuccessHs )'
      },
      {
        kpiC: 'Normal release (HS)',
        kpiE: 'Normal release (HS)',
        counter: 'pmNoNormalRbReleaseHs + pmNoNormalRabReleasePsStreamHs'
      },
      {
        kpiC: 'System release (HS)',
        kpiE: 'System release (HS)',
        counter: 'pmNoSystemRabReleasePsStreamHs + pmNoSystemRbReleaseHs'
      },
      {
        kpiC: 'Channel Switching HS to Dch',
        kpiE: 'Channel Switching HS to Dch',
        counter: 'pmHsToDchSuccess'
      },
      {
        kpiC:
          'Channel Switching CELL_DCH to CELL_FACH and E-DCH/HSDPA to RACH/FACH',
        kpiE:
          'Channel Switching CELL_DCH to CELL_FACH and E-DCH/HSDPA to RACH/FACH',
        counter: 'pmDownSwitchSuccess'
      },
      {
        kpiC: 'DCR (HS ) [%]',
        kpiE: 'DCR (HS ) [%]',
        counter:
          '100 * ( pmNoSystemRabReleasePsStreamHs + pmNoSystemRbReleaseHs ) / ( pmNoSystemRbReleaseHs + pmNoNormalRbReleaseHs + pmNoSystemRabReleasePsStreamHs + pmNoNormalRabReleasePsStreamHs + pmDownSwitchSuccess + pmHsToDchSuccess )'
      },
      {
        kpiC: 'Normal release (EUL)',
        kpiE: 'Normal release (EUL)',
        counter: 'pmNoNormalRbReleaseEul'
      },
      {
        kpiC: 'System release (EUL)',
        kpiE: 'System release (EUL)',
        counter: 'pmNoSystemRbReleaseEul'
      },
      {
        kpiC: 'Channel Switching EUL to Dch',
        kpiE: 'Channel Switching EUL to Dch',
        counter: 'pmEulToDchSuccess'
      },
      {
        kpiC: 'DCR (EUL ) [%]',
        kpiE: 'DCR (EUL ) [%]',
        counter:
          '100 * pmNoSystemRbReleaseEul / ( pmNoSystemRbReleaseEul + pmNoNormalRbReleaseEul + pmDownSwitchSuccess + ToDchSuccess ) '
      },
      {
        kpiC: '3G drop',
        kpiE: '3G drop',
        counter:
          'pmNoSystemRabReleaseSpeech + pmNoSystemRabReleaseCs64 + pmNoSystemRabReleaseCsStream+pmNoSystemRabReleasePacket + pmNoSystemRabReleasePsStreamHs + pmNoSystemRabReleasePacketStream + pmNoSystemRabReleasePacketStream128'
      },
      {
        kpiC: '3G RAB establish success',
        kpiE: '3G RAB establish success',
        counter:
          'pmNoNormalRabReleaseSpeech + pmNoSystemRabReleaseSpeech+pmNoNormalRabReleaseCs64 + pmNoSystemRabReleaseCs64 + pmNoNormalRabReleaseCsStream + pmNoSystemRabReleaseCsStream + pmNoNormalRabReleasePacket + pmNoNormalRabReleasePacketStream + pmNoSystemRabReleasePacketStream + pmNoNormalRabReleasePacketStream128 + pmNoSystemRabReleasePacketStream128 + pmNoSystemRabReleasePsStreamHs + pmNoNormalRabReleasePsStreamHs + pmDownSwitchSuccess'
      },
      {
        kpiC: '3G DCR(%)',
        kpiE: '3G DCR(%)',
        counter:
          '100 * ( pmNoSystemRabReleaseSpeech + pmNoSystemRabReleaseCs64 + pmNoSystemRabReleaseCsStream + pmNoSystemRabReleasePacket + pmNoSystemRabReleasePsStreamHs + pmNoSystemRabReleasePacketStream + pmNoSystemRabReleasePacketStream128 ) / ( pmNoNormalRabReleaseSpeech + pmNoSystemRabReleaseSpeech + pmNoNormalRabReleaseCs64 + pmNoSystemRabReleaseCs64 + pmNoNormalRabReleaseCsStream + pmNoSystemRabReleaseCsStream + pmNoNormalRabReleasePacket + pmNoSystemRabReleasePacket + pmDownSwitchSuccess + pmNoNormalRabReleasePacketStream + pmNoSystemRabReleasePacketStream + pmNoNormalRabReleasePacketStream128 + pmNoSystemRabReleasePacketStream128 + pmNoSystemRabReleasePsStreamHs + pmNoNormalRabReleasePsStreamHs )'
      },
      {
        kpiC: 'Speech drop (soft handover action)',
        kpiE: 'Speech drop (soft handover action)',
        counter: 'pmNoSysRelSpeechSoHo'
      },
      {
        kpiC: 'Drop due to Soft Handover Action [%]',
        kpiE: 'Drop due to Soft Handover Action [%]',
        counter: '100 * pmNoSysRelSpeechSoHo / pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'Speech drop (missing neighbour)',
        kpiE: 'Speech drop (missing neighbour)',
        counter: 'pmNoSysRelSpeechNeighbr'
      },
      {
        kpiC: 'Drop due to Missing Neighbour [%]',
        kpiE: 'Drop due to Missing Neighbour [%]',
        counter: '100 * pmNoSysRelSpeechNeighbr / pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'Speech drop (UL synchronization)',
        kpiE: 'Speech drop (UL synchronization)',
        counter: 'pmNoSysRelSpeechUlSynch'
      },
      {
        kpiC: 'Drop due to UL Synchronization Lost [%]',
        kpiE: 'Drop due to UL Synchronization Lost [%]',
        counter: '100 * pmNoSysRelSpeechUlSynch / pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'Speech drop (congestion)',
        kpiE: 'Speech drop (congestion)',
        counter: 'pmNoOfTermSpeechCong'
      },
      {
        kpiC: 'Drop due to Congestion [%]',
        kpiE: 'Drop due to Congestion [%]',
        counter: '100 * pmNoOfTermSpeechCong / pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'Speech drop (IRAT action)',
        kpiE: 'Speech drop (IRAT action)',
        counter:
          'pmNoAttOutIratHoSpeech - pmNoFailOutIratHoSpeechReturnOldChPhyChFail - pmNoSuccessOutIratHoSpeech - pmNoFailOutIratHoSpeechUeRejection'
      },
      {
        kpiC: 'Drop due to IRAT Handover Lost [%]',
        kpiE: 'Drop due to IRAT Handover Lost [%]',
        counter:
          '( pmNoAttOutIratHoSpeech - pmNoFailOutIratHoSpeechReturnOldChPhyChFail - pmNoSuccessOutIratHoSpeech - pmNoFailOutIratHoSpeechUeRejection ) / pmNoSystemRabReleaseSpeech'
      },
      {
        kpiC: 'Downtime Automatic',
        kpiE: 'Downtime Automatic',
        counter: 'pmCellDowntimeAuto'
      },
      {
        kpiC: 'Downtime Manually',
        kpiE: 'Downtime Manually',
        counter: 'pmCellDowntimeMan'
      },
      {
        kpiC: 'DOWNTIME_COMB',
        kpiE: 'DOWNTIME_COMB',
        counter: '100 * ( pmCellDowntimeAuto + pmCellDowntimeMan ) / 3600'
      },
      {
        kpiC: 'Downtima_COMB(HS)[%]',
        kpiE: 'Downtima_COMB(HS)[%]',
        counter: '100 * ( pmHsDowntimeMan + pmHsDowntimeAuto ) / 3600'
      },
      {
        kpiC: 'Downtimw_COMB(EUL)[%]',
        kpiE: 'Downtimw_COMB(EUL)[%]',
        counter: '100 * ( pmEULDowntimeMan+pmEULDowntimeAuto ) / 3600'
      }
    ],
    Accessibility: [
      {
        kpiC: 'RRC connection request (total)',
        kpiE: 'RRC connection request (total)',
        counter: 'pmTotNoRrcConnectReq'
      },
      {
        kpiC: 'RRC connection success (total)',
        kpiE: 'RRC connection success (total)',
        counter: 'pmTotNoRrcConnectReqSuccess'
      },
      {
        kpiC: 'RRC connection success rate (total) [%]',
        kpiE: 'RRC connection success rate (total) [%]',
        counter:
          '100 * ( pmTotNoRrcConnectReqSuccess  / （pmTotNoRrcConnectReq - pmNoLoadSharingRrcConn ）'
      },
      {
        kpiC: 'RRC connection request (CS)',
        kpiE: 'RRC connection request (CS)',
        counter: 'pmTotNoRrcConnectReqCs'
      },
      {
        kpiC: 'RRC connection success (CS)',
        kpiE: 'RRC connection success (CS)',
        counter: 'pmTotNoRrcConnectReqCsSucc'
      },
      {
        kpiC: 'RRC connection success rate (CS) [%]',
        kpiE: 'RRC connection success rate (CS) [%]',
        counter:
          '100 * ( pmTotNoRrcConnectReqCsSucc / pmTotNoRrcConnectReqCs - pmNoLoadSharingRrcConnCs  )'
      },
      {
        kpiC: 'RRC connection request (PS)',
        kpiE: 'RRC connection request (PS)',
        counter: 'pmTotNoRrcConnectReqPs'
      },
      {
        kpiC: 'RRC connection success (PS)',
        kpiE: 'RRC connection success (PS)',
        counter: 'pmTotNoRrcConnectReqPsSucc'
      },
      {
        kpiC: 'RRC connection success rate (PS) [%]',
        kpiE: 'RRC connection success rate (PS) [%]',
        counter:
          '100 * ( pmTotNoRrcConnectReqPsSucc / pmTotNoRrcConnectReqPs  - pmNoLoadSharingRrcConnPs )'
      },
      {
        kpiC: 'RAB request (Speech)',
        kpiE: 'RAB request (Speech)',
        counter: 'pmNoRabEstablishAttemptSpeech'
      },
      {
        kpiC: 'RAB success (Speech)',
        kpiE: 'RAB success (Speech)',
        counter: ' pmNoRabEstablishSuccessSpeech'
      },
      {
        kpiC: 'RAB success rate (Speech)  [%]',
        kpiE: 'RAB success rate (Speech)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessSpeech / pmNoRabEstablishAttemptSpeech - pmNoDirRetryAtt )'
      },
      {
        kpiC: 'CSSR (Speech) [%]',
        kpiE: 'CSSR (Speech) [%]',
        counter:
          '100 * ( pmTotNoRrcConnectReqCsSucc / ( pmTotNoRrcConnectReqCs - pmNoLoadSharingRrcConnCs ) ) * ( pmNoRabEstablishSuccessSpeech / ( pmNoRabEstablishAttemptSpeech - pmNoDirRetryAtt ) )'
      },
      {
        kpiC: 'RAB request (CS64)',
        kpiE: 'RAB request (CS64)',
        counter: 'pmNoRabEstablishAttemptCS64'
      },
      {
        kpiC: 'RAB success (CS64)',
        kpiE: 'RAB success (CS64)',
        counter: ' pmNoRabEstablishSuccessCS64'
      },
      {
        kpiC: 'RAB success rate (CS64)  [%]',
        kpiE: 'RAB success rate (CS64)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessCS64 / pmNoRabEstablishAttemptCS64 )'
      },
      {
        kpiC: 'CSSR (CS64) [%]',
        kpiE: 'CSSR (CS64) [%]',
        counter:
          '100 * ( pmTotNoRrcConnectReqCsSucc / ( pmTotNoRrcConnectReqCs - pmNoLoadSharingRrcConnCs ) ) * ( pmNoRabEstablishSuccessCS64 / ( pmNoRabEstablishAttemptCS64 ) )'
      },
      {
        kpiC: 'RAB request (PS)',
        kpiE: 'RAB request (PS)',
        counter: 'pmNoRabEstablishAttemptPacketInteractive'
      },
      {
        kpiC: 'RAB success (PS)',
        kpiE: 'RAB success (PS)',
        counter: ' pmNoRabEstablishSuccessPacketInteractive'
      },
      {
        kpiC: 'RAB success rate (PS)  [%]',
        kpiE: 'RAB success rate (PS)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessPacketInteractive / pmNoRabEstablishAttemptPacketInteractive )'
      },
      {
        kpiC: 'CSSR (PS ) [%]',
        kpiE: 'CSSR (PS ) [%]',
        counter:
          '100 * ( ( pmTotNoRrcConnectReqPsSucc / pmTotNoRrcConnectReqPs - pmNoLoadSharingRrcConnPs ) * ( pmNoRabEstablishSuccessPacketInteractive / pmNoRabEstablishAttemptPacketInteractive ) )'
      },
      {
        kpiC: 'RAB request (HS)',
        kpiE: 'RAB request (HS)',
        counter: 'pmNoRabEstablishAttemptPacketInteractiveHs'
      },
      {
        kpiC: 'RAB success (HS)',
        kpiE: 'RAB success (HS)',
        counter: 'pmNoRabEstablishSuccessPacketInteractiveHs'
      },
      {
        kpiC: 'pmNoRabEstBlockTnPsIntHsBest',
        kpiE: 'pmNoRabEstBlockTnPsIntHsBest',
        counter: 'pmNoRabEstBlockTnPsIntHsBest'
      },
      {
        kpiC: 'pmNoOfNonHoReqDeniedHs',
        kpiE: 'pmNoOfNonHoReqDeniedHs',
        counter: 'pmNoOfNonHoReqDeniedHs'
      },
      {
        kpiC: 'RAB success rate (HS)  [%]',
        kpiE: 'RAB success rate (HS)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessPacketInteractiveHs / pmNoRabEstablishAttemptPacketInteractiveHs )'
      },
      {
        kpiC: 'CSSR (HSDPA) [%]',
        kpiE: 'CSSR (HSDPA) [%]',
        counter:
          '100 * ( ( pmTotNoRrcConnectReqPsSucc / ( pmTotNoRrcConnectReqPs - pmNoLoadSharingRrcConnPs) ) * ( pmNoRabEstablishSuccessPacketInteractiveHs / ( pmNoRabEstablishAttemptPacketInteractiveHs ) ) )'
      },
      {
        kpiC: 'RAB request (EUL)',
        kpiE: 'RAB request (EUL)',
        counter: 'pmNoRabEstablishAttemptPacketInteractiveEul'
      },
      {
        kpiC: 'RAB success (EUL)',
        kpiE: 'RAB success (EUL)',
        counter: ' pmNoRabEstablishSuccessPacketInteractiveEul'
      },
      {
        kpiC: 'RAB success rate (EUL)  [%]',
        kpiE: 'RAB success rate (EUL)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessPacketInteractiveEul / pmNoRabEstablishAttemptPacketInteractiveEul )'
      },
      {
        kpiC: 'CSSR (EUL) [%]',
        kpiE: 'CSSR (EUL) [%]',
        counter:
          '100 * ( ( pmTotNoRrcConnectReqPsSucc / ( pmTotNoRrcConnectReqPs - pmNoLoadSharingRrcConnPs ) ) * ( pmNoRabEstablishSuccessPacketInteractiveEul / ( pmNoRabEstablishAttemptPacketInteractiveEul ) ) )'
      },
      {
        kpiC: 'RAB request (CS57)',
        kpiE: 'RAB request (CS57)',
        counter: 'pmNoRabEstablishAttemptCS57'
      },
      {
        kpiC: 'RAB success (CS57)',
        kpiE: 'RAB success (CS57)',
        counter: ' pmNoRabEstablishSuccessCS57'
      },
      {
        kpiC: 'RAB success rate (CS57)  [%]',
        kpiE: 'RAB success rate (CS57)  [%]',
        counter:
          '100 * ( pmNoRabEstablishSuccessCS57 / pmNoRabEstablishAttemptCS57 )'
      },
      {
        kpiC: 'CSSR(CS57)[%]',
        kpiE: 'CSSR(CS57)[%]',
        counter:
          '100 * ( ( pmTotNoRrcConnectReqPsSucc / ( pmTotNoRrcConnectReqPs - pmNoLoadSharingRrcConnPs ) ) * ( pmNoRabEstablishSuccessCS57 / ( pmNoRabEstablishAttemptCS57 ) ) )'
      },
      {
        kpiC: 'RAB request (PS_NON_HS)',
        kpiE: 'RAB request (PS_NON_HS)',
        counter: 'pmNoRabEstAttemptPsIntNonHs'
      },
      {
        kpiC: 'RAB success (PS_NON_HS)',
        kpiE: 'RAB success (PS_NON_HS)',
        counter: 'pmNoRabEst SuccessPsIntNonHs'
      },
      {
        kpiC: 'UL ASE Limit Failure',
        kpiE: 'UL ASE Limit Failure',
        counter: 'pmNoFailedRabEstAttemptLackUlAse'
      },
      {
        kpiC: 'DL ASE Limit Failure',
        kpiE: 'DL ASE Limit Failure',
        counter: 'pmNoFailed RabEstAttemptLackDlAse'
      },
      {
        kpiC: 'Code Usage Failure',
        kpiE: 'Code Usage Failure',
        counter: 'pmNoFailedRabEstAttemptLackDlChnlCode'
      },
      {
        kpiC: 'Power Limit Failure',
        kpiE: 'Power Limit Failure',
        counter: 'pmNoFailedRabEstAttemptLackDlPwr'
      },
      {
        kpiC: 'SF Histogram Limit Failure',
        kpiE: 'SF Histogram Limit Failure',
        counter: 'pmNoFailedRabEstAttemptExceedConnLimit'
      },
      {
        kpiC: 'UL HW Limit Failure',
        kpiE: 'UL HW Limit Failure',
        counter: 'pmNoFailedRabEstAttemptLackUlHwBest'
      },
      {
        kpiC: 'DL HW Limit Failure',
        kpiE: 'DL HW Limit Failure',
        counter: 'pmNoFailedRabEstAttemptLackDlHwBest'
      },
      {
        kpiC: 'Blocked due to TN CS57',
        kpiE: 'Blocked due to TN CS57',
        counter: 'pmNoRabEstBlockTnCs57'
      },
      {
        kpiC: 'Blocked due to TN CS64',
        kpiE: 'Blocked due to TN CS64',
        counter: 'pmNoRabEstBlockTnCs64'
      },
      {
        kpiC: 'Blocked due to TN PS Interactive Non HS',
        kpiE: 'Blocked due to TN PS Interactive Non HS',
        counter: 'pmNoRabEstBlockTnPsIntNonHs'
      },
      {
        kpiC: 'Blocked due to TN PS Streaming Non HS',
        kpiE: 'Blocked due to TN PS Streaming Non HS',
        counter: 'pmNoRabEstBlockTnPsIntNonHs'
      },
      {
        kpiC: 'Blocked due to TN PS Interactive HS',
        kpiE: 'Blocked due to TN PS Interactive HS',
        counter: 'pmNoRabEstBlockTnPsIntHs'
      },
      {
        kpiC: 'Blocked due to TN PS Streaming HS',
        kpiE: 'Blocked due to TN PS Streaming HS',
        counter: 'pmNoRabEstBlockTnPsStreamHs'
      },
      {
        kpiC: 'Blocked due to Node Speech',
        kpiE: 'Blocked due to Node Speech',
        counter: 'pmNoRabEstBlockNodeSpeech'
      },
      {
        kpiC: 'Blocked due to Node CS57',
        kpiE: 'Blocked due to Node CS57',
        counter: 'pmNoRabEstBlockNodeCs57'
      },
      {
        kpiC: 'Blocked due to Node CS64',
        kpiE: 'Blocked due to Node CS64',
        counter: 'pmNoRabEstBlockNodeCs64'
      },
      {
        kpiC: 'Blocked due to Node PS Interactive Non HS',
        kpiE: 'Blocked due to Node PS Interactive Non HS',
        counter: 'pmNoRabEstBlkNodePsIntNon'
      },
      {
        kpiC: 'Blocked due to Node PS Streaming Non HS',
        kpiE: 'Blocked due to Node PS Streaming Non HS',
        counter: 'pmNoRabEstBlkTnPsStrNonHs'
      },
      {
        kpiC: 'Blocked due to Node PS Interactive HS',
        kpiE: 'Blocked due to Node PS Interactive HS',
        counter: 'pmNoRabEstBlockNodePsIntHsbest'
      },
      {
        kpiC: 'Blocked due to Node PS Streaming HS',
        kpiE: 'Blocked due to Node PS Streaming HS',
        counter: 'pmNoRabEstBlockNodePsStrHs'
      },
      {
        kpiC: 'Blocked due to RN PS Streaming HS',
        kpiE: 'Blocked due to RN PS Streaming HS',
        counter: 'pmNoRabEstBlockRnBestPsStreamHs'
      },
      {
        kpiC: 'Invalid RAB Establishment Attempts',
        kpiE: 'Invalid RAB Establishment Attempts',
        counter: 'pmNoInvalidRabEstablishAttempts'
      },
      {
        kpiC: 'UE Capability Limit RAB Establishment Failure',
        kpiE: 'UE Capability Limit RAB Establishment Failure',
        counter: 'pmNoRabEstablishFailureUeCapability'
      },
      {
        kpiC: 'UL_AVE_RSSI',
        kpiE: 'UL_AVE_RSSI',
        counter: '-112 + 0.1 * pmSumUlRssi / pmSamplesUlRssi'
      },
      {
        kpiC: 'CS Denied due to License Capacity',
        kpiE: 'CS Denied due to License Capacity',
        counter: 'pmNoFailedRrcConnectReqCsHw'
      },
      {
        kpiC: 'PS Denied due to License Capacity',
        kpiE: 'PS Denied due to License Capacity',
        counter: 'pmNoFailedRrcConnectReqPsHw'
      },
      {
        kpiC: 'Denied due to License Capacity',
        kpiE: 'Denied due to License Capacity',
        counter: 'pmNoFailedRrcConnectReqHw'
      },
      {
        kpiC: 'MP Load Control Failure',
        kpiE: 'MP Load Control Failure',
        counter: 'pmNoRejRrcConnMpLoadC'
      },
      {
        kpiC: 'Admission Control Failure',
        kpiE: 'Admission Control Failure',
        counter: 'pmNoRrcReqDeniedAdm'
      },
      {
        kpiC: 'RRC Failures Admission CS',
        kpiE: 'RRC Failures Admission CS',
        counter: 'pmNoRrcCsReqDeniedAdm'
      },
      {
        kpiC: 'RRC Failures Admission PS',
        kpiE: 'RRC Failures Admission PS',
        counter: 'pmNoRrcPsReqDeniedAdm'
      },
      {
        kpiC: 'Utran Reject RRC Request',
        kpiE: 'Utran Reject RRC Request',
        counter: 'pmTotNoUtranRejRrcConnReq'
      },
      {
        kpiC: 'CS RRC Request Blocked due to Node',
        kpiE: 'CS RRC Request Blocked due to Node',
        counter: 'pmNoRrcConnReqBlockTnCs'
      },
      {
        kpiC: 'PS RRC Request Blocked due to Node',
        kpiE: 'PS RRC Request Blocked due to Node',
        counter: 'pmNoRrcConnReqBlockTnPs'
      },
      {
        kpiC: 'CS RRC Request Blocked due to TN',
        kpiE: 'CS RRC Request Blocked due to TN',
        counter: 'pmNoRrcConnReqBlockNodeCs'
      },
      {
        kpiC: 'PS RRC Request Blocked due to TN',
        kpiE: 'PS RRC Request Blocked due to TN',
        counter: 'pmNoRrcConnReqBlockNodePs'
      },
      {
        kpiC: 'CS Load Sharing RRC Request',
        kpiE: 'CS Load Sharing RRC Request',
        counter: 'pmNoLoadSharingRrcConnCs'
      },
      {
        kpiC: 'PS Load Sharing RRC Request',
        kpiE: 'PS Load Sharing RRC Request',
        counter: 'pmNoLoadSharingRrcConnPs'
      },
      {
        kpiC: 'Load Sharing RRC Request',
        kpiE: 'Load Sharing RRC Request',
        counter: 'pmNoLoadSharingRrcConn'
      },
      {
        kpiC: 'Failure after Admission',
        kpiE: 'Failure after Admission',
        counter:
          'pmTotNoUtranRejRrcConnReq - pmNoRejRrcConnMpLoadC - ( pmNoRrcReqDeniedAdm - pmNoLoadSharingRrcConn )'
      },
      {
        kpiC: 'RRC Setup Radio Failure',
        kpiE: 'RRC Setup Radio Failure',
        counter:
          'pmTotNoRrcConnectReq - pmTotNoRrcConnectReqSuccess - pmTotNoUtranRejRrcConnReq - pmNoLoadSharingRrcConn'
      },
      {
        kpiC: 'RL Failures due to Admission',
        kpiE: 'RL Failures due to Admission',
        counter: 'pmNoRlDeniedAdm'
      },
      {
        kpiC: 'pmTotNoRrcConnectReqSms',
        kpiE: 'pmTotNoRrcConnectReqSms',
        counter: 'pmTotNoRrcConnectReqSms'
      },
      {
        kpiC: 'RRC Connections SMS Radio(%)',
        kpiE: 'RRC Connections SMS Radio(%)',
        counter: '100 * ( pmTotNoRrcConnectReqSms / pmTotNoRrcConnectReqCs )'
      },
      {
        kpiC: 'pmTotNoRrcConnectAttIratCellResel',
        kpiE: 'pmTotNoRrcConnectAttIratCellResel',
        counter: 'pmTotNoRrcConnectAttIratCellResel'
      },
      {
        kpiC: 'RRC Connections IRAT Cell Reselection Radio(%)',
        kpiE: 'RRC Connections IRAT Cell Reselection Radio(%)',
        counter:
          '100 * ( pmTotNoRrcConnectAttIratCellResel / pmTotNoRrcConnectReqCs )'
      },
      {
        kpiC: 'pmTotNoRrcConnectAttCcOrder',
        kpiE: 'pmTotNoRrcConnectAttCcOrder',
        counter: 'pmTotNoRrcConnectAttCcOrder'
      },
      {
        kpiC: 'RRC Connections IRAT Cell Change Order Radio(%)',
        kpiE: 'RRC Connections IRAT Cell Change Order Radio(%)',
        counter:
          '100 * ( pmTotNoRrcConnectAttCcOrder / pmTotNoRrcConnectReqCs )'
      },
      {
        kpiC: 'FailCongIratCcOrder',
        kpiE: 'FailCongIratCcOrder',
        counter: 'pmTotNoRrcConnectFailCongIratCcOrder'
      },
      {
        kpiC: 'FailCongIratCellResel',
        kpiE: 'FailCongIratCellResel',
        counter: 'pmTotNoRrcConnectFailCongIratCellResel'
      }
    ]
  },
  '4g': {
    '4G': [
      {
        kpiC: 'RRC连接建立请求次数',
        kpiE: 'RRC连接建立请求次数',
        counter: 'pmRrcConnEstabAtt - pmRrcConnEstabAttReatt'
      },
      {
        kpiC: 'RRC连接建立成功次数',
        kpiE: 'RRC连接建立成功次数',
        counter: 'pmRrcConnEstabSucc'
      },
      {
        kpiC: 'UE发起的RRC连接建立请求次数',
        kpiE: 'UE发起的RRC连接建立请求次数',
        counter:
          'pmRrcConnEstabAttEm+pmRrcConnEstabAttHpa+pmRrcConnEstabAttMod+pmRrcConnEstabAttMos'
      },
      {
        kpiC: 'UE发起的RRC连接建立成功次数',
        kpiE: 'UE发起的RRC连接建立成功次数',
        counter:
          'pmRrcConnEstabSuccEm+pmRrcConnEstabSuccHpa+pmRrcConnEstabSuccMos+pmRrcConnEstabSuccMod'
      },
      {
        kpiC: '网络发起的RRC连接建立请求次数',
        kpiE: '网络发起的RRC连接建立请求次数',
        counter: 'pmRrcConnEstabAttMta'
      },
      {
        kpiC: '网络发起的RRC连接建立成功次数',
        kpiE: '网络发起的RRC连接建立成功次数',
        counter: 'pmRrcConnEstabSuccMta'
      },
      {
        kpiC: 'RRC连接重建请求次数',
        kpiE: 'RRC连接重建请求次数',
        counter: 'pmRrcConnReestAtt'
      },
      {
        kpiC: 'RRC连接重建成功次数',
        kpiE: 'RRC连接重建成功次数',
        counter: 'pmRrcConnReestSucc'
      },
      {
        kpiC: 'RRC连接建立失败次数（UE无应答）',
        kpiE: 'RRC连接建立失败次数（UE无应答）',
        counter: 'pmRrcConnEstabFailFailureInRadioProcedure'
      },
      {
        kpiC: 'RRC连接建立失败次数（小区拒绝）',
        kpiE: 'RRC连接建立失败次数（小区拒绝）',
        counter:
          'pmRrcConnEstabFailLic+\npmRrcConnEstabFailLicActiveUsers+\npmRrcConnEstabFailMpOverload+\npmRrcConnEstabFailDuIntens+\npmRrcConnEstabFailCellIntensDLC+\npmRrcConnEstabFailCellIntensStat+\npmRrcConnEstabFailCellLatency+\npmRrcConnEstabFailMISigQCong+\npmRrcConnEst'
      },
      {
        kpiC: 'RRC连接平均数',
        kpiE: 'RRC连接平均数',
        counter: 'pmRrcConnLevSum/pmRrcConnLevSamp'
      },
      {
        kpiC: 'RRC连接最大数',
        kpiE: 'RRC连接最大数',
        counter: 'pmRrcConnMax'
      },
      {
        kpiC: 'RRC连接建立失败次数（资源分配失败）',
        kpiE: 'RRC连接建立失败次数（资源分配失败）',
        counter: 'pmRrcConnEstabFailLackOfResources'
      },
      {
        kpiC: 'E-RAB建立请求次数',
        kpiE: 'E-RAB建立请求次数',
        counter: 'pmErabEstabAttInit+pmErabEstabAttAdded'
      },
      {
        kpiC: 'E-RAB建立成功次数',
        kpiE: 'E-RAB建立成功次数',
        counter: 'pmErabEstabSuccInit+pmErabEstabSuccAdded'
      },
      {
        kpiC: '初始E-RAB建立请求次数',
        kpiE: '初始E-RAB建立请求次数',
        counter: 'pmErabEstabAttInit'
      },
      {
        kpiC: '初始E-RAB建立成功次数',
        kpiE: '初始E-RAB建立成功次数',
        counter: 'pmErabEstabSuccInit'
      },
      {
        kpiC: 'E-RAB请求修改次数',
        kpiE: 'E-RAB请求修改次数',
        counter: 'ΣpmErabModAttQci'
      },
      {
        kpiC: 'E-RAB修改成功次数',
        kpiE: 'E-RAB修改成功次数',
        counter: 'ΣpmErabModSuccQci'
      },
      {
        kpiC: 'E-RAB建立拥塞次数',
        kpiE: 'E-RAB建立拥塞次数',
        counter:
          'pmErabEstabFailAddedRnlS1Cause25  + pmErabEstabFailInitRnlS1Cause25+ pmErabEstabFailAddedTranS1Cause0 + pmErabEstabFailInitTranS1Cause0'
      },
      {
        kpiC: '无线资源受限导致的E-RAB建立拥塞次数',
        kpiE: '无线资源受限导致的E-RAB建立拥塞次数',
        counter:
          'pmErabEstabFailAddedRnlS1Cause25  + pmErabEstabFailInitRnlS1Cause25'
      },
      {
        kpiC: '传输资源拥塞导致的E-RAB建立拥塞次数',
        kpiE: '传输资源拥塞导致的E-RAB建立拥塞次数',
        counter:
          'pmErabEstabFailAddedTranS1Cause0 + pmErabEstabFailInitTranS1Cause0'
      },
      {
        kpiC: 'E-RAB建立失败次数（UE无响应）',
        kpiE: 'E-RAB建立失败次数（UE无响应）',
        counter:
          'pmErabEstabFailInitRnlS1Cause26 + pmErabEstabFailAddedRnlS1Cause26'
      },
      {
        kpiC: 'E-RAB建立失败次数（安全模式配置失败）',
        kpiE: 'E-RAB建立失败次数（安全模式配置失败）',
        counter:
          'pmErabEstabFailInitRnlS1Cause32 +pmErabEstabFailAddedRnlS1Cause32'
      },
      {
        kpiC: '寻呼消息发送成功次数',
        kpiE: '寻呼消息发送成功次数',
        counter: 'pmPagReceived - pmPagDiscarded'
      },
      {
        kpiC: '寻呼消息发送拥塞次数',
        kpiE: '寻呼消息发送拥塞次数',
        counter: 'pmPagDiscarded'
      },
      {
        kpiC: '寻呼响应次数',
        kpiE: '寻呼响应次数',
        counter: 'pmRrcConnEstabAttMta'
      },
      {
        kpiC: 'eNodeb接收到来自核心网寻呼请求次数',
        kpiE: 'eNodeb接收到来自核心网寻呼请求次数',
        counter: 'pmPagS1Received'
      },
      {
        kpiC: 'S1信令连接建立尝试次数',
        kpiE: 'S1信令连接建立尝试次数',
        counter: 'pmS1SigConnEstabAtt'
      },
      {
        kpiC: 'S1信令连接建立成功次数',
        kpiE: 'S1信令连接建立成功次数',
        counter: 'pmS1SigConnEstabSucc'
      },
      {
        kpiC: '随机接入冲突解决次数',
        kpiE: '随机接入冲突解决次数',
        counter: 'pmRaSuccCbra'
      },
      {
        kpiC: '非竞争模式随机接入成功次数',
        kpiE: '非竞争模式随机接入成功次数',
        counter: 'pmRaSuccCfra'
      },
      {
        kpiC: '小区收到的随机接入前导次数（竞争模式）',
        kpiE: '小区收到的随机接入前导次数（竞争模式）',
        counter: 'pmRaAttCbra '
      },
      {
        kpiC: '小区收到的随机接入前导次数（非竞争模式）',
        kpiE: '小区收到的随机接入前导次数（非竞争模式）',
        counter: 'pmRaAttCfra'
      },
      {
        kpiC: 'RRC连接释放次数',
        kpiE: 'RRC连接释放次数',
        counter:
          'pmUeCtxtRelMme + pmUeCtxtRelAbnormalEnb + pmUeCtxtRelNormalEnb + pmRrcConnReestAtt - pmRrcConnReestAttHo'
      },
      {
        kpiC: 'CSFB触发的RRC连接释放次数',
        kpiE: 'CSFB触发的RRC连接释放次数',
        counter:
          'pmUeCtxtRelCsfbGsm+ pmUeCtxtRelCsfbWcdma+ pmUeCtxtRelCsfbGsmEm+ pmUeCtxtRelCsfbWcdmaEm'
      },
      {
        kpiC: 'E-RAB正常释放次数',
        kpiE: 'E-RAB正常释放次数',
        counter: 'pmErabRelNormalEnb + pmErabRelMme + pmErabRelAbnormalEnb'
      },
      {
        kpiC: 'E-RAB异常释放次数',
        kpiE: 'E-RAB异常释放次数',
        counter: 'pmErabRelAbnormalEnbAct'
      },
      {
        kpiC: 'UE上下文异常释放次数',
        kpiE: 'UE上下文异常释放次数',
        counter: 'pmUeCtxtRelAbnormalEnbAct+pmUeCtxtRelAbnormalMmeAct'
      },
      {
        kpiC: 'UE上下文正常释放次数',
        kpiE: 'UE上下文正常释放次数',
        counter:
          'pmUeCtxtRelNormalEnb + pmUeCtxtRelMme + pmUeCtxtRelAbnormalEnb - pmUeCtxtRelAbnormalEnbAct'
      },
      {
        kpiC: 'E-RAB异常释放次数（核心网问题）',
        kpiE: 'E-RAB异常释放次数（核心网问题）',
        counter: 'pmErabRelAbnormalMmeAct'
      },
      {
        kpiC: 'E-RAB异常释放次数（传输层问题）',
        kpiE: 'E-RAB异常释放次数（传输层问题）',
        counter: 'pmErabRelAbnormalEnbActTnFail'
      },
      {
        kpiC: 'E-RAB异常释放次数（无线层问题）',
        kpiE: 'E-RAB异常释放次数（无线层问题）',
        counter: 'pmErabRelAbnormalEnbActUeLost'
      },
      {
        kpiC: 'E-RAB异常释放次数（网络拥塞）',
        kpiE: 'E-RAB异常释放次数（网络拥塞）',
        counter: 'pmErabRelAbnormalEnbActPe'
      },
      {
        kpiC: '最大E-RAB数',
        kpiE: '最大E-RAB数',
        counter: 'pmErabMax'
      },
      {
        kpiC: '平均E-RAB数',
        kpiE: '平均E-RAB数',
        counter: 'pmErabLevSum/pmErabLevSamp'
      },
      {
        kpiC: '每用户平均E-RAB数',
        kpiE: '每用户平均E-RAB数',
        counter: 'pmErabLevSum/pmErabLevSamp/(pmRrcConnLevSum/pmRrcConnLevSamp)'
      },
      {
        kpiC: 'eNB间切入失败次数（无线资源受限）',
        kpiE: 'eNB间切入失败次数（无线资源受限）',
        counter: 'pmHoPrepInS1RejRnlS1Cause12+pmHoPrepInX2RejRnlX2Cause12'
      },
      {
        kpiC: 'eNB间切入失败次数（传输资源受限）',
        kpiE: 'eNB间切入失败次数（传输资源受限）',
        counter: 'pmHoPrepInS1RejTranS1Cause0+pmHoPrepInX2RejTranX2Cause0'
      },
      {
        kpiC: 'eNB间S1切换出请求次数',
        kpiE: 'eNB间S1切换出请求次数',
        counter: 'pmHoPrepOutS1AttInterEnb'
      },
      {
        kpiC: 'eNB间S1切换出准备成功次数',
        kpiE: 'eNB间S1切换出准备成功次数',
        counter: 'pmHoPrepOutS1SuccInterEnb'
      },
      {
        kpiC: 'eNB间S1切换出执行请求次数',
        kpiE: 'eNB间S1切换出执行请求次数',
        counter: 'pmHoExecOutS1AttInterEnb'
      },
      {
        kpiC: 'eNB间S1切换出成功次数',
        kpiE: 'eNB间S1切换出成功次数',
        counter: 'pmHoExecOutS1SuccInterEnb'
      },
      {
        kpiC: 'eNB间X2切换出请求次数',
        kpiE: 'eNB间X2切换出请求次数',
        counter: 'pmHoPrepOutX2AttInterEnb\n'
      },
      {
        kpiC: 'eNB间X2切换出准备成功次数',
        kpiE: 'eNB间X2切换出准备成功次数',
        counter: 'pmHoPrepOutX2SuccInterEnb'
      },
      {
        kpiC: 'eNB间X2切换出执行请求次数',
        kpiE: 'eNB间X2切换出执行请求次数',
        counter: 'pmHoExecOutX2AttInterEnb'
      },
      {
        kpiC: 'eNB间X2切换出成功次数',
        kpiE: 'eNB间X2切换出成功次数',
        counter: 'pmHoExecOutX2SuccInterEnb'
      },
      {
        kpiC: 'eNB间切换出失败次数（无线资源受限）',
        kpiE: 'eNB间切换出失败次数（无线资源受限）',
        counter:
          'pmHoPrepOutS1RejInterEnbIntraFreqRnlS1Cause12+pmHoPrepOutS1RejInterEnbInterFreqRnlS1Cause12+pmHoPrepOutX2RejInterEnbIntraFreqRnlX2Cause12+pmHoPrepOutX2RejInterEnbInterFreqRnlX2Cause12'
      },
      {
        kpiC: 'eNB间切换出失败次数（传输资源受限）',
        kpiE: 'eNB间切换出失败次数（传输资源受限）',
        counter:
          'pmHoPrepOutS1RejInterEnbIntraFreqTranS1Cause0+pmHoPrepOutS1RejInterEnbInterFreqTranS1Cause0+pmHoPrepOutX2RejInterEnbIntraFreqTranX2Cause0+pmHoPrepOutX2RejInterEnbInterFreqTranX2Cause0'
      },
      {
        kpiC: '3G切入请求次数',
        kpiE: '3G切入请求次数',
        counter: 'pmHoPrepInAttUtran'
      },
      {
        kpiC: '3G切入准备成功次数',
        kpiE: '3G切入准备成功次数',
        counter: 'pmHoPrepInSuccUtran'
      },
      {
        kpiC: '3G切入成功次数',
        kpiE: '3G切入成功次数',
        counter: 'pmHoExeInSuccUtran'
      },
      {
        kpiC: 'LTE-UTRAN系统间重定向请求次数(CSFB)',
        kpiE: 'LTE-UTRAN系统间重定向请求次数(CSFB)',
        counter: 'pmUeCtxtRelCsfbWcdma + pmUeCtxtRelCsfbWcdmaEm'
      },
      {
        kpiC: 'LTE-UTRAN系统间重定向请求次数（盲重定向）',
        kpiE: 'LTE-UTRAN系统间重定向请求次数（盲重定向）',
        counter: 'pmUeCtxtRelSCWcdma'
      },
      {
        kpiC: 'LTE-UTRAN系统间重定向请求次数（非盲重定向）',
        kpiE: 'LTE-UTRAN系统间重定向请求次数（非盲重定向）',
        counter: 'pmUeCtxtRelSCWcdma'
      },
      {
        kpiC: 'LTE-GSM系统间重定向请求次数(CSFB)',
        kpiE: 'LTE-GSM系统间重定向请求次数(CSFB)',
        counter: 'pmUeCtxtRelCsfbGsm + pmUeCtxtRelCsfbGsmEm'
      },
      {
        kpiC: '上行PDCP SDU丢包数',
        kpiE: '上行PDCP SDU丢包数',
        counter: 'pmPdcpPktLostUl'
      },
      {
        kpiC: '上行PDCP SDU包总数',
        kpiE: '上行PDCP SDU包总数',
        counter: 'pmPdcpPktLostUl+pmPdcpPktReceivedUl'
      },
      {
        kpiC: '下行PDCP SDU丢包数',
        kpiE: '下行PDCP SDU丢包数',
        counter: 'pmPdcpPktDiscDlPelrUu'
      },
      {
        kpiC: '下行PDCP SDU包总数',
        kpiE: '下行PDCP SDU包总数',
        counter: 'pmPdcpPktReceivedDl'
      },
      {
        kpiC: '下行PDCP SDU弃包数',
        kpiE: '下行PDCP SDU弃包数',
        counter: 'pmPdcpPktDiscDlPelr'
      },
      {
        kpiC: '物理层上行平均速率',
        kpiE: '物理层上行平均速率',
        counter: 'pmRadioThpVolUl/900000'
      },
      {
        kpiC: '物理层下行平均速率',
        kpiE: '物理层下行平均速率',
        counter: 'pmRadioThpVolDl/900000'
      },
      {
        kpiC: '用户面PDCP层上行平均速率',
        kpiE: '用户面PDCP层上行平均速率',
        counter: 'pmPdcpVolUlDrb/pmSchedActivityCellUl'
      },
      {
        kpiC: '用户面PDCP层上行峰值速率',
        kpiE: '用户面PDCP层上行峰值速率',
        counter: 'pmPdcpBitrateUlDrbMax/1000'
      },
      {
        kpiC: '用户面PDCP层下行平均速率',
        kpiE: '用户面PDCP层下行平均速率',
        counter: 'pmPdcpVolDlDrb/pmSchedActivityCellDl'
      },
      {
        kpiC: '用户面PDCP层下行峰值速率',
        kpiE: '用户面PDCP层下行峰值速率',
        counter: 'pmPdcpBitrateDlDrbMax/1000'
      },
      {
        kpiC: '下行平均无线承载效率',
        kpiE: '下行平均无线承载效率',
        counter: 'pmRadioThpVolDl*1000/pmPrbUsedDlDtch'
      },
      {
        kpiC: '上行平均无线承载效率',
        kpiE: '上行平均无线承载效率',
        counter: 'pmRadioThpVolUl*1000/pmPrbUsedUlDtch'
      },
      {
        kpiC: '上行数据传输时长',
        kpiE: '上行数据传输时长',
        counter: 'pmUeThpTimeUl'
      },
      {
        kpiC: '下行数据传输时长',
        kpiE: '下行数据传输时长',
        counter: 'pmUeThpTimeDl'
      },
      {
        kpiC: 'eRAB连接数',
        kpiE: 'eRAB连接数',
        counter: 'pmErabLevSum/pmErabLevSamp'
      },
      {
        kpiC: 'UE会话时长',
        kpiE: 'UE会话时长',
        counter: 'pmSessionTimeUe'
      },
      {
        kpiC: 'DRB会话时长',
        kpiE: 'DRB会话时长',
        counter: 'pmSessionTimeDrb'
      },
      {
        kpiC: '下行激活eRAB数',
        kpiE: '下行激活eRAB数',
        counter: 'pmActiveDrbDlSum/900000'
      },
      {
        kpiC: '上行激活eRAB数',
        kpiE: '上行激活eRAB数',
        counter: 'pmActiveDrbUlSum/900000'
      },
      {
        kpiC: '下行正在数传eRAB数',
        kpiE: '下行正在数传eRAB数',
        counter: 'pmSchedActivityUeDl/900000*pmActiveDrbDlSum/pmActiveUeDlSum'
      },
      {
        kpiC: '上行正在数传eRAB数',
        kpiE: '上行正在数传eRAB数',
        counter: 'pmSchedActivityUeUl/900000*pmActiveDrbUlSum/pmActiveUeUlSum'
      },
      {
        kpiC: 'VoLTE用户数',
        kpiE: 'VoLTE用户数',
        counter: 'pmErabQciMax[1]'
      },
      {
        kpiC: 'eNB以太网接口接收的流量',
        kpiE: 'eNB以太网接口接收的流量',
        counter: '(pmIfInOctetsLink1Hi*2147483648+pmIfInOctetsLink1Lo)/1000000'
      },
      {
        kpiC: 'eNB以太网接口接收的平均速率',
        kpiE: 'eNB以太网接口接收的平均速率',
        counter:
          '(pmIfInOctetsLink1Hi*2147483648+pmIfInOctetsLink1Lo)/1000000/900*8'
      },
      {
        kpiC: 'eNB以太网接口接收的峰值速率',
        kpiE: 'eNB以太网接口接收的峰值速率',
        counter: 'pmIpFlowMaxInBitrate/1000'
      },
      {
        kpiC: 'eNB以太网接口发送的流量',
        kpiE: 'eNB以太网接口发送的流量',
        counter:
          '(pmIfOutOctetsLink1Hi*2147483648+pmIfOutOctetsLink1Lo)/1000000'
      },
      {
        kpiC: 'eNB以太网接口发送的平均速率',
        kpiE: 'eNB以太网接口发送的平均速率',
        counter:
          '(pmIfOutOctetsLink1Hi*2147483648+pmIfOutOctetsLink1Lo)/1000000/900*8'
      },
      {
        kpiC: 'eNB以太网接口发送的峰值速率',
        kpiE: 'eNB以太网接口发送的峰值速率',
        counter: 'pmIpFlowMaxOutBitrate/1000'
      },
      {
        kpiC: 'S1接口接收业务流量',
        kpiE: 'S1接口接收业务流量',
        counter: 'Σ(pmPdcpVolDlDrb * 1000/8+ pmPdcpPktReceivedDl * 8)/10^6'
      },
      {
        kpiC: 'S1接口接收平均速率',
        kpiE: 'S1接口接收平均速率',
        counter:
          '（Σ(pmPdcpVolDlDrb * 1000/8+ pmPdcpPktReceivedDl * 8)/10^6）/900'
      },
      {
        kpiC: 'S1接口发送业务流量',
        kpiE: 'S1接口发送业务流量',
        counter: 'Σ(pmPdcpVolUlDrb * 1000/8+ pmPdcpPktReceivedUl * 8)/10^6'
      },
      {
        kpiC: 'S1接口发送平均速率',
        kpiE: 'S1接口发送平均速率',
        counter:
          '（Σ(pmPdcpVolUlDrb * 1000/8+ pmPdcpPktReceivedUl * 8)/10^6）/900'
      },
      {
        kpiC: '空口上行业务流量',
        kpiE: '空口上行业务流量',
        counter: 'pmPdcpVolUlDrb/8000'
      },
      {
        kpiC: '空口下行业务流量',
        kpiE: '空口下行业务流量',
        counter: 'pmPdcpVolDlDrb/8000'
      },
      {
        kpiC: '会话类语音业务空口上行流量（QCI1）',
        kpiE: '会话类语音业务空口上行流量（QCI1）',
        counter: 'pmPdcpVolUlDrbQci[1]/8000'
      },
      {
        kpiC: '会话类语音业务空口下行流量（QCI1）',
        kpiE: '会话类语音业务空口下行流量（QCI1）',
        counter: 'pmPdcpVolDlDrbQci[1]/8000'
      },
      {
        kpiC: '会话类直播视频流业务空口上行流量（QCI2）',
        kpiE: '会话类直播视频流业务空口上行流量（QCI2）',
        counter: 'pmPdcpVolUlDrbQci[2]/8000'
      },
      {
        kpiC: '会话类直播视频流业务空口下行流量（QCI2）',
        kpiE: '会话类直播视频流业务空口下行流量（QCI2）',
        counter: 'pmPdcpVolDlDrbQci[2]/8000'
      },
      {
        kpiC: '实时游戏业务空口上行流量（QCI3）',
        kpiE: '实时游戏业务空口上行流量（QCI3）',
        counter: 'pmPdcpVolUlDrbQci[3]/8000'
      },
      {
        kpiC: '实时游戏业务空口下行流量（QCI3）',
        kpiE: '实时游戏业务空口下行流量（QCI3）',
        counter: 'pmPdcpVolDlDrbQci[3]/8000'
      },
      {
        kpiC: '非会话类有缓冲的视频流业务空口上行流量（QCI4）',
        kpiE: '非会话类有缓冲的视频流业务空口上行流量（QCI4）',
        counter: 'pmPdcpVolUlDrbQci[4]/8000'
      },
      {
        kpiC: '非会话类有缓冲的视频流业务空口下行流量（QCI4）',
        kpiE: '非会话类有缓冲的视频流业务空口下行流量（QCI4）',
        counter: 'pmPdcpVolDlDrbQci[4]/8000'
      },
      {
        kpiC: 'IMS信令空口上行流量（QCI5）',
        kpiE: 'IMS信令空口上行流量（QCI5）',
        counter: 'pmPdcpVolUlDrbQci[5]/8000'
      },
      {
        kpiC: 'IMS信令空口下行流量（QCI5）',
        kpiE: 'IMS信令空口下行流量（QCI5）',
        counter: 'pmPdcpVolDlDrbQci[5]/8000'
      },
      {
        kpiC: '空口上行业务流量（QCI6-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口上行业务流量（QCI6-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolUlDrbQci[6]/8000'
      },
      {
        kpiC: '空口下行业务流量（QCI6-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口下行业务流量（QCI6-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolDlDrbQci[6]/8000'
      },
      {
        kpiC: '空口上行业务流量（QCI7-语音、直播视频流业务、交互游戏）',
        kpiE: '空口上行业务流量（QCI7-语音、直播视频流业务、交互游戏）',
        counter: 'pmPdcpVolUlDrbQci[7]/8000'
      },
      {
        kpiC: '空口下行业务流量（QCI7-语音、直播视频流业务、交互游戏）',
        kpiE: '空口下行业务流量（QCI7-语音、直播视频流业务、交互游戏）',
        counter: 'pmPdcpVolDlDrbQci[7]/8000'
      },
      {
        kpiC: '空口上行业务流量（QCI8-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口上行业务流量（QCI8-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolUlDrbQci[8]/8000'
      },
      {
        kpiC: '空口下行业务流量（QCI8-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口下行业务流量（QCI8-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolDlDrbQci[8]/8000'
      },
      {
        kpiC: '空口上行业务流量（QCI9-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口上行业务流量（QCI9-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolUlDrbQci[9]/8000'
      },
      {
        kpiC: '空口下行业务流量（QCI9-基于TCP的www、email、ftp、p2p等）',
        kpiE: '空口下行业务流量（QCI9-基于TCP的www、email、ftp、p2p等）',
        counter: 'pmPdcpVolDlDrbQci[9]/8000'
      },
      {
        kpiC: '上行传输TB数',
        kpiE: '上行传输TB数',
        counter:
          'pmMacHarqUlSucc16qam+pmMacHarqUlSuccQpsk+pmMacHarqUlFail16qam+pmMacHarqUlFailQpsk+pmMacHarqUlDtx16qam+pmMacHarqUlDtxQpsk'
      },
      {
        kpiC: '上行传输初始TB数',
        kpiE: '上行传输初始TB数',
        counter:
          'pmMacHarqUlSucc16qam+pmMacHarqUlSuccQpsk+pmMacHarqUlFail16qam+pmMacHarqUlFailQpsk+pmMacHarqUlDtx16qam+pmMacHarqUlDtxQpsk'
      },
      {
        kpiC: '上行成功传输初始TB数',
        kpiE: '上行成功传输初始TB数',
        counter: 'pmMacHarqUlSucc16qam+pmMacHarqUlSuccQpsk'
      },
      {
        kpiC: '下行传输TB数',
        kpiE: '下行传输TB数',
        counter:
          'pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk+\npmMacHarqDlDtx16qam+\npmMacHarqDlDtx64qam+\npmMacHarqDlDtxQpsk+\npmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk'
      },
      {
        kpiC: '单流模式下行传输TB数',
        kpiE: '单流模式下行传输TB数',
        counter:
          '(pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk+\npmMacHarqDlDtx16qam+\npmMacHarqDlDtx64qam+\npmMacHarqDlDtxQpsk+\npmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk)*((pmRadioTxRankDistr[0]+pmRadioTxRankDistr[1]+pmRadioTxRankDistr['
      },
      {
        kpiC: '双流模式下行传输TB数',
        kpiE: '双流模式下行传输TB数',
        counter:
          '(pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk+\npmMacHarqDlDtx16qam+\npmMacHarqDlDtx64qam+\npmMacHarqDlDtxQpsk+\npmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk)*((pmRadioTxRankDistr[2]+pmRadioTxRankDistr[4]+pmRadioTxRankDistr['
      },
      {
        kpiC: '下行传输初始TB数',
        kpiE: '下行传输初始TB数',
        counter:
          'pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk+\npmMacHarqDlDtx16qam+\npmMacHarqDlDtx64qam+\npmMacHarqDlDtxQpsk+\npmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk'
      },
      {
        kpiC: '下行成功传输初始TB数',
        kpiE: '下行成功传输初始TB数',
        counter:
          'pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk'
      },
      {
        kpiC: '最大CPU占用率',
        kpiE: '最大CPU占用率',
        counter: 'pmProcessorLoadMax'
      },
      {
        kpiC: '平均CPU占用率',
        kpiE: '平均CPU占用率',
        counter: 'pmProcessorLoadSum/pmProcessorLoadSamp\n'
      },
      {
        kpiC: '上行业务信息占用PRB平均数',
        kpiE: '上行业务信息占用PRB平均数',
        counter: 'pmPrbUsedUlDtch/900000'
      },
      {
        kpiC: '上行控制信息占用CCE平均数',
        kpiE: '上行控制信息占用CCE平均数',
        counter: 'ΣpmPdcchCceUsedUlQci[i]/统计时长(ms)'
      },
      {
        kpiC: '下行业务信息占用PRB平均数',
        kpiE: '下行业务信息占用PRB平均数',
        counter: 'pmPrbUsedDlDtch/900000'
      },
      {
        kpiC: '下行控制信息占用CCE平均数',
        kpiE: '下行控制信息占用CCE平均数',
        counter: 'ΣpmPdcchCceUsedDlQci/统计时长(ms)'
      },
      {
        kpiC: '上行PRB占用平均数',
        kpiE: '上行PRB占用平均数',
        counter: '(pmPrbUsedUlDtch+pmPrbUsedUlSrb)/900000'
      },
      {
        kpiC: '上行可用PRB数',
        kpiE: '上行可用PRB数',
        counter: 'pmPrbAvailUl/900000'
      },
      {
        kpiC: '下行PRB占用平均数',
        kpiE: '下行PRB占用平均数',
        counter:
          '[pmPrbUsedDlDtch+ pmPrbUsedDlBcch+ pmPrbUsedDlPcch+pmPrbUsedDlSrbFirstTrans*(1+pmPrbUsedDlReTrans/pmPrbUsedDlFirstTrans)]/统计时长(ms)'
      },
      {
        kpiC: '下行可用PRB数',
        kpiE: '下行可用PRB数',
        counter: 'pmPrbAvailDl/900000'
      },
      {
        kpiC: '下行PDCCH信道CCE占用个数',
        kpiE: '下行PDCCH信道CCE占用个数',
        counter: 'ΣpmPdcchCceUsedDlQci/统计时长(ms)'
      },
      {
        kpiC: 'LTE小区退服时长',
        kpiE: 'LTE小区退服时长',
        counter: 'pmCellDowntimeAuto+pmCellDowntimeMan'
      },
      {
        kpiC: 'LTE小区退服次数',
        kpiE: 'LTE小区退服次数',
        counter: 'pmCellDownLockAuto'
      },
      {
        kpiC: 'SCTP链路断链次数',
        kpiE: 'SCTP链路断链次数',
        counter: 'pmShutdowns'
      },
      {
        kpiC: 'SCTP链路可用性',
        kpiE: 'SCTP链路可用性',
        counter: '(900-pmTimeUnavail)/900'
      },
      {
        kpiC: '小区下行TB块错误数',
        kpiE: '小区下行TB块错误数',
        counter:
          'pmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk'
      },
      {
        kpiC: '小区下行TB块总数',
        kpiE: '小区下行TB块总数',
        counter:
          'pmMacHarqDlAck16qam+\npmMacHarqDlAck64qam+\npmMacHarqDlAckQpsk+\npmMacHarqDlDtx16qam+\npmMacHarqDlDtx64qam+\npmMacHarqDlDtxQpsk+\npmMacHarqDlNack16qam+\npmMacHarqDlNack64qam+\npmMacHarqDlNackQpsk'
      },
      {
        kpiC: '小区上行TB块错误数',
        kpiE: '小区上行TB块错误数',
        counter: 'pmMacHarqUlFail16qam+\npmMacHarqUlFailQpsk'
      },
      {
        kpiC: '小区上行TB块总数',
        kpiE: '小区上行TB块总数',
        counter:
          'pmMacHarqUlSucc16qam+\npmMacHarqUlSuccQpsk+\npmMacHarqUlFail16qam+\npmMacHarqUlFailQpsk+\npmMacHarqUlDtx16qam+\npmMacHarqUlDtxQpsk'
      },
      {
        kpiC: 'CQI k数量',
        kpiE: 'CQI k数量',
        counter: 'pmRadioUeRepCqiDistr [i]'
      },
      {
        kpiC: 'UE从上行同步态转换为上行失步态的次数',
        kpiE: 'UE从上行同步态转换为上行失步态的次数',
        counter: 'pmPdcchResyncAtt'
      },
      {
        kpiC: '无线链路失步时长',
        kpiE: '无线链路失步时长',
        counter: 'pmRrcConnLevSumUlOutOfSync * 5000'
      },
      {
        kpiC: '平均每PRB干扰噪声功率',
        kpiE: '平均每PRB干扰噪声功率',
        counter:
          '10log(Σ1 to n(pmRadioRecInterferencePwrPrb[x]/(统计时长(ms)/40))/n)-132'
      },
      {
        kpiC: 'RLC AM模式基站下行RLC PDU重传次数',
        kpiE: 'RLC AM模式基站下行RLC PDU重传次数',
        counter: 'pmRlcArqDlNack'
      },
      {
        kpiC: 'RLC AM模式基站上行RLC PDU重传次数',
        kpiE: 'RLC AM模式基站上行RLC PDU重传次数',
        counter: 'pmRlcArqUlNack'
      },
      {
        kpiC: 'RLC AM模式基站下行RLC PDU发送总次数',
        kpiE: 'RLC AM模式基站下行RLC PDU发送总次数',
        counter: 'pmRlcArqDlAck + pmRlcArqDlNack'
      },
      {
        kpiC: 'RLC AM模式基站上行RLC PDU发送总次数',
        kpiE: 'RLC AM模式基站上行RLC PDU发送总次数',
        counter: 'pmRlcArqUlAck + pmRlcArqUlNack'
      },
      {
        kpiC: 'MAC层DL SCH信道重传TB数（QPSK）',
        kpiE: 'MAC层DL SCH信道重传TB数（QPSK）',
        counter: 'pmMacHarqDlNackQpsk'
      },
      {
        kpiC: 'MAC层DL SCH信道重传TB数（16QAM）',
        kpiE: 'MAC层DL SCH信道重传TB数（16QAM）',
        counter: 'pmMacHarqDlNack16qam'
      },
      {
        kpiC: 'MAC层DL SCH信道重传TB数（64QAM）',
        kpiE: 'MAC层DL SCH信道重传TB数（64QAM）',
        counter: 'pmMacHarqDlNack64qam'
      },
      {
        kpiC: 'MAC层UL SCH信道重传TB数（QPSK）',
        kpiE: 'MAC层UL SCH信道重传TB数（QPSK）',
        counter: 'pmMacHarqUlFailQpsk'
      },
      {
        kpiC: 'MAC层UL SCH信道重传TB数（16QAM）',
        kpiE: 'MAC层UL SCH信道重传TB数（16QAM）',
        counter: 'pmMacHarqUlFail16qam'
      },
      {
        kpiC: 'MAC层UL SCH信道重传TB数（64QAM）',
        kpiE: 'MAC层UL SCH信道重传TB数（64QAM）',
        counter: 'pmMacHarqUlFail64qam'
      },
      {
        kpiC: 'MAC层DL SCH信道传输TB总数（QPSK）',
        kpiE: 'MAC层DL SCH信道传输TB总数（QPSK）',
        counter: 'pmMacHarqDlAckQpsk'
      },
      {
        kpiC: 'MAC层DL SCH信道传输TB总数（16QAM）',
        kpiE: 'MAC层DL SCH信道传输TB总数（16QAM）',
        counter: 'pmMacHarqDlAck16qam'
      },
      {
        kpiC: 'MAC层DL SCH信道传输TB总数（64QAM）',
        kpiE: 'MAC层DL SCH信道传输TB总数（64QAM）',
        counter: 'pmMacHarqDlAck64qam'
      },
      {
        kpiC: 'MAC层UL SCH信道传输TB总数（QPSK）',
        kpiE: 'MAC层UL SCH信道传输TB总数（QPSK）',
        counter: 'pmMacHarqUlSuccQpsk+pmMacHarqUlFailQpsk+pmMacHarqUlDtxQpsk'
      },
      {
        kpiC: 'MAC层UL SCH信道传输TB总数（16QAM）',
        kpiE: 'MAC层UL SCH信道传输TB总数（16QAM）',
        counter: 'pmMacHarqUlSucc16qam+pmMacHarqUlFail16qam+pmMacHarqUlDtx16qam'
      },
      {
        kpiC: 'MAC层UL SCH信道传输TB总数（64QAM）',
        kpiE: 'MAC层UL SCH信道传输TB总数（64QAM）',
        counter:
          ' pmMacHarqUlSucc64qam+pmMacHarqUlFail64qam+pmMacHarqUlDtx64qam'
      }
    ]
  },
  'nbiot': {
    资源负荷: [
      {
        kpiC: 'NB-IoT小区最大RRC连接用户数',
        kpiE: 'NRRC_UserConnMax',
        counter: 'sum(pmRrcConnMax)'
      },
      {
        kpiC: 'NB-IoT小区最大RRC连接用户数（覆盖等级1）',
        kpiE: 'NRRC_UserConnMax_L0',
        counter: 'pmRrcConnMax_0'
      },
      {
        kpiC: 'NB-IoT小区最大RRC连接用户数（覆盖等级2）',
        kpiE: 'NRRC_UserConnMax_L1',
        counter: 'pmRrcConnMax_1'
      },
      {
        kpiC: 'NB-IoT小区最大RRC连接用户数（覆盖等级3）',
        kpiE: 'NRRC_UserConnMax_L2',
        counter: 'pmRrcConnMax_2'
      },
      {
        kpiC: 'NB-IoT小区平均RRC连接用户数',
        kpiE: 'NRRC_UserConnMean',
        counter: 'sum(pmRrcConnLevSum) / pmRrcConnLevSamp'
      },
      {
        kpiC: 'NB-IoT小区平均RRC连接用户数（覆盖等级1）',
        kpiE: 'NRRC_UserConnMean_L0',
        counter: 'pmRrcConnLevSum_0 / pmRrcConnLevSamp'
      },
      {
        kpiC: 'NB-IoT小区平均RRC连接用户数（覆盖等级2）',
        kpiE: 'NRRC_UserConnMean_L1',
        counter: 'pmRrcConnLevSum_1 / pmRrcConnLevSamp'
      },
      {
        kpiC: 'NB-IoT小区平均RRC连接用户数（覆盖等级3）',
        kpiE: 'NRRC_UserConnMean_L2',
        counter: 'pmRrcConnLevSum_2 / pmRrcConnLevSamp'
      },
      {
        kpiC: 'NB-IoT小区上行使用3.75kHz子载波资源的平均个数',
        kpiE: 'SubCarrierUlMean_3750Hz',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区上行使用15kHz子载波资源的平均个数',
        kpiE: 'SubCarrierUlMean_15000Hz',
        counter:
          '12*(pmNpuschUtilDistr[0]*2.5+pmNpuschUtilDistr[1]*7.5+…+pmNpuschUtilDistr[19]*97.5)/sum(pmNpuschUtilDistr[0..19])/100'
      },
      {
        kpiC: 'NB-IoT小区下行使用15kHz子载波资源的平均个数',
        kpiE: 'SubCarrierDlMean_15000Hz',
        counter:
          '12*(NPDSCHUtil+NPDCCHUtil)*0.75+12*0.25;NPDSCHUtil=(pmNpdschUtilDistr[0]*2.5+pmNpdschUtilDistr[1]*7.5+…+pmNpdschUtilDistr[19]*97.5)/sum(pmNpdschUtilDistr[0..19])/100;NPDCCHUtil=(pmNpdcchCceUtil[0]*2.5+pmNpdcchCceUtil[1]*7.5+…+pmNpdcchCceUtil[19]*97.5)/sum'
      },
      {
        kpiC: 'NPRACH信道检测到的竞争Preamble数量',
        kpiE: 'NPRACH_PreDetected',
        counter: 'sum(pmRaAttNbCbra)'
      },
      {
        kpiC: '小区可使用Preamble个数',
        kpiE: 'NPRACH_UsePre',
        counter: ''
      }
    ],
    呼叫接入: [
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数',
        kpiE: 'NRRC_AttConnEstab',
        counter: 'sum(pmRrcConnEstabAttCe)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（覆盖等级1）',
        kpiE: 'NRRC_AttConnEstab_L0',
        counter: 'pmRrcConnEstabAttCe_0'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（覆盖等级2）',
        kpiE: 'NRRC_AttConnEstab_L1',
        counter: 'pmRrcConnEstabAttCe_1'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（覆盖等级3）',
        kpiE: 'NRRC_AttConnEstab_L2',
        counter: 'pmRrcConnEstabAttCe_2'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（请求原因mo-ExceptionData）',
        kpiE: 'NRRC_AttConnEstab_MoEdata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（请求原因mt-Access）',
        kpiE: 'NRRC_AttConnEstab_MtAccess',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（请求原因mo-Signalling）',
        kpiE: 'NRRC_AttConnEstab_MoSl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立请求次数（请求原因mo-Data）',
        kpiE: 'NRRC_AttConnEstab_Modata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数',
        kpiE: 'NRRC_SuccConnEstab',
        counter: 'sum(pmRrcConnEstabSuccCe)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（覆盖等级1）',
        kpiE: 'NRRC_SuccConnEstab_L0',
        counter: 'pmRrcConnEstabSuccCe_0'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（覆盖等级2）',
        kpiE: 'NRRC_SuccConnEstab_L1',
        counter: 'pmRrcConnEstabSuccCe_1'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（覆盖等级3）',
        kpiE: 'NRRC_SuccConnEstab_L2',
        counter: 'pmRrcConnEstabSuccCe_2'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（请求原因mo-ExceptionData）',
        kpiE: 'NRRC_SuccConnEstab_MoEdata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（请求原因mt-Access）',
        kpiE: 'NRRC_SuccConnEstab_MtAccess',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（请求原因mo-Signalling）',
        kpiE: 'NRRC_SuccConnEstab_MoSl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立成功次数（请求原因mo-Data）',
        kpiE: 'NRRC_SuccConnEstab_Modata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长',
        kpiE: 'NRRC_CE_MeanTime',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（覆盖等级1）',
        kpiE: 'NRRC_CE_MeanTime_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（覆盖等级2）',
        kpiE: 'NRRC_CE_MeanTime_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（覆盖等级3）',
        kpiE: 'NRRC_CE_MeanTime_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（请求原因mo-ExceptionData）',
        kpiE: 'NRRC_CE_MeanTime_MoEdata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（请求原因mt-Access）',
        kpiE: 'NRRC_CE_MeanTime_MtAccess',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（请求原因mo-Signalling）',
        kpiE: 'NRRC_CE_MeanTime_MoSl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立平均时长（请求原因mo-Data）',
        kpiE: 'NRRC_CE_MeanTime_Modata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长',
        kpiE: 'NRRC_CE_MaxTime',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（覆盖等级1）',
        kpiE: 'NRRC_CE_MaxTime_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（覆盖等级2）',
        kpiE: 'NRRC_CE_MaxTime_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（覆盖等级3）',
        kpiE: 'NRRC_CE_MaxTime_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（请求原因mo-ExceptionData）',
        kpiE: 'NRRC_CE_MaxTime_MoEdata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（请求原因mt-Access）',
        kpiE: 'NRRC_CE_MaxTime_MtAccess',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（请求原因mo-Signalling）',
        kpiE: 'NRRC_CE_MaxTime_MoSl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立最大时长（请求原因mo-Data）',
        kpiE: 'NRRC_CE_MaxTime_Modata',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接失败次数（UE无应答）',
        kpiE: 'NRRC_FailConnEstab_UeNoReply',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接失败次数（UE无应答）（覆盖等级1）',
        kpiE: 'NRRC_FailConnEstab_UeNoReply_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接失败次数（UE无应答）（覆盖等级2）',
        kpiE: 'NRRC_FailConnEstab_UeNoReply_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接失败次数（UE无应答）（覆盖等级3）',
        kpiE: 'NRRC_FailConnEstab_UeNoReply_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立失败次数（小区Reject）',
        kpiE: 'NRRC_FailConnEstab_CellReject',
        counter:
          'sum(pmRrcConnEstabFailMmeOvlModCe) + sum(pmRrcConnEstabFailMmeOvlMosCe)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立失败次数（小区Reject）（覆盖等级1）',
        kpiE: 'NRRC_FailConnEstab_CellReject_L0',
        counter:
          'sum(pmRrcConnEstabFailMmeOvlModCe_0) + sum(pmRrcConnEstabFailMmeOvlMosCe_0)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立失败次数（小区Reject）（覆盖等级2）',
        kpiE: 'NRRC_FailConnEstab_CellReject_L1',
        counter:
          'sum(pmRrcConnEstabFailMmeOvlModCe_1) + sum(pmRrcConnEstabFailMmeOvlMosCe_1)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立失败次数（小区Reject）（覆盖等级3）',
        kpiE: 'NRRC_FailConnEstab_CellReject_L2',
        counter:
          'sum(pmRrcConnEstabFailMmeOvlModCe_2) + sum(pmRrcConnEstabFailMmeOvlMosCe_2)'
      },
      {
        kpiC: 'NB-IoT小区RRC连接建立失败次数（其它原因）',
        kpiE: 'NRRC_FailConnEstab_OtherCause',
        counter:
          'sum(pmRrcConnEstabAttCe) - sum(pmRrcConnEstabAttReattCe) - sum(pmRrcConnEstabSuccCe) - sum(pmRrcConnEstabFailMmeOvlModCe) - sum(pmRrcConnEstabFailMmeOvlMosCe)'
      },
      {
        kpiC: 'NB-IoT小区接收的寻呼消息次数',
        kpiE: 'NPaging_S1_Rx',
        counter: 'sum(pmPagReceivedCe)'
      },
      {
        kpiC: 'NB-IoT小区PCH拥塞丢弃的寻呼消息次数',
        kpiE: 'NPCH_Paging_Discard',
        counter: 'sum(pmPagDiscardedCe)'
      },
      {
        kpiC: 'NB-IoT小区S1信令连接建立尝试次数',
        kpiE: 'NS1Sig_AttConnEstab',
        counter: 'sum(pmS1SigConnEstabAttCe)'
      },
      {
        kpiC: 'NB-IoT小区S1信令连接建立成功次数',
        kpiE: 'NS1Sig_SuccConnEstab',
        counter: 'sum(pmS1SigConnEstabSuccCe)'
      }
    ],
    呼叫保持: [
      {
        kpiC: 'NB-IoT小区UE上下文异常释放次数',
        kpiE: 'NUECNTX_AbnormRel',
        counter: 'pmUeCtxtRelAbnormalEnbAct'
      },
      {
        kpiC: 'NB-IoT小区UE上下文异常释放次数（覆盖等级1）',
        kpiE: 'NUECNTX_AbnormRel_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区UE上下文异常释放次数（覆盖等级2）',
        kpiE: 'NUECNTX_AbnormRel_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区UE上下文异常释放次数（覆盖等级3）',
        kpiE: 'NUECNTX_AbnormRel_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区UE上下文正常释放次数',
        kpiE: 'NUECNTX_NormRel',
        counter:
          'pmUeCtxtRelNormalEnb + pmUeCtxtRelAbnormalEnb - pmUeCtxtRelAbnormalEnbAct'
      },
      {
        kpiC: 'NB-IoT小区UE上下文正常释放次数（覆盖等级1）',
        kpiE: 'NUECNTX_NormRel_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区UE上下文正常释放次数（覆盖等级2）',
        kpiE: 'NUECNTX_NormRel_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区UE上下文正常释放次数（覆盖等级3）',
        kpiE: 'NUECNTX_NormRel_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB上行数据调度总时长',
        kpiE: 'NSRB_DSLTimeCellUl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行数据调度总时长',
        kpiE: 'NSRB_DSLTimeCellDl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB上行数据接收总时长',
        kpiE: 'NSRB_ThrpTimeUl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB上行数据接收总时长（覆盖等级1）',
        kpiE: 'NSRB_ThrpTimeUl_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB上行数据接收总时长（覆盖等级2）',
        kpiE: 'NSRB_ThrpTimeUl_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB上行数据接收总时长（覆盖等级3）',
        kpiE: 'NSRB_ThrpTimeUl_L2',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行数据发送总时长',
        kpiE: 'NSRB_ThrpTimeDl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行数据发送总时长（覆盖等级1）',
        kpiE: 'NSRB_ThrpTimeDl_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行数据发送总时长（覆盖等级2）',
        kpiE: 'NSRB_ThrpTimeDl_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行数据发送总时长（覆盖等级3）',
        kpiE: 'NSRB_ThrpTimeDl_L2',
        counter: ''
      }
    ],
    业务流量: [
      {
        kpiC: 'NB-IoT小区物理层上行总流量',
        kpiE: 'NPDCP_SduOctUl',
        counter: 'sum(pmRadioThpVolUlCe) * 1000'
      },
      {
        kpiC: 'NB-IoT小区物理层下行总流量',
        kpiE: 'NPDCP_SduOctDl',
        counter: 'sum(pmRadioThpVolDlCe) * 1000'
      },
      {
        kpiC: 'NB-IoT小区SRB上行总流量',
        kpiE: 'NSRB_SduOctUl',
        counter: 'sum(pmRadioThpVolUl) * 125'
      },
      {
        kpiC: 'NB-IoT小区SRB下行总流量',
        kpiE: 'NSRB_SduOctDl',
        counter: 'sum(pmRadioThpVolDl) * 125'
      }
    ],
    业务完整: [
      {
        kpiC: 'NB-IoT小区SRB下行丢弃的总包数',
        kpiE: 'NSRB_SduLossPktDl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行包平均时延',
        kpiE: 'NSRB_PktMeanDelayDl',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行包平均时延（覆盖等级1）',
        kpiE: 'NSRB_PktMeanDelayDl_L0',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行包平均时延（覆盖等级2）',
        kpiE: 'NSRB_PktMeanDelayDl_L1',
        counter: ''
      },
      {
        kpiC: 'NB-IoT小区SRB下行包平均时延（覆盖等级3）',
        kpiE: 'NSRB_PktMeanDelayDl_L2',
        counter: ''
      }
    ],
    设备可用: [
      {
        kpiC: 'NB-IoT小区退服总时长',
        kpiE: 'NCell_UnServ_Time',
        counter: 'pmCellDowntimeAuto + pmCellDowntimeMan'
      },
      {
        kpiC: '节能原因退服时长',
        kpiE: 'NCell_EnergyconUnServ_Time',
        counter: ''
      },
      {
        kpiC: '',
        kpiE: '',
        counter: ''
      }
    ]
  }
}
export default kpi
