import React, {
  FC,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';

import {
  Dashboard,
  MarketWatch,
  Settings,
  StackedWallet,
} from '@app/navigation/stacks';

import { createScreenOptions, createTabOptions } from './utils';
import { Tabs, WelcomeFlow } from './types';
import styles from './styles';

const Tab = createBottomTabNavigator();

const Home: FC = () => {
  const {
    settingsStore: { theme, isTwoFactorAuthEnabled, disableTwoFactorAuth },
  } = useContext(RootContext);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [forceHideTabBar, setForceHideTabBar] = useState(true);
  const [welcomeFlow, setWelcomeFlow] = useState<WelcomeFlow>(
    WelcomeFlow.NOT_VIEWED
  );

  useEffect(() => {
    const updateWelcomeFlow = (callback) => {
      const { routes } = callback?.data?.state;
      const ignoreCurrentScreen =
        routes &&
        routes[routes.length - 1].name === 'TwoFactorConfiguration' &&
        welcomeFlow === WelcomeFlow.VIEWED;

      if (ignoreCurrentScreen) {
        setWelcomeFlow(WelcomeFlow.NOT_VIEWED);
        return;
      }

      if (welcomeFlow === WelcomeFlow.NOT_VIEWED) {
        setWelcomeFlow(WelcomeFlow.VIEWED);
      } else {
        setWelcomeFlow(WelcomeFlow.MOVED_OUT);
      }
    };
    return navigation.addListener('state', updateWelcomeFlow);
  }, [welcomeFlow, navigation]);

  const needHideNavBar = useMemo((): boolean => {
    // TODO change to the user current wallet value
    const stackedWalletAssets = 1;
    // TODO change to verify if current user has managed portfolio
    const hasManagedPortfolio = false;

    if (stackedWalletAssets > 0 || hasManagedPortfolio) {
      return false;
    }

    return welcomeFlow !== WelcomeFlow.MOVED_OUT;
  }, [welcomeFlow]);

  useEffect(() => {
    if (!isTwoFactorAuthEnabled) {
      navigation.navigate('TwoFactorConfiguration');
    } else {
      navigation.navigate('Dashboard');
    }
  }, [isTwoFactorAuthEnabled, navigation, disableTwoFactorAuth]);

  useEffect(() => setForceHideTabBar(needHideNavBar), [
    welcomeFlow,
    needHideNavBar,
  ]);

  return (
    <Tab.Navigator
      screenOptions={({ route }): any => createScreenOptions(route, theme)}
      sceneContainerStyle={styles.screen}
      initialRouteName={Tabs.DASHBOARD}
    >
      <Tab.Screen
        name={Tabs.DASHBOARD}
        component={Dashboard}
        options={({ route }): any => createTabOptions(route, forceHideTabBar)}
      />
      <Tab.Screen
        name={Tabs.MARKET_WATCH}
        component={MarketWatch}
        options={{
          tabBarTestID: `BottomTabs.${Tabs.MARKET_WATCH}`,
        }}
      />
      <Tab.Screen
        name={Tabs.WALLET}
        component={StackedWallet}
        options={({ route }): any => createTabOptions(route, forceHideTabBar)}
      />
      <Tab.Screen
        name={Tabs.SETTINGS}
        component={Settings}
        options={({ route }): any => createTabOptions(route, forceHideTabBar)}
      />
    </Tab.Navigator>
  );
};

export default memo(observer(Home));
