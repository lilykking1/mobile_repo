import React, { FC, memo } from 'react';

import { SignIn, SignUp } from '@app/screens';
import { createPartialNavigator } from '@app/navigation/navigators';

import styles from './styles';

const Partial = createPartialNavigator();

const screenOptions = { headerShown: false, contentStyle: styles.screen };

const Authentication: FC = () => (
  <Partial.Navigator screenOptions={screenOptions} initialRouteName="SignIn">
    <Partial.Screen name="SignUp" component={SignUp} />
    <Partial.Screen name="SignIn" component={SignIn} />
  </Partial.Navigator>
);

export default memo(Authentication);
