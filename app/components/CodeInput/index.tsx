/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useState } from 'react';
import { View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { Typography } from '@app/components';
import { TypographyVariant } from '../Typography/types';

import styles from './styles';

interface CodeInputProps {
  cellCount: number;
  onSubmit: (text: string) => void;
  variant?: TypographyVariant;
}

const CodeInput: FC<CodeInputProps> = ({
  cellCount,
  onSubmit,
  variant = 'main.500',
}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onFulfill = (text) => {
    setValue(text);

    if (text && text.length === cellCount) {
      onSubmit(text);
    }
  };

  const renderCell = ({ index, symbol, isFocused }) => (
    <View
      key={`${index}-${symbol}`}
      style={[styles.cell, isFocused && styles.focusCell]}
    >
      <Typography
        size="h1"
        variant={variant}
        strong
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </Typography>
    </View>
  );

  return (
    <CodeField
      ref={ref}
      {...props}
      caretHidden={false}
      value={value}
      onChangeText={onFulfill}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={renderCell}
    />
  );
};

export default CodeInput;
