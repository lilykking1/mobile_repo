import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  IndividualCoinsDetails,
  ManagedPortfolio as Managed,
  ManagedPortfolioDetails,
  ManagedAssetsDetails,
  ManagedPortfolioSuccess,
  PortfolioCryptoDeposit,
  ChooseInvestment,
  StableCoinsDetails,
  ManagedPortfolioLoading,
  ClosePortfolioConversion,
  CloseManagedPortfolio,
  Riskalyze,
  CloseManagedPortfolioSuccess,
} from '@app/screens';

const Stack = createNativeStackNavigator();

const ManagedPortfolio: React.ReactElement = (
  <Stack.Group>
    <Stack.Screen
      name="ClosePortfolioConversion"
      component={ClosePortfolioConversion}
    />
    <Stack.Screen name="ManagedPortfolio" component={Managed} />
    <Stack.Screen
      name="CloseManagedPortfolio"
      component={CloseManagedPortfolio}
    />
    <Stack.Screen
      name="CloseManagedPortfolioSuccess"
      component={CloseManagedPortfolioSuccess}
    />
    <Stack.Screen
      name="IndividualCoinsDetails"
      component={IndividualCoinsDetails}
    />
    <Stack.Screen
      name="ManagedAssetsDetails"
      component={ManagedAssetsDetails}
    />
    <Stack.Screen
      name="ManagedPortfolioDetails"
      component={ManagedPortfolioDetails}
    />

    <Stack.Screen
      name="ManagedPortfolioSuccess"
      component={ManagedPortfolioSuccess}
    />
    <Stack.Screen
      name="PortfolioCryptoDeposit"
      component={PortfolioCryptoDeposit}
    />
    <Stack.Screen name="ChooseInvestment" component={ChooseInvestment} />
    <Stack.Screen name="StableCoinsDetails" component={StableCoinsDetails} />
    <Stack.Screen
      name="ManagedPortfolioLoading"
      component={ManagedPortfolioLoading}
    />
    <Stack.Screen name="Riskalyze" component={Riskalyze} />
  </Stack.Group>
);

export default ManagedPortfolio;
