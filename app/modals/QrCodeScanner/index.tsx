import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { BarCodeReadEvent } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { RootRoutes, Routes } from '@app/navigation/types';

import { PERMISSION_MESSAGE } from './constants';
import eventEmitter from './eventEmitter';
import Header from './fragments/Header';
import styles from './styles';

interface QrCodeScannerProps {
  route: {
    params: RootRoutes['QrCodeScanner'];
  };
}

const QrCodeScanner: FC<QrCodeScannerProps> = ({ route }) => {
  const { eventName } = route.params;

  const navigation = useNavigation<NavigationProp<Routes>>();

  const { top } = useSafeAreaInsets();
  const paddingTopStyle = useMemo(() => ({ paddingTop: top }), [top]);

  const onRead = (qrScanEvent: BarCodeReadEvent) => {
    eventEmitter.notify(eventName, qrScanEvent.data);
    navigation.goBack();
  };

  return (
    <>
      <View style={[styles.mask, paddingTopStyle]}>
        <Header />
      </View>

      <QRCodeScanner
        permissionDialogMessage={PERMISSION_MESSAGE}
        containerStyle={styles.container}
        topContent={null}
        topViewStyle={styles.top}
        cameraStyle={styles.camera}
        cameraContainerStyle={styles.cameraContainer}
        showMarker
        markerStyle={styles.marker}
        onRead={onRead}
        bottomContent={null}
        bottomViewStyle={styles.bottom}
      />
    </>
  );
};

export default QrCodeScanner;
