import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MultipleSwapConfirmation,
  SwapInProgress,
  SimpleSwapConfirmation,
  StackedWallet as StackedWalletScreen,
  SimpleSwap,
  SwapFinalStatus,
  WalletAddress,
  Withdraw,
  SwapManyToOne,
  SwapOneToMany,
  WithdrawConfirmation,
} from '@app/screens';
import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false, contentStyle: styles.screen };

const StackedWallet: FC = () => (
  <Stack.Navigator
    screenOptions={screenOptions}
    initialRouteName="StackedWalletScreen"
  >
    <Stack.Screen
      name="WithdrawConfirmation"
      component={WithdrawConfirmation}
    />
    <Stack.Screen name="SimpleSwap" component={SimpleSwap} />
    <Stack.Screen name="StackedWalletScreen" component={StackedWalletScreen} />
    <Stack.Screen name="WalletAddress" component={WalletAddress} />
    <Stack.Screen
      name="SimpleSwapConfirmation"
      component={SimpleSwapConfirmation}
    />
    <Stack.Screen name="Withdraw" component={Withdraw} />
    <Stack.Screen
      name="MultipleSwapConfirmation"
      component={MultipleSwapConfirmation}
    />
    <Stack.Screen name="SwapInProgress" component={SwapInProgress} />
    <Stack.Screen name="SwapFinalStatus" component={SwapFinalStatus} />
    <Stack.Screen name="SwapManyToOne" component={SwapManyToOne} />
    <Stack.Screen name="SwapOneToMany" component={SwapOneToMany} />
  </Stack.Navigator>
);

export default memo(StackedWallet);
