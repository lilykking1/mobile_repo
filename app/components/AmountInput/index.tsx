import React, {
  useRef,
  FC,
  useMemo,
  useContext,
  useState,
  useCallback,
} from 'react';
import { observer } from 'mobx-react';
import { TextInput, View, ViewStyle, TextInputProps } from 'react-native';

import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { Link } from '@app/components';
import { RootContext } from '@app/state';
import {
  getTextInputStyles,
  getAvailableConversionText,
  getIsAmountCharValid,
} from './utils';
import { styles } from './styles';

interface AmountInputProps extends TextInputProps {
  viewStyle?: ViewStyle;
  shouldShowMaxButton: boolean;
  fiatAmount?: number;
  coinAmount: number;
  coinSymbol: string;
  onMaxSelect?: () => void;
}

const AmountInput: FC<AmountInputProps> = ({
  viewStyle,
  onChangeText,
  value,
  placeholder,
  shouldShowMaxButton,
  fiatAmount,
  coinAmount,
  coinSymbol,
  onMaxSelect,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const inputRef = useRef<TextInput>();

  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputContainerStyle = useMemo(
    () => [styles.inputContainer, viewStyle],
    [viewStyle]
  );

  const avaliableAmountText = getAvailableConversionText(
    coinAmount,
    coinSymbol,
    fiatAmount
  );

  const textInputStyle = useMemo(
    () => [styles.textInput, getTextInputStyles(isInputFocused, theme)],
    [isInputFocused, theme]
  );

  const validateOnChangeAmount = useCallback(
    (amountChar) => {
      const isAmountCharValid = getIsAmountCharValid(amountChar);
      let inputAmountValue = amountChar;
      if (isAmountCharValid) {
        if (parseFloat(amountChar) > coinAmount) {
          inputAmountValue = coinAmount.toString();
        }
        onChangeText(inputAmountValue);
      }
    },
    [coinAmount, onChangeText]
  );

  const handleMaxPress = useCallback(() => {
    if (onMaxSelect === undefined) {
      const coinAmountToString = coinAmount.toString();
      const isAmountCharValid = getIsAmountCharValid(coinAmount);

      if (isAmountCharValid) {
        onChangeText(coinAmountToString);
      }
    } else {
      onMaxSelect();
    }
  }, [onChangeText, onMaxSelect, coinAmount]);

  return (
    <View style={styles.container}>
      <View style={inputContainerStyle}>
        <TextInput
          ref={inputRef}
          style={textInputStyle}
          onChangeText={validateOnChangeAmount}
          value={value}
          selectionColor={palette.royalBlue[500]}
          placeholder={placeholder}
          keyboardType="numeric"
          placeholderTextColor={palette.grey[500]}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          {...rest}
        />
      </View>

      <View style={styles.avaliableAmountContainer}>
        {avaliableAmountText}
        {shouldShowMaxButton && (
          <Link
            variant="primary"
            onPress={handleMaxPress}
            label={translate('screens.stackedWallet.simpleSwap.maxText')}
            style={styles.maxLink}
          />
        )}
      </View>
    </View>
  );
};

export default observer(AmountInput);
