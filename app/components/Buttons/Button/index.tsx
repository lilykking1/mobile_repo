import React, {
  FC,
  ReactNode,
  useMemo,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  TextStyle,
  View,
  ActivityIndicator,
} from 'react-native';
import { isEmpty } from 'lodash';
import { observer } from 'mobx-react';
import { TypographyVariant } from '@app/components/Typography/types';
import { Typography } from '@app/components';
import { RootContext } from '@app/state';
import { ButtonSize, ButtonVariant } from './types';
import styles from './styles';
import {
  getDisabledStyle,
  getDisabledTextStyle,
  getPressedStyle,
  getPressedTextStyle,
  getSizeStyle,
  getTextBaseStyle,
  getVariantStyle,
} from './utils';
import { TEMPORARY_VALUE_DISPLAY_TIME } from './constants';

let interval;

interface ButtonProps extends PressableProps {
  block?: boolean;
  disabled?: boolean;
  endIcon?: ReactNode;
  label?: string;
  labelCustomStyle?: TextStyle;
  startIcon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  textColor?: TypographyVariant;
  pressed?: boolean;
  pill?: boolean;
  useDefaultLineHeight?: boolean;
  isLoading?: boolean;
  useVariantDisabledColor?: boolean;
  temporaryValue?: string;
}
const Button: FC<ButtonProps> = ({
  block,
  disabled,
  endIcon,
  label,
  labelCustomStyle,
  size,
  startIcon,
  variant,
  pill,
  useDefaultLineHeight = true,
  useVariantDisabledColor = true,
  isLoading = false,
  style,
  temporaryValue = '',
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const [displayTemporaryValue, setDisplayTemporaryValue] = useState(false);
  const labelStyle = (pressed) => [
    getTextBaseStyle(useDefaultLineHeight, labelCustomStyle),
    !pressed && !disabled && getVariantStyle(variant, theme),
    !disabled && pressed && getPressedTextStyle(variant),
    disabled && getDisabledTextStyle(variant, useVariantDisabledColor, theme),
  ];
  const buttonStyle = useMemo(
    () => (state: PressableStateCallbackType): unknown => [
      styles.base,
      style,
      pill && styles.pill,
      getSizeStyle(size),
      getVariantStyle(variant, theme),
      block && styles.block,
      !disabled && state?.pressed && getPressedStyle(variant),
      disabled && getDisabledStyle(variant, useVariantDisabledColor, theme),
    ],
    [
      style,
      pill,
      size,
      variant,
      block,
      disabled,
      useVariantDisabledColor,
      theme,
    ]
  );

  useEffect(() => {
    const handleTemporaryValue = () => {
      if (temporaryValue && !disabled) {
        // Clears the past interval in case user press severals options in a short time
        clearInterval(interval);
        // Display the temporal value
        setDisplayTemporaryValue(true);
        // After the amount of time will hide the temporary value and will display the normal btn value
        interval = setInterval(() => {
          setDisplayTemporaryValue(false);
        }, TEMPORARY_VALUE_DISPLAY_TIME);
      }
    };

    handleTemporaryValue();
    return () => clearInterval(interval);
  }, [temporaryValue, disabled]);

  const Start = () => (
    <View style={startIcon ? styles.icon : undefined}>{startIcon}</View>
  );

  const Content = ({ pressed }) => {
    if (isLoading) {
      return (
        <View style={styles.extraSpace}>
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (!isEmpty(label)) {
      return (
        <Typography size="buttons" style={labelStyle(pressed)}>
          {displayTemporaryValue ? temporaryValue : label}
        </Typography>
      );
    }
    return null;
  };

  const End = () => (
    <View style={endIcon ? styles.icon : undefined}>{endIcon}</View>
  );

  return (
    <Pressable disabled={disabled} style={buttonStyle as unknown} {...rest}>
      {({ pressed }) => (
        <>
          <Start />
          <Content pressed={pressed} />
          <End />
        </>
      )}
    </Pressable>
  );
};
export default observer(Button);
