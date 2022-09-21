import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AssetsArea,
  Dashboard as DashboardScreen,
  SelfDirected as SelfDirectedTabScreen,
  PreQualification as PreQualificationScreen,
} from '@app/screens';

import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false, contentStyle: styles.screen };

const Dashboard: FC = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
    initialRouteName="DashboardScreen"
  >
    <Stack.Screen name="SelfDirected" component={SelfDirectedTabScreen} />
    <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    <Stack.Screen name="AssetsArea" component={AssetsArea} />
    <Stack.Screen name="PreQualification" component={PreQualificationScreen} />
  </Stack.Navigator>
);

export default memo(Dashboard);
