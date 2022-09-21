import React, { ReactElement } from 'react';
import { ViewStyle } from 'react-native';

import { Theme } from '@app/state/stores/settings/types';
import { Icon } from '@app/components';
import { palette } from '@app/theme';
import styles from './styles';

export const getButtonIcon = (
  isPressed: boolean,
  theme: Theme
): ReactElement => {
  if (isPressed) {
    const tint = theme === 'dark' ? palette.royalBlue[1000] : palette.grey[300];
    return <Icon.EyeClosed tint={tint} />;
  }

  return <Icon.EyeOpen tint={palette.grey[600]} />;
};

export const getButtonStyles = (isPressed: boolean): ViewStyle | undefined =>
  isPressed && styles.pressed;
