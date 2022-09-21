import React, { FC, useMemo } from 'react';
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { isEmpty } from 'lodash';

import { Typography } from '@app/components';
import { Theme } from '@app/state/stores/settings/types';

import { getLevel, getHelperVariant, getLabelVariant, getWidth } from './utils';
import styles from './styles';

interface OuterWrapperProps {
  disabled?: boolean;
  active?: boolean;
  touched?: boolean;
  error?: boolean;
  label?: string;
  hasAllWidth?: boolean;
  helperText?: string;
  theme: Theme;
  value: string;
  onPress: (event: GestureResponderEvent) => void;
}

const OuterWrapper: FC<OuterWrapperProps> = ({
  disabled,
  active,
  touched,
  error,
  label,
  helperText,
  hasAllWidth = true,
  theme,
  value,
  onPress,
  children,
}) => {
  const custom = useMemo(
    () => [
      styles.container,
      getLevel(active, touched, helperText),
      getWidth(hasAllWidth),
    ],
    [active, hasAllWidth, helperText, touched]
  );

  const helperVariant = useMemo(
    () => getHelperVariant(active, error, touched, disabled, theme),
    [error, touched, active, disabled, theme]
  );

  const labelVariant = useMemo(
    () => getLabelVariant(active, error, touched, disabled, theme, value),
    [error, touched, active, disabled, theme, value]
  );

  const displayHelper = !isEmpty(helperText);
  const displayLabel = !isEmpty(label);

  const content = useMemo(
    () => (
      <>
        {displayLabel && (
          <Typography size="small" style={styles.label} variant={labelVariant}>
            {label}
          </Typography>
        )}
        {children}
        {displayHelper && (
          <Typography style={styles.helperText} variant={helperVariant}>
            {helperText}
          </Typography>
        )}
      </>
    ),
    [
      displayLabel,
      displayHelper,
      children,
      helperVariant,
      helperText,
      label,
      labelVariant,
    ]
  );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={custom}>{content}</View>
    </TouchableWithoutFeedback>
  );
};

export default OuterWrapper;
