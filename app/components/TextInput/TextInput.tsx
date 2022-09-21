import React, {
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  useCallback,
  useMemo,
  useState,
  useContext,
} from 'react';

import {
  StyleProp,
  TextInput as NativeTextInput,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { isEmpty, noop } from 'lodash';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { useProxyRef } from '@app/utils/hooks';
import { IconProps } from '@app/components/Icon/types';
import { PaletteColor } from '@app/theme';

import {
  Icon,
  Input,
  InputProps,
  OuterWrapper,
  InputAction,
  Hint,
} from './components/index';
import { FocusEventHandler } from './types';
import { getContainerStyles } from './utils';
import styles from './styles';

export type TextInputProps = InputProps & {
  label?: string;
  icon?: ReactElement<IconProps>;
  rightIcon?: ReactElement<IconProps>;
  actionText?: string;
  hintText?: string;
  outline?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  touched?: boolean;
  useBottomSheet?: boolean;
  helperText?: string;
  error?: boolean;
  outerWrapperHasAllWidth?: boolean;
  onActionTextPress?: () => void;
  onRightIconPress?: () => void;
  onIconPress?: () => void;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  customContainerStyle?: StyleProp<ViewStyle>;
  customIconLeftTint?: PaletteColor;
  customIconRightTint?: PaletteColor;
};

const TextInput: ForwardRefRenderFunction<NativeTextInput, TextInputProps> = (
  {
    label,
    icon,
    rightIcon,
    actionText,
    hintText,
    disabled,
    readonly,
    useBottomSheet,
    touched,
    helperText,
    error,
    onActionTextPress = noop,
    onRightIconPress = noop,
    onIconPress = noop,
    onBlur = noop,
    onFocus = noop,
    value,
    customContainerStyle,
    customIconLeftTint,
    customIconRightTint,
    customTypographyColor,
    outerWrapperHasAllWidth = true,
    ...rest
  },
  ref
) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  // Define the active status for the styles
  const [active, setActive] = useState(false);

  // Proxy the ref defined in the parent, allowing to
  // still use the same ref for manipulating events
  const inputRef = useProxyRef<NativeTextInput>(ref);

  // styles for container component
  const containerStyles = useMemo(
    () => [
      styles.container,
      getContainerStyles(active, touched, error, value, theme),
      customContainerStyle,
    ],
    [value, active, touched, error, theme, customContainerStyle]
  );

  // Handle the press event on the container
  // for delegate the focus to the input field
  const handlePress = useCallback(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled, inputRef]);

  // Handle the blur event for syncing the active state
  const handleBlur = useCallback<FocusEventHandler>(
    (event) => {
      onBlur(event);
      setActive(false);
    },
    [onBlur]
  );

  // Handle the focus event for syncing the active state
  const handleFocus = useCallback<FocusEventHandler>(
    (event) => {
      if (!readonly && !disabled) {
        setActive(true);
        onFocus(event);
      }
    },
    [disabled, onFocus, readonly]
  );

  let pre = null;
  let post = null;

  if (icon) {
    pre = (
      <Icon
        customIconTint={customIconLeftTint}
        icon={icon}
        left
        disabled={disabled}
        active={active}
        isFilled={!isEmpty(value)}
        theme={theme}
        onPress={onIconPress}
      />
    );
  }

  if (rightIcon) {
    post = (
      <Icon
        customIconTint={customIconRightTint}
        icon={rightIcon}
        right
        disabled={disabled}
        active={active}
        isFilled={!isEmpty(value)}
        theme={theme}
        onPress={onRightIconPress}
      />
    );
  }

  const action = useMemo(() => {
    if (actionText) {
      return (
        <InputAction
          disabled={disabled}
          active={active}
          actionText={actionText}
          isFilled={!isEmpty(value)}
          onPress={onActionTextPress}
          theme={theme}
        />
      );
    }
    return null;
  }, [active, actionText, disabled, value, theme, onActionTextPress]);

  const input = (
    <Input
      active={active}
      useBottomSheet={useBottomSheet}
      ref={inputRef}
      onBlur={handleBlur}
      onFocus={handleFocus}
      disabled={disabled}
      readonly={readonly}
      theme={theme}
      value={value}
      customTypographyColor={customTypographyColor}
      {...rest}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <OuterWrapper
        disabled={disabled}
        active={active}
        value={value}
        touched={touched}
        error={error}
        label={label}
        helperText={helperText}
        theme={theme}
        onPress={handlePress}
        hasAllWidth={outerWrapperHasAllWidth}
      >
        <View style={containerStyles}>
          {!isEmpty(hintText) && (
            <Hint
              active={active}
              text={hintText}
              value={value}
              touched={touched}
              disabled={disabled}
              error={error}
              theme={theme}
            />
          )}
          {pre}
          {input}
          {action}
          {post}
        </View>
      </OuterWrapper>
    </TouchableWithoutFeedback>
  );
};

export default observer(forwardRef(TextInput));
