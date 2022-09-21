import React, { useCallback, FC, useState, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Alert } from '@app/models';
import { Background, Typography } from '@app/components';

import { ActionType } from '../../types';
import { getActionIcon, getActionStyles } from './utils';
import styles from './styles';
import { OPACITY_ON_PRESS_VALUE } from './constants';

interface ActionProps {
  type: ActionType;
  onPress: () => void;
  hasHorizontalSpace?: boolean;
  hasAlerts?: boolean;
  alerts?: Alert[];
}

const Action: FC<ActionProps> = ({
  type,
  onPress,
  hasHorizontalSpace,
  hasAlerts,
  alerts = [],
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleOnPress = useCallback(() => {
    onPress();
    setIsPressed((currentValue) => !currentValue);
  }, [onPress]);

  const unreadAlerts = useMemo(() => {
    if (!hasAlerts) {
      return [];
    }

    return alerts.filter((alert) => alert.read === false);
  }, [alerts, hasAlerts]);

  const icon = useMemo(() => getActionIcon(type, isPressed), [isPressed, type]);

  const actionStyle = useMemo(
    () => getActionStyles(type, hasHorizontalSpace, isPressed),
    [hasHorizontalSpace, isPressed, type]
  );

  const alertsBadge = useMemo(() => {
    if (unreadAlerts.length && type === ActionType.ALERT) {
      return (
        <View style={styles.badgeAlerts}>
          <Typography size="small" variant="white">
            {unreadAlerts.length}
          </Typography>
        </View>
      );
    }

    return null;
  }, [type, unreadAlerts.length]);

  return (
    <TouchableOpacity
      activeOpacity={OPACITY_ON_PRESS_VALUE}
      onPress={handleOnPress}
    >
      <Background style={actionStyle}>
        {alertsBadge}
        {icon}
      </Background>
    </TouchableOpacity>
  );
};

export default Action;
