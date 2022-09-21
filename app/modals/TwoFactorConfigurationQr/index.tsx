import React, { FC, useCallback, useContext } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TWOFA_QR_PATH, TWOFA_QR_SECRET, TWOFA_QR_ISSUER } from '@env';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootContext } from '@app/state';

import { translate } from '@app/i18n';
import {
  SafeArea,
  Typography,
  StickyHeader,
  Background,
  CodeInput,
} from '@app/components';
import { Routes, TwoFactorConfigurationRoutes } from '@app/navigation/types';
import {
  SAFE_AREA_ALT_DARK,
  SAFE_AREA_ALT_LIGHT,
  CODE_CONTAINER_ALT_DARK,
  CODE_CONTAINER_ALT_LIGHT,
  QR_CODE_SIZE,
} from './constants';

import styles from './styles';

interface TwoFactorConfigurationQrProps
  extends NativeStackNavigationProp<Routes, 'TwoFactorConfigurationQr'> {
  route: {
    params: TwoFactorConfigurationRoutes['TwoFactorConfigurationQr'];
  };
}

const TwoFactorConfigurationQr: FC<TwoFactorConfigurationQrProps> = ({
  route,
}) => {
  const { email, authCode } = route.params;
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const isLightTheme = theme === 'light';

  const title = (
    <Typography size="h6" strong>
      {translate('modals.twoFactorConfigurationQr.navTitle')}
    </Typography>
  );

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCodeFulfill = (code) => {
    Alert.alert('Submitted code', code);
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeArea altLight={SAFE_AREA_ALT_LIGHT} altDark={SAFE_AREA_ALT_DARK}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior="position"
            style={styles.content}
            contentContainerStyle={styles.content}
          >
            <View style={styles.header}>
              <StickyHeader
                altLight={SAFE_AREA_ALT_LIGHT}
                altDark={SAFE_AREA_ALT_DARK}
                handleBackPress={handleBackPress}
                Title={title}
              />
            </View>
            <View style={styles.subContent}>
              <Typography
                size="h2"
                altLight="main.500"
                altDark="white"
                style={styles.title}
              >
                {translate('modals.twoFactorConfigurationQr.title')}
              </Typography>
              {isLightTheme && <View style={styles.divider} />}
              <Typography
                size="h5"
                altLight="secondary.900"
                altDark="grey.600"
                style={styles.qrInstructions}
              >
                {translate('modals.twoFactorConfigurationQr.text.instructions')}
              </Typography>
              <View style={styles.qrContainer}>
                <QRCode
                  value={`${TWOFA_QR_PATH}${email}${TWOFA_QR_SECRET}${authCode}${TWOFA_QR_ISSUER}`}
                  size={QR_CODE_SIZE}
                />
              </View>
            </View>
            <Background
              altLight={CODE_CONTAINER_ALT_LIGHT}
              altDark={CODE_CONTAINER_ALT_DARK}
              style={styles.codeContainer}
            >
              <Typography size="h5" style={styles.codeInstructions}>
                {translate('modals.twoFactorConfigurationQr.text.oneTimeCode')}
              </Typography>
              <CodeInput cellCount={6} onSubmit={handleCodeFulfill} />
            </Background>
          </KeyboardAvoidingView>
        </View>
      </SafeArea>
    </TouchableWithoutFeedback>
  );
};

export default observer(TwoFactorConfigurationQr);
