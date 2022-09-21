import { useState, useEffect, useRef } from 'react';
import { Routes } from '@app/navigation/types';
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from '@react-navigation/native';
import Storage from '@app/utils/Storage';

export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any;
  },
  dispatch(_action: NavigationAction) {},
};
/* eslint-enable */

export const navigationRef = createNavigationContainerRef();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>
) {
  const route = state.routes[state.index];

  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

export function useNavigationPersistence() {
  const [initialState, setInitialState] = useState();

  // This feature is particularly useful in development mode.
  // It is selectively enabled in development mode with
  // the following approach. If you'd like to use navigation persistence
  // in production, remove the __DEV__ and set the state to true
  const [isRestored, setIsRestored] = useState(!__DEV__);

  const routeNameRef = useRef<string | undefined>();

  const onStateChange = (state) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
    }

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    Storage.save(NAVIGATION_PERSISTENCE_KEY, state);
  };

  const restoreState = async () => {
    try {
      const state = await Storage.load(NAVIGATION_PERSISTENCE_KEY);
      if (state) {
        setInitialState(state);
      }
    } finally {
      setIsRestored(true);
    }
  };

  useEffect(() => {
    if (!isRestored) {
      restoreState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRestored]);

  return {
    onStateChange,
    restoreState,
    isRestored,
    initialState,
  };
}

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = { index: 0, routes: [] }) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}

export const resetNavigation = <TRouteName extends keyof Routes>(
  routes: Array<{ name: TRouteName; params?: Routes[TRouteName] }>,
  index = 1
): void => {
  navigationRef.reset({
    index,
    routes,
  });
};
