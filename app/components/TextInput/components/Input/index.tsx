import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useMemo,
  useState,
} from 'react';
import { TextInput, View } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { isEmpty } from 'lodash';

import { Typography } from '@app/components';
import { Theme } from '@app/state/stores/settings/types';
import { PaletteColor } from '@app/theme';

import {
  getInputTextStyles,
  getPlaceholderColor,
  getSuffixVariant,
} from './utils';
import styles from './styles';
import { ComposedInput } from './types';

export type InputProps = ComposedInput<{
  active?: boolean;
  disabled?: boolean;
  value?: string;
  readonly?: boolean;
  suffix?: string;
  theme?: Theme;
  customTypographyColor?: PaletteColor;
}>;

const Input: ForwardRefRenderFunction<TextInput | any, InputProps> = (
  {
    active,
    disabled,
    readonly,
    suffix,
    value,
    useBottomSheet,
    onFocus,
    onEndEditing,
    theme,
    customTypographyColor,
    ...rest
  },
  ref
) => {
  const editable = !disabled && !readonly;

  const [isEditing, setIsEditing] = useState(false);

  const Component = useMemo(
    () => (useBottomSheet ? BottomSheetTextInput : TextInput),
    [useBottomSheet]
  );

  // styles for input component
  const customInputStyles = useMemo(() => {
    const customColor = customTypographyColor
      ? { color: customTypographyColor }
      : {};

    return [
      styles.input,
      getInputTextStyles(disabled, value, theme),
      customColor,
    ];
  }, [customTypographyColor, disabled, value, theme]);

  const placeholderColor = useMemo(
    () => getPlaceholderColor(theme, disabled, active),
    [theme, disabled, active]
  );

  const suffixView = useMemo(
    () =>
      !isEmpty(suffix) && (
        <View style={styles.suffix}>
          <Typography variant={getSuffixVariant(isEditing, theme)} size="body1">
            {` ${suffix}`}
          </Typography>
        </View>
      ),
    [isEditing, suffix, theme]
  );

  return (
    <View style={styles.container}>
      <Component
        ref={ref}
        value={value}
        style={customInputStyles}
        editable={editable}
        placeholderTextColor={placeholderColor}
        onFocus={(event) => {
          onFocus(event);
          setIsEditing(true);
        }}
        onEndEditing={(event) => {
          if (onEndEditing) {
            onEndEditing(event);
          }
          setIsEditing(false);
        }}
        {...rest}
      />
      {suffixView}
    </View>
  );
};

export default forwardRef(Input);
