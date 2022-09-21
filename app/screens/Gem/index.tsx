import React, { FC, useCallback, useContext } from 'react';
import { Background, SafeArea } from '@app/components';
import { WebView } from 'react-native-webview';
import { RootRoutes, Routes } from '@app/navigation/types';
import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/core';
import {
  GemIntent,
  GemMessages,
  getGemOnRampSrcForAsset,
} from '@app/config/gem';
import { RootContext } from '@app/state';
import { mockedRouteParamsForBank } from '@app/mocks/Portfolio';
import styles from './styles';
import { GemData, GemFlowInitator } from './types';

interface GemProps extends RouteProp<RootRoutes, 'Gem'> {
  route: {
    params: RootRoutes['Gem'];
  };
}
const Gem: FC<GemProps> = ({ route: { params } }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const {
    authStore: { email },
  } = useContext(RootContext);
  const gemOnRamp = getGemOnRampSrcForAsset(
    GemIntent.BUY,
    [{ asset: params?.asset }],
    params?.amount,
    params?.locked,
    email
  );
  const initiator = params?.flow;

  const handleMarketWatch = useCallback(
    (e: GemData) => {
      switch (e.eventType) {
        case GemMessages.EXIT:
          navigation.goBack();
          break;
        case GemMessages.SUCCESS:
          navigation.goBack();
          break;
        case GemMessages.ERROR:
          // TODO: handle event
          navigation.goBack();
          break;
        case GemMessages.PROMPT:
          // TODO: handle event
          navigation.goBack();
          break;
        default:
          navigation.goBack();
      }
    },
    [navigation]
  );

  const handleAddFunds = useCallback(
    (e: GemData) => {
      switch (e.eventType) {
        case GemMessages.EXIT:
          navigation.goBack();
          // TODO: Update this
          navigation.navigate('TransactionStatus', mockedRouteParamsForBank);
          // navigation.navigate('ManagedPortfolioSuccess', {
          //   initialInvestment: 30000,
          //   defaultRisk: 75,
          // });
          break;
        case GemMessages.SUCCESS:
          navigation.goBack();
          // TODO: Update this based on deposit method
          navigation.navigate('TransactionStatus', mockedRouteParamsForBank);
          break;
        case GemMessages.ERROR:
          // TODO: handle event
          navigation.goBack();
          break;
        case GemMessages.PROMPT:
          // TODO: handle event
          navigation.goBack();
          break;
        default:
          navigation.goBack();
      }
    },
    [navigation]
  );

  const onMessage = useCallback(
    (msg) => {
      const { data = '{}' } = msg.nativeEvent;
      const gemEventdata: GemData = JSON.parse(data);
      if (initiator === GemFlowInitator.ADD_FUNDS) {
        handleAddFunds(gemEventdata);
      } else {
        handleMarketWatch(gemEventdata);
      }
    },
    [handleAddFunds, handleMarketWatch, initiator]
  );

  return (
    <Background style={styles.container}>
      <SafeArea secondary edges={['top']}>
        <WebView
          source={{
            uri: gemOnRamp,
          }}
          onMessage={onMessage}
        />
      </SafeArea>
    </Background>
  );
};

export default Gem;
