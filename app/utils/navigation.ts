import { Routes } from '@app/navigation/types';
import { NavigationProp } from '@react-navigation/core';

export const getThePreviousRouteName = (
  navigation: NavigationProp<Routes>
): string | undefined => {
  const routes = navigation.getState()?.routes;
  const prevRoute = routes[routes.length - 2];
  return prevRoute?.name;
};
