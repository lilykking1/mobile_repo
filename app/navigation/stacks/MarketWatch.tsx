import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MarketWatchDetail, MarketWatch as Home } from '@app/screens';

const Stack = createNativeStackNavigator();

// TODO: Refactor
const MarketWatch: FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="MarketWatchHome"
  >
    <Stack.Screen name="MarketWatchHome" component={Home} />
    <Stack.Screen name="MarketWatchDetail" component={MarketWatchDetail} />
  </Stack.Navigator>
);

export default memo(MarketWatch);
