import React, { FC, useState, useCallback } from 'react';
import { WebView } from 'react-native-webview';
import { Modal } from 'react-native';

import {
  useNavigation,
  NavigationProp,
  RouteProp,
} from '@react-navigation/core';
import { Routes, RootRoutes } from '@app/navigation/types';
import { Icon, IconButton, SafeArea, StickyHeader } from '@app/components';
import { coinbaseUrl } from '@app/config/coinbase';
import { mockedRouteParams } from '@app/mocks/Portfolio';
import styles from './styles';

interface CoinbaseProps extends RouteProp<RootRoutes, 'Coinbase'> {
  route: {
    params: RootRoutes['Coinbase'];
  };
}

const Coinbase: FC<CoinbaseProps> = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [isModalVisible, setIsModalVisible] = useState(true);

  const navigateToStatusScreen = useCallback(() => {
    navigation.navigate('TransactionStatus', mockedRouteParams);
  }, [navigation]);

  const handleCloseWebview = useCallback(() => {
    setIsModalVisible(false);
    navigation.goBack();
  }, [navigation]);

  const onNavigationStateChange = (webViewState) => {
    if (webViewState.url && webViewState.url.includes('coinbase?code=')) {
      navigateToStatusScreen();
      setIsModalVisible(false);
    }
  };

  const closeButton = (
    <IconButton
      size="normal"
      onPress={handleCloseWebview}
      startIcon={<Icon.Close />}
    />
  );

  return (
    <Modal style={styles.container} visible={isModalVisible}>
      <SafeArea secondary edges={['top']}>
        <StickyHeader
          Left={closeButton}
          secondaryBackground
          handleBackPress={handleCloseWebview}
        />
        <WebView
          source={{
            uri: coinbaseUrl,
          }}
          onNavigationStateChange={onNavigationStateChange}
        />
      </SafeArea>
    </Modal>
  );
};

export default Coinbase;
