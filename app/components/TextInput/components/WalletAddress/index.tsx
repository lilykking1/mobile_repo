import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import WAValidator from 'multicoin-address-validator';
import Clipboard from '@react-native-clipboard/clipboard';
import { Icon } from '@app/components';
import { translate } from '@app/i18n';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import EventEmitter from '@app/modals/QrCodeScanner/eventEmitter';
import TextInput, { TextInputProps } from '../../TextInput';
import { QR_CODE_EVENT_NAME } from './constants';

type WalletAddressProps = TextInputProps & {
  coinSymbol: string;
  handleHasError?: (hasError: boolean) => void;
};

const WalletAddress: ForwardRefRenderFunction<
  NativeTextInput,
  WalletAddressProps
> = ({ onChangeText, coinSymbol, error, handleHasError, ...rest }, ref) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [value, setValue] = useState('');
  const [validWallet, setValidWallet] = useState(true);
  const [touched, setTouched] = useState(false);

  const handleOnChangeText = (text: string) => {
    setValue(text);
    onChangeText(text);
    if (text.length === 0) {
      handleHasError(false);
      setValidWallet(false);
      return;
    }

    const isValid = WAValidator.validate(text, coinSymbol);
    handleHasError(!isValid);
    setValidWallet(isValid);
  };

  useEffect(() => {
    const handleSetQrCodeData = (data: string) => {
      handleOnChangeText(data);
    };

    EventEmitter.addListener(QR_CODE_EVENT_NAME, handleSetQrCodeData);

    return () => {
      EventEmitter.removeListener(QR_CODE_EVENT_NAME, handleSetQrCodeData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasError = useMemo(() => value.length > 0 && (error || !validWallet), [
    error,
    validWallet,
    value,
  ]);
  const helperText = useMemo(() => {
    if (hasError) {
      const formattedCoinSymbol = coinSymbol.toUpperCase();
      return translate(
        'components.walletAddressInput.errors.invalidWalletAddress',
        { coin: formattedCoinSymbol }
      );
    }
    return '';
  }, [hasError, coinSymbol]);

  const qrCodeIcon = <Icon.QrCode />;

  const handleOnRightIconPress = () => {
    navigation.navigate('QrCodeScanner', { eventName: QR_CODE_EVENT_NAME });
  };

  const handleOnActionTextPress = async () => {
    const copiedText = await Clipboard.getString();
    handleOnChangeText(copiedText);
  };

  const handleLostFocus = () => setTouched(false);
  const handleIsFocused = () => setTouched(true);

  return (
    <TextInput
      ref={ref}
      {...rest}
      onBlur={handleLostFocus}
      onFocus={handleIsFocused}
      touched={!touched}
      error={hasError}
      value={value}
      helperText={helperText}
      rightIcon={qrCodeIcon}
      actionText={translate('components.walletAddressInput.pasteAction')}
      onRightIconPress={handleOnRightIconPress}
      onActionTextPress={handleOnActionTextPress}
      onChangeText={handleOnChangeText}
    />
  );
};

export default forwardRef(WalletAddress);
