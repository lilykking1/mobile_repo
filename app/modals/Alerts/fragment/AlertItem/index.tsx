import React, { memo, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Divider, Typography } from '@app/components';
import { Alert as AlertModel } from '@app/models';
import dayjs from 'dayjs';
import { Theme } from '@app/state/stores/settings/types';
import styles from './styles';
import { getAlertCircleColorByTheme } from './utils';

interface AlertItemProps {
  alert: AlertModel;
  alertIndex: number;
  isTheLastAlert: boolean;
  handlePress: (alertIndex: number) => void;
  theme: Theme;
}

const AlertItem: React.FC<AlertItemProps> = ({
  alert,
  handlePress,
  alertIndex,
  isTheLastAlert,
  theme,
}) => {
  const getAlertStyle = useCallback(
    () => (isTheLastAlert ? styles.lastAlertContent : [styles.alertContent]),
    [isTheLastAlert]
  );

  const getAlertFormattedDate = useCallback(
    (alertTimestamp) =>
      dayjs(new Date(alertTimestamp * 1000)).format('DD MMM YYYY, HH:MM A'),
    []
  );

  return (
    <TouchableOpacity
      style={getAlertStyle()}
      onPress={() => handlePress(alertIndex)}
    >
      <View style={styles.alertHeader}>
        <Typography size="body1" strong>
          {alert.title}
        </Typography>
        <View style={styles.indicator}>
          <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <Circle
              cx="6"
              cy="6"
              r="6"
              fill={getAlertCircleColorByTheme(alert, theme)}
            />
          </Svg>
        </View>
      </View>
      <Typography size="body2" variant="grey.600">
        {alert.text}
      </Typography>
      <Typography style={styles.alertDate} size="body2" variant="grey.600">
        {getAlertFormattedDate(alert.timestamp)}
      </Typography>
      {!isTheLastAlert && <Divider style={styles.divider} />}
    </TouchableOpacity>
  );
};

export default memo<typeof AlertItem>(AlertItem);
