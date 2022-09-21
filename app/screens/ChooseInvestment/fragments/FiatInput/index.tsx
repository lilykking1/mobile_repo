import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { observer } from 'mobx-react';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { Icon, Quantity, Typography } from '@app/components';
import { convertFiatAmountToBitcoin } from '@app/utils/coins';
import { formatNumberToLocale } from '@app/utils/numbers';
import {
  getTextInputStyles,
  checkIsAmountStringValid,
  formatFiatInputValue,
} from './utils';
import { styles } from './styles';
import { BITCOIN_CHAR } from './constants';
import { removeStringCommas } from '../../utils';

export interface FiatInputRefProps {
  bitcoinAmountValue: number;
}

interface FiatInputProps extends TextInputProps {
  viewStyle?: ViewStyle;
  error?: string;
}

const FiatInput: ForwardRefRenderFunction<FiatInputRefProps, FiatInputProps> = (
  { viewStyle, onChangeText, value, placeholder, error, ...rest },
  forwardedRef
) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const inputRef = useRef<TextInput>();

  const inputContainerStyle = useMemo(
    () => [styles.inputContainer, viewStyle],
    [viewStyle]
  );

  const textInputStyle = useMemo(
    () => [styles.textInput, getTextInputStyles(theme)],
    [theme]
  );

  const bitcoinAmountValue = useMemo(() => {
    const fiatAmountValue = Number(removeStringCommas(value));
    return convertFiatAmountToBitcoin(fiatAmountValue);
  }, [value]);

  const handleOnChangeAmount = useCallback(
    (amountText: string) => {
      const isAmountStringValid = checkIsAmountStringValid(amountText);
      if (isAmountStringValid) {
        const amountValueInteger = formatFiatInputValue(amountText);
        const formattedAmountValue = formatNumberToLocale(amountValueInteger);
        onChangeText(formattedAmountValue);
      }
    },
    [onChangeText]
  );

  const fiatInputFormattedValue = useMemo(() => `$${value}`, [value]);

  useImperativeHandle(forwardedRef, () => ({
    bitcoinAmountValue,
  }));

  return (
    <View style={styles.container}>
      <View style={inputContainerStyle}>
        <TextInput
          ref={inputRef}
          style={textInputStyle}
          onChangeText={handleOnChangeAmount}
          value={fiatInputFormattedValue}
          selectionColor={palette.royalBlue[500]}
          placeholder={placeholder}
          keyboardType="numeric"
          placeholderTextColor={palette.grey[500]}
          {...rest}
        />
      </View>

      <Quantity
        variant="grey.600"
        size="body1"
        prefix={`${BITCOIN_CHAR} `}
        precision={6}
        value={bitcoinAmountValue}
        strong={false}
      />

      {!!error && (
        <View style={styles.errorContainer}>
          <Icon.Attention tint={palette.red[500]} />
          <Typography variant="red" size="buttons" style={styles.errorText}>
            {error}
          </Typography>
        </View>
      )}
    </View>
  );
};

export default observer(forwardRef(FiatInput));
