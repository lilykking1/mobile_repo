import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import {
  useNavigation,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';

import { Background, SimpleHeader } from '@app/components';
import { Alert } from '@app/models';
import { RootRoutes, Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { palette } from '@app/theme';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeDashboardEvents } from '@app/utils/amplitude/constants/dashboard/events';
import { readAllAlerts } from './utils';
import List from './fragment/List';
import styles from './styles';

interface AlertsProps extends RouteProp<RootRoutes, 'Alerts'> {
  route: {
    params: RootRoutes['Alerts'];
  };
}

const Alerts: FC<AlertsProps> = ({ route }) => {
  const listRef = useRef<FlatList>();
  const {
    handleHeaderLayout,
    scroll,
    handleScrollWithFlatList,
    headerHeight,
  } = useStickyHandler(listRef);
  const [alertsState, setAlertsState] = useState<Alert[]>();
  const navigation = useNavigation<NavigationProp<Routes>>();

  const { alerts } = route.params;

  useEffect(() => setAlertsState(alerts), [alerts]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // TODO: mutation to update all user's read reciepts for alerts!
  const handleMarkAllPress = useCallback(() => {
    logAmplitudeEvent(AmplitudeDashboardEvents.MARK_ALL_ALERTS);
    setAlertsState(readAllAlerts(alertsState));
  }, [alertsState]);

  return (
    <Background style={styles.container} altLight={palette.white}>
      <SimpleHeader
        scrollPosition={scroll}
        onPressBack={handleBackPress}
        title={translate('modals.alerts.title')}
        handleHeaderLayout={handleHeaderLayout}
        isCollapsedTitle
      />
      <List
        ref={listRef}
        data={alertsState}
        handleScroll={handleScrollWithFlatList}
        headerHeight={headerHeight}
        handleMarkAllPress={handleMarkAllPress}
      />
    </Background>
  );
};

export default Alerts;
