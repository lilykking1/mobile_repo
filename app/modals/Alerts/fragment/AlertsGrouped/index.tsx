import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Background, Typography } from '@app/components';
import { Alert as AlertModel } from '@app/models';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { palette } from '@app/theme';
import styles from './styles';
import { getDateMonthAndYear, readAlertByIndex } from '../../utils';
import AlertItem from '../AlertItem';

interface AlertsGroupedProps {
  alerts: AlertModel[];
}

const AlertsGrouped: React.FC<AlertsGroupedProps> = ({ alerts }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const [alertsState, setAlertsState] = useState<AlertModel[]>([]);

  useEffect(() => {
    setAlertsState(alerts);
  }, [alerts]);

  const handlePress = useCallback(
    (alertIndex) => {
      setAlertsState(readAlertByIndex(alertsState, alertIndex));
    },
    [alertsState]
  );

  const alertsGroupDate = useMemo(() => {
    const alert = alerts[0];
    return getDateMonthAndYear(alert.timestamp);
  }, [alerts]);

  const checkIfIsTheLastAlertByIndex = useCallback(
    (alertIndex) => alertIndex === alerts.length - 1,
    [alerts]
  );

  return (
    <Background style={styles.alertsContainer} altDark={palette.royalBlue[950]}>
      <Typography size="body2" variant="grey.600">
        {alertsGroupDate}
      </Typography>
      {alertsState.map((alert, index) => (
        <AlertItem
          key={alert.timestamp}
          handlePress={handlePress}
          isTheLastAlert={checkIfIsTheLastAlertByIndex(index)}
          alert={alert}
          alertIndex={index}
          theme={theme}
        />
      ))}
    </Background>
  );
};

export default memo<typeof AlertsGrouped>(observer(AlertsGrouped));
