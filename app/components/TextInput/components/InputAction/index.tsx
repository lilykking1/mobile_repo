import React, { FC, useCallback, useMemo } from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { noop } from 'lodash';

import Typography from '@app/components/Typography';
import { Theme } from '@app/state/stores/settings/types';

import { getTextVariant } from './utils';
import styles from './styles';

interface ActionProps extends TouchableOpacityProps {
  disabled: boolean;
  actionText: string;
  active: boolean;
  isFilled: boolean;
  theme: Theme;
}

const InputAction: FC<ActionProps> = ({
  disabled,
  actionText,
  onPress = noop,
  active,
  isFilled,
  theme,
  ...rest
}) => {
  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      event.stopPropagation();
      onPress(event);
    },
    [onPress]
  );

  const textVariant = useMemo(
    () => getTextVariant(active, disabled, isFilled, theme),
    [active, disabled, isFilled, theme]
  );

  return (
    <TouchableOpacity style={styles.action} onPress={handlePress} {...rest}>
      <Typography size="small" strong variant={textVariant}>
        {actionText}
      </Typography>
    </TouchableOpacity>
  );
};

export default InputAction;
