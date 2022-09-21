import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Profile,
  About,
  TermsAndConditions,
  Settings as SettingsScreen,
  Feedback,
  Debug,
} from '@app/screens';

import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false, contentStyle: styles.screen };

const Settings: FC = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
    initialRouteName="SettingsScreen"
  >
    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Feedback" component={Feedback} />
    <Stack.Screen name="Debug" component={Debug} />
  </Stack.Navigator>
);

export default memo(Settings);
