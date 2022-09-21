import React, { FC, useContext, useCallback, useState } from 'react';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { View } from 'react-native';

import { useFocusEffect } from '@react-navigation/core';
import { DashboardRoutes } from '@app/navigation/types';

import { alerts } from '@app/modals/Alerts/__test__/utils.mock';
import { DashboardEmpty, DashboardPopulated } from './views';
import styles from './styles';

interface DashboardProps {
  route: {
    params?: DashboardRoutes['DashboardScreen'];
  };
}

const Dashboard: FC<DashboardProps> = ({ route }) => {
  const newPortfolioToReview = route.params?.newPortfolioToReview;
  const newRealocatedPortfolio = route.params?.newRealocatedPortfolio;
  const {
    settingsStore: { theme, getIsHydrated },
    userStore: { hasCompletedManagedPortfolioSetup },
  } = useContext(RootContext);
  const [isShown, setIsShown] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (!isShown && getIsHydrated() && theme) {
        setIsShown((prev) => !prev);
      }
    }, [isShown, getIsHydrated, theme])
  );

  // TODO change the condition to know if the user has funds
  const dashboardView = !hasCompletedManagedPortfolioSetup ? (
    <DashboardEmpty />
  ) : (
    <DashboardPopulated
      alerts={alerts}
      newPortfolioToReview={newPortfolioToReview}
      newRealocatedPortfolio={newRealocatedPortfolio}
    />
  );

  return <View style={styles.background}>{dashboardView}</View>;
};

export default observer(Dashboard);
