import React, { FC, ReactNode, useMemo } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  View,
} from 'react-native';
import { Badge } from '@app/components';
import styles from './styles';

interface IconButtonProps extends PressableProps {
  disabled?: boolean;
  label?: string;
  icon: ReactNode;
  badgeCount: number;
}

const IconButton: FC<IconButtonProps> = ({
  disabled,
  icon,
  badgeCount,
  ...rest
}) => {
  const buttonStyle = useMemo(
    () => (state: PressableStateCallbackType) => [
      styles.base,
      !disabled && state.pressed && styles.pressed,
      disabled && styles.disabled,
    ],
    [disabled]
  );

  const badge = useMemo(
    () => (
      <View style={styles.badge}>
        <Badge count={badgeCount} />
      </View>
    ),
    [badgeCount]
  );

  return (
    <Pressable disabled={disabled} style={buttonStyle} {...rest}>
      {badge}
      {icon}
    </Pressable>
  );
};

export default IconButton;
