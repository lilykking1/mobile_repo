import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  DashboardDark,
  DashboardLight,
  MarketDark,
  MarketLight,
  SettingsDark,
  SettingsLight,
  WalletDark,
  WalletLight,
} from '@app/assets/animations';
import { useLottieAnimation } from '@app/hooks';
import { Icon } from '@app/components';
import { palette } from '@app/theme';

import { getFocusedRouteNameFromRoute } from '@react-navigation/core';
import { SCREENS_SHOULD_HIDE_TAB_BAR } from './constants';
import { Tabs } from './types';

import styles from './styles';

export const getTabIcons = (routeName: Tabs, theme: string) => ({
  focused,
}) => {
  let icon;
  let animationSource;
  const animation = useLottieAnimation();
  const tint = palette.grey[600];

  switch (routeName) {
    case Tabs.DASHBOARD:
      animationSource = theme === 'light' ? DashboardLight : DashboardDark;
      icon = <Icon.Dashboard tint={tint} />;
      break;
    case Tabs.WALLET:
      animationSource = theme === 'light' ? WalletLight : WalletDark;
      icon = <Icon.Wallet tint={tint} />;
      break;
    case Tabs.MARKET_WATCH:
      animationSource = theme === 'light' ? MarketLight : MarketDark;
      icon = <Icon.MarketWatch tint={tint} />;
      break;
    case Tabs.SETTINGS:
      animationSource = theme === 'light' ? SettingsLight : SettingsDark;
      icon = <Icon.Settings tint={tint} />;
      break;
    default:
      break;
  }

  return focused ? (
    <LottieView
      ref={animation}
      autoPlay={false}
      loop={false}
      source={animationSource}
      style={styles.lottieIcon}
    />
  ) : (
    icon
  );
};

const getTabBackground = (theme) => {
  const custom = [
    styles.bottomBarContainer,
    {
      backgroundColor:
        theme === 'dark' ? palette.royalBlue[950] : palette.white,
    },
  ];
  return <View style={custom} />;
};

export const createScreenOptions = (route: any, theme: any) => {
  const activeColor =
    theme === 'light' ? palette.royalBlue[500] : palette.white;

  return {
    tabBarTestID: `BottomTabs.${route.name}`,
    tabBarIcon: getTabIcons(route.name, theme),
    tabBarBackground: () => getTabBackground(theme),
    tabBarShowLabel: true,
    headerShown: false,
    tabBarInactiveTintColor: palette.grey[600],
    tabBarActiveTintColor: activeColor,
  };
};

const getTabBarDisplay = (routeName: string, forceHideTabBar = false) =>
  SCREENS_SHOULD_HIDE_TAB_BAR.includes(routeName) || forceHideTabBar
    ? 'none'
    : 'flex';

const getTabBarStyle = (route: any, forceHideTabBar = false) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const display = getTabBarDisplay(routeName, forceHideTabBar);
  return { display };
};

export const createTabOptions = (route: any, forceHideTabBar = false) => ({
  tabBarStyle: getTabBarStyle(route, forceHideTabBar),
});
