import React, { ReactElement } from 'react';

import { Icon } from '@app/components';
import { palette } from '@app/theme';
import { ActionType } from '../../types';
import styles from './styles';

export const getActionIcon = (
  type: ActionType,
  isPressed: boolean
): ReactElement => {
  if (type === ActionType.ALERT) {
    return <Icon.Bell tint={palette.grey[600]} />;
  }

  if (isPressed) {
    return <Icon.EyeClosed tint={palette.grey[300]} />;
  }

  return <Icon.EyeOpen tint={palette.grey[600]} />;
};

export const getActionStyles = (
  type: ActionType,
  hasHorizontalSpace: boolean,
  isPressed: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any[] => [
  styles.base,
  hasHorizontalSpace && styles.horizontalSpace,
  isPressed && type === ActionType.SECRET && styles.pressed,
];
