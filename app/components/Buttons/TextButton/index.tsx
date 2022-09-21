import React, { FC, ReactNode, useMemo } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { isEmpty } from 'lodash';
import { Typography } from '@app/components';
import styles from './styles';
import {
  getDisabledTextStyle,
  getPressedTextStyle,
  getSizeStyle,
  getVariantStyle,
} from './utils';
import { TextButtonSize, TextButtonVariant } from './types';

interface TextButtonProps extends PressableProps {
  block?: boolean;
  disabled?: boolean;
  endIcon?: ReactNode;
  label?: string;
  pill?: boolean;
  startIcon?: ReactNode;
  size?: TextButtonSize;
  variant?: TextButtonVariant;
  customStyle?: StyleProp<ViewStyle>;
}

const TextButton: FC<TextButtonProps> = ({
  block,
  disabled,
  endIcon,
  label,
  size,
  startIcon,
  variant,
  customStyle,
  ...rest
}) => {
  const custom = useMemo(
    () => [
      styles.base,
      getSizeStyle(size),
      getVariantStyle(variant),
      block && styles.block,
      disabled && styles.disabled,
      customStyle,
    ],
    [size, variant, block, disabled, customStyle]
  );

  const labelStyle = useMemo(
    () => (pressed: boolean) => [
      styles.text,
      !pressed && getVariantStyle(variant),
      !disabled && pressed && getPressedTextStyle(variant),
      disabled && getDisabledTextStyle(variant),
    ],
    [disabled, variant]
  );

  const textButtonStyle = useMemo(
    () => (pressed: boolean) => [custom, pressed && styles.pressed],
    [custom]
  );

  return (
    <Pressable disabled={disabled} {...rest}>
      {({ pressed }) => (
        <View style={textButtonStyle(pressed)}>
          <View style={startIcon ? styles.icon : undefined}>{startIcon}</View>
          {!isEmpty(label) && (
            <Typography size="buttons" style={labelStyle(pressed)}>
              {label}
            </Typography>
          )}
          <View style={endIcon ? styles.icon : undefined}>{endIcon}</View>
        </View>
      )}
    </Pressable>
  );
};

export default TextButton;
