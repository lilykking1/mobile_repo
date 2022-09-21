import React, { FC, memo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CognitoFailure as Failure,
  CustomerService,
  SuccessSubmission,
} from '@app/modals';

import styles from './styles';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
  contentStyle: styles.screen,
};

const CognitoStack: FC = () => (
  <Stack.Navigator screenOptions={screenOptions} initialRouteName="Failure">
    <Stack.Screen name="Failure" component={Failure} />
    <Stack.Screen name="CustomerService" component={CustomerService} />
    <Stack.Screen name="SuccessSubmission" component={SuccessSubmission} />
  </Stack.Navigator>
);

export default memo(CognitoStack);
