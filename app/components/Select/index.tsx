import React, { FC } from 'react';
import { Icon, Typography } from '@app/components';
import {
  GestureResponderEvent,
  StyleProp,
  TextInputProps as NativeTextInput,
  View,
  ViewStyle,
} from 'react-native';
import TextInput from '@app/components/TextInput';
import { noop } from 'lodash';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../AllAssetsCard/styles';

export interface SelectProps extends NativeTextInput {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  value?: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  rightIconHidden?: boolean;
  isEditable?: boolean;
  showDollarLabel?: boolean;
  usesMask?: boolean;
  onChangeValue?: never;
  maskedValue?: string;
  addMask?: boolean;
  textInputDisabled?: boolean;
}

const Select: FC<SelectProps> = ({
  textInputDisabled,
  addMask,
  maskedValue,
  caretHidden,
  title,
  usesMask,
  value,
  onPress = noop,
  customContainerStyle,
  iconStyle,
  rightIconHidden,
  onFocus,
  isEditable,
  onChangeValue,
  placeholder,
  keyboardType,
  inputStyle,
  showDollarLabel,
  ...rest
}) => {
  const rightIcon = (
    <View style={iconStyle}>
      <Icon.ChevronDown />
    </View>
  );

  const label = (
    <Typography size="buttons" style={styles.absolute}>
      $
    </Typography>
  );

  const mask = (
    <Typography style={styles.maskedValue}>{maskedValue}</Typography>
  );

  const shouldShowMaskContainer = usesMask && styles.maskContainer;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={shouldShowMaskContainer}>
        {addMask ? mask : null}
        {showDollarLabel ? label : null}
        <TextInput
          disabled={textInputDisabled}
          caretHidden={caretHidden}
          style={inputStyle}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={onChangeValue as never}
          editable={!!isEditable}
          onFocus={onFocus}
          customContainerStyle={customContainerStyle}
          value={value}
          defaultValue={value}
          hintText={title}
          readonly
          rightIcon={rightIconHidden ? null : rightIcon}
          {...rest}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Select;
