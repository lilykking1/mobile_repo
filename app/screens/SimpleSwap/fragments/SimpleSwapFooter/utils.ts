import { translate } from '@app/i18n';
import styles from './styles';

export const getKeyboardOpenStyle = (keyboardOffset: number) => {
  if (keyboardOffset > 0) {
    return [styles.footer, { marginBottom: keyboardOffset * 0.7 }];
  }

  return styles.footer;
};

export const getIsSwapAvailable = (
  userValueSelected: number,
  fromCoinMaxValue: number,
  fromCoinName: string
) => {
  if (userValueSelected === 0) {
    return {
      isDisabled: true,
      buttonText: translate('screens.stackedWallet.simpleSwap.swapButtonText'),
      variant: 'primary',
    };
  }

  if (userValueSelected > fromCoinMaxValue) {
    const insufficientCoinAmountText = `${translate(
      'screens.stackedWallet.simpleSwap.insufficientBalance'
    )} ${fromCoinName} ${translate('screens.stackedWallet.simpleSwap.toSwap')}`;

    return {
      isDisabled: true,
      buttonText: insufficientCoinAmountText,
      variant: 'primary',
    };
  }

  return {
    isDisabled: false,
    buttonText: translate('screens.stackedWallet.simpleSwap.swapButtonText'),
    variant: 'green',
  };
};
