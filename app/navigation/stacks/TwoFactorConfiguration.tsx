import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  TwoFactorConfigurationBlock,
  TwoFactorConfigurationCode,
  TwoFactorConfigurationSetup,
  TwoFactorConfigurationRecovery,
  TwoFactorConfigurationPrompt,
  TwoFactorConfigurationQr,
} from '@app/modals';

import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
  contentStyle: styles.screen,
};

const TwoFactorConfiguration: FC = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
    initialRouteName="TwoFactorConfigurationPrompt"
  >
    <Stack.Screen
      name="TwoFactorConfigurationBlock"
      component={TwoFactorConfigurationBlock}
    />
    <Stack.Screen
      name="TwoFactorConfigurationPrompt"
      component={TwoFactorConfigurationPrompt}
    />
    <Stack.Screen
      name="TwoFactorConfigurationSetup"
      component={TwoFactorConfigurationSetup}
    />
    <Stack.Screen
      name="TwoFactorConfigurationCode"
      component={TwoFactorConfigurationCode}
    />
    <Stack.Screen
      name="TwoFactorConfigurationQr"
      component={TwoFactorConfigurationQr}
    />
    <Stack.Screen
      name="TwoFactorConfigurationRecovery"
      component={TwoFactorConfigurationRecovery}
    />
  </Stack.Navigator>
);

export default memo(TwoFactorConfiguration);
