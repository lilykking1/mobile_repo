import React, {
  FC,
  useCallback,
  useMemo,
  cloneElement,
  ReactElement,
} from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { noop } from 'lodash';

import { IconProps as ComponentIconProps } from '@app/components/Icon/types';
import { Theme } from '@app/state/stores/settings/types';
import { PaletteColor } from '@app/theme';

import styles from './styles';
import { getIconTint } from './utils';

interface IconProps extends TouchableOpacityProps {
  icon: ReactElement<ComponentIconProps>;
  left?: boolean;
  right?: boolean;
  disabled: boolean;
  active: boolean;
  isFilled: boolean;
  theme: Theme;
  customIconTint?: PaletteColor;
}

const Icon: FC<IconProps> = ({
  icon,
  left = false,
  right = false,
  disabled,
  active,
  isFilled,
  theme,
  onPress = noop,
  customIconTint,
  ...rest
}) => {
  const iconTint = useMemo(
    () => customIconTint || getIconTint(active, disabled, isFilled, theme),
    [customIconTint, active, disabled, isFilled, theme]
  );

  const iconCopy = useMemo(
    () => icon && cloneElement(icon, { tint: iconTint }),
    [icon, iconTint]
  );

  const custom = useMemo(() => [left && styles.left, right && styles.right], [
    left,
    right,
  ]);

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      event.stopPropagation();
      onPress(event);
    },
    [onPress]
  );

  return (
    <TouchableOpacity style={custom} onPress={handlePress} {...rest}>
      {iconCopy}
    </TouchableOpacity>
  );
};

export default Icon;
