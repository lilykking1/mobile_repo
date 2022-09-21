import React, { FC, useCallback, useContext } from 'react';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { Alert, Keyboard, Image, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { translate } from '@app/i18n';
import {
  Button,
  Icon,
  Logo,
  SafeArea,
  TextInput,
  Typography,
  StickyHeader,
  Checkbox,
} from '@app/components';
import { Lockpads } from '@app/assets/images';
import { Routes } from '@app/navigation/types';

import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { useForm } from './hooks';
import { FROM_ALT_COLOR, TO_ALT_COLOR } from './constants';
import styles from './styles';

type TwoFactorConfigurationRecoveryProps = NativeStackNavigationProp<
  Routes,
  'TwoFactorConfigurationRecovery'
>;

const TwoFactorConfigurationRecovery: FC<TwoFactorConfigurationRecoveryProps> = () => {
  const {
    settingsStore: { enableTwoFactorAuth },
  } = useContext(RootContext);
  const {
    isValid,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    errors,
    touched,
    values,
  } = useForm();
  const navigation = useNavigation<NavigationProp<Routes>>();

  const recoveryCode = 'DHFJNCOCJSAOJAFPDAP';

  const logo = <Logo style={styles.logo} />;
  const copyIcon = <Icon.Copy />;

  const handleRecoveryCodePress = useCallback(() => {
    Clipboard.setString(recoveryCode);
    // TODO: Define feedback
    Alert.alert('Recovery Code copied');
  }, []);

  const handleSafelyRecordedChange = useCallback(
    (checked: boolean) => {
      setFieldTouched('safelyRecorded', true);
      setFieldValue('safelyRecorded', checked);
    },
    [setFieldTouched, setFieldValue]
  );

  const handleContinuePress = useCallback(() => {
    enableTwoFactorAuth();
    handleSubmit();
    Keyboard.dismiss();
    navigation.getParent().goBack();
    logAmplitudeEvent(AmplitudeAuthEvents.TWOFA_CLICK_FINISH_SETUP);
  }, [handleSubmit, navigation, enableTwoFactorAuth]);

  return (
    <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
      <View style={styles.header}>
        <StickyHeader
          altLight={FROM_ALT_COLOR}
          altDark={TO_ALT_COLOR}
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
            {translate('modals.twoFactorConfigurationRecovery.title')}
          </Typography>
          <Typography size="body1" style={styles.instructions}>
            {translate(
              'modals.twoFactorConfigurationRecovery.text.instructions'
            )}
          </Typography>
          <View style={styles.form}>
            <TextInput
              defaultValue={recoveryCode}
              rightIcon={copyIcon}
              onRightIconPress={handleRecoveryCodePress}
              disabled
            />
          </View>
          <View style={styles.confirmation}>
            <Checkbox
              onChange={handleSafelyRecordedChange}
              checked={values.safelyRecorded}
              error={errors.safelyRecorded}
              touched={touched.safelyRecorded}
              label={translate(
                'modals.twoFactorConfigurationRecovery.text.safelyRecorded'
              )}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            variant="primary"
            block
            label={translate(
              'modals.twoFactorConfigurationRecovery.action.continue'
            )}
            onPress={handleContinuePress}
            disabled={!isValid}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default observer(TwoFactorConfigurationRecovery);
