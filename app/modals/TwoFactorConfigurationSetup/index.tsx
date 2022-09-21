import React, { FC, useCallback, useState, useContext } from 'react';
import { observer } from 'mobx-react';
import { Alert, Image, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootContext } from '@app/state';
import { Lockpads } from '@app/assets/images';
import { translate } from '@app/i18n';
import {
  Button,
  Icon,
  IconButton,
  Logo,
  SafeArea,
  Typography,
  TextInput,
  StickyHeader,
} from '@app/components';
import { Routes } from '@app/navigation/types';

import { palette } from '@app/theme';
import { FROM_ALT_COLOR, TO_ALT_COLOR } from './constants';
import styles from './styles';

type TwoFactorConfigurationSetupProps = NativeStackNavigationProp<
  Routes,
  'TwoFactorConfigurationSetup'
>;

const TwoFactorConfigurationSetup: FC<TwoFactorConfigurationSetupProps> = () => {
  const {
    authStore: { email },
  } = useContext(RootContext);

  const navigation = useNavigation<NavigationProp<Routes>>();

  const [authCode] = useState('abcd efgh ijkl mnop');

  const envelopeIcon = <Icon.Envelope />;
  const lockIcon = <Icon.Lock />;
  const copyIcon = <Icon.Copy />;
  const qrIcon = (
    <Icon.QrCode width={31} height={31} tint={palette.royalBlue[500]} />
  );
  const logo = <Logo style={styles.logo} />;

  const handleCopyEmailPress = useCallback(() => {
    Clipboard.setString(email);
    // TODO: Define feedback
    Alert.alert('Email copied');
  }, [email]);

  const handleCopyAuthorizationCodePress = useCallback(() => {
    Clipboard.setString(authCode);
    // TODO: Define feedback
    Alert.alert('Authorization Code copied');
  }, [authCode]);

  const handleContinuePress = useCallback(() => {
    navigation.navigate('TwoFactorConfigurationCode');
  }, [navigation]);

  const handleQrCodePress = useCallback(() => {
    navigation.navigate('TwoFactorConfigurationQr', {
      email,
      authCode,
    });
  }, [navigation, email, authCode]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
      <View style={styles.header}>
        <StickyHeader
          altLight={FROM_ALT_COLOR}
          altDark={TO_ALT_COLOR}
          handleBackPress={handleBackPress}
          Title={logo}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            accessibilityIgnoresInvertColors
            source={Lockpads}
            style={styles.icon}
          />
          <Typography
            size="h2"
            strong
            altLight="main.500"
            altDark="white"
            style={styles.title}
          >
            {translate('modals.twoFactorConfigurationSetup.title')}
          </Typography>
          <Typography size="body1" style={styles.instructions}>
            {translate('modals.twoFactorConfigurationSetup.text.instructions')}
          </Typography>
          <View style={styles.form}>
            <View style={styles.field}>
              <TextInput
                icon={envelopeIcon}
                onRightIconPress={handleCopyEmailPress}
                rightIcon={copyIcon}
                placeholder={translate('fields.email.title')}
                defaultValue={email}
                disabled
              />
            </View>
            <View style={styles.field}>
              <TextInput
                icon={lockIcon}
                onRightIconPress={handleCopyAuthorizationCodePress}
                rightIcon={copyIcon}
                placeholder={translate('fields.authorizationCode.title')}
                defaultValue={authCode}
                disabled
              />
            </View>
          </View>
          <IconButton
            containerStyle={styles.qrCode}
            startIcon={qrIcon}
            onPress={handleQrCodePress}
          />
        </View>
        <View style={styles.footer}>
          <Button
            variant="primary"
            label={translate(
              'modals.twoFactorConfigurationSetup.action.enable'
            )}
            onPress={handleContinuePress}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default observer(TwoFactorConfigurationSetup);
