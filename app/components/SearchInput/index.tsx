import React, { useRef, FC, useMemo, useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { TextInput, View, ViewStyle, TextInputProps } from 'react-native';

import { palette } from '@app/theme';
import { Icon } from '@app/components';
import { RootContext } from '@app/state';
import InputIcon from './components/InputIcon';
import { getContainerStyles, getTextInputStyles } from './utils';
import { styles } from './styles';

interface SearchInputProps extends TextInputProps {
  viewStyle?: ViewStyle;
}

const SearchInput: FC<SearchInputProps> = ({
  viewStyle,
  onChangeText,
  value,
  placeholder,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const inputRef = useRef<TextInput>();

  const [isInputFocused, setIsInputFocused] = useState(false);

  const containerStyle = useMemo(
    () => [
      styles.container,
      getContainerStyles(isInputFocused, theme),
      viewStyle,
    ],
    [isInputFocused, theme, viewStyle]
  );

  const textInputStyle = useMemo(
    () => [styles.textInput, getTextInputStyles(isInputFocused, theme)],
    [isInputFocused, theme]
  );

  return (
    <View style={containerStyle}>
      <View style={styles.iconContainer}>
        <Icon.Magnifier tint={palette.grey[600]} />
      </View>
      <TextInput
        ref={inputRef}
        style={textInputStyle}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={palette.grey[600]}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        {...rest}
      />
      <InputIcon
        isSearchTextPresent={!value.length}
        clearText={onChangeText}
        controlRef={inputRef}
      />
    </View>
  );
};

export default observer(SearchInput);
