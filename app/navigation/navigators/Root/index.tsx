import React, { FC, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react';

import {
  Alerts,
  EmailConfirmation,
  NotAvailableLocation,
  QrCodeScanner,
  TwoFactorVerification,
  UserAgreement,
} from '@app/modals';
import {
  ChangePassword,
  Cognito,
  Coinbase,
  ExplainerSeries,
  ForgotPassword,
  Gem,
  TransactionStatus,
} from '@app/screens';
import { isIpValid } from '@app/utils/validateLocation';
import { mockedIps } from '@app/modals/NotAvailableLocation/mock';
import { RootContext } from '@app/state';
import {
  Authentication,
  CognitoStack,
  ManagedPortfolio,
  Settings,
  StackedWallet,
  TwoFactorConfiguration,
} from '@app/navigation/stacks';
import { Home } from '@app/navigation/tabs';
import News from '@app/modals/News';
import NewsDetail from '@app/modals/NewsDetail';
import WithdrawSuccess from '@app/modals/WithdrawSuccess';
import ErrorModal from '@app/modals/ErrorModal';
import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = { headerShown: false, contentStyle: styles.screen };

const exposed = (
  <>
    <Stack.Screen name="ExplainerSeries" component={ExplainerSeries} />
    <Stack.Screen name="Authentication" component={Authentication} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
  </>
);

const secured = (
  <Stack.Group>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="StackedWallet" component={StackedWallet} />
    {ManagedPortfolio}
  </Stack.Group>
);

const notAvailable = (location) => (
  <Stack.Screen
    name="NotAvailableLocation"
    component={NotAvailableLocation}
    initialParams={{ location }}
  />
);

const modals = (
  <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
    <Stack.Screen name="Alerts" component={Alerts} />
    <Stack.Screen name="CognitoStack" component={CognitoStack} />
    <Stack.Screen
      name="TwoFactorConfiguration"
      component={TwoFactorConfiguration}
    />
    <Stack.Screen
      name="TwoFactorVerification"
      component={TwoFactorVerification}
    />

    <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="NewsDetail" component={NewsDetail} />
    <Stack.Screen
      name="NotAvailableLocationModal"
      component={NotAvailableLocation}
    />
    <Stack.Screen name="UserAgreement" component={UserAgreement} />
    <Stack.Screen name="Gem" component={Gem} />
    <Stack.Screen name="Cognito" component={Cognito} />
    <Stack.Screen name="Coinbase" component={Coinbase} />
    <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccess} />
    <Stack.Screen name="ErrorModal" component={ErrorModal} />
    <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} />
    <Stack.Screen name="TransactionStatus" component={TransactionStatus} />
  </Stack.Group>
);

const Root: FC = () => {
  const {
    authStore: { isSignedIn },
  } = useContext(RootContext);

  const validatedLocation = isIpValid(mockedIps.validIp);
  const invalidLocation =
    validatedLocation === undefined ? undefined : validatedLocation.location;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {invalidLocation !== undefined && notAvailable(invalidLocation)}
      {isSignedIn === true && secured}
      {isSignedIn === false && exposed}
      {modals}
    </Stack.Navigator>
  );
};

export default observer(Root);
