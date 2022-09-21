import React, { FC, useCallback, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { Typography, CryptoButton, AmountInput, Icon } from '@app/components';
import { WalletAddress } from '@app/components/TextInput/components';
import { translate } from '@app/i18n';

import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { Asset } from '@app/models';
import styles from './styles';
import {
  getArrowContainerStyle,
  getBorderStyle,
  IKeyboardOpenStyle,
} from '../../utils';

interface WithdrawContentProps {
  selectedCoin: Asset;
  userSelectedAmount: string | number;
  setUserSelectedAmount: (text: string | number) => void;
  walletAddress: string;
  setWalletAddress: (text: string) => void;
  handleOpenSelectCoinModal: () => void;
  hasWalletAddressError: boolean;
  handleHasWithdrawAddressError: (hasError: boolean) => void;
  keyboardOpenStyle: IKeyboardOpenStyle;
}

const WithdrawContent: FC<WithdrawContentProps> = ({
  selectedCoin,
  userSelectedAmount,
  setUserSelectedAmount,
  walletAddress,
  setWalletAddress,
  handleOpenSelectCoinModal,
  hasWalletAddressError,
  handleHasWithdrawAddressError,
  keyboardOpenStyle,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const arrowContainerStyle = getArrowContainerStyle(theme);

  const arrowDown = <Icon.ArrowDown tint={arrowContainerStyle.arrowTint} />;

  const withdrawContainerStyle = [
    styles.withdrawContainer,
    keyboardOpenStyle.withdrawContainer,
  ];
  const coinContainerStyle = [styles.coinContainer, getBorderStyle(theme)];

  const walletAddressContainerStyle = [
    styles.walletAddressContainer,
    keyboardOpenStyle.walletAddressContainer,
  ];

  const hintTextStyle = hasWalletAddressError
    ? styles.hintText
    : [styles.hintText, styles.hintTextMargin];

  const onMaxSelect = useCallback(() => {
    setUserSelectedAmount(Number(selectedCoin.coinAmount));
  }, [selectedCoin.coinAmount, setUserSelectedAmount]);

  const userSelectedFiatAmount = useMemo(
    () =>
      // TODO: it needs to calculate the user selected fiat amount
      '$ 203.03',
    []
  );

  return (
    <View style={withdrawContainerStyle}>
      <View style={coinContainerStyle}>
        <CryptoButton
          coin={selectedCoin.symbol}
          onPress={handleOpenSelectCoinModal}
        />
        <View style={styles.amountInputContainer}>
          <AmountInput
            value={userSelectedAmount.toString()}
            placeholder="0"
            onChangeText={(text) => setUserSelectedAmount(text)}
            fiatAmount={Number(selectedCoin.fiatAmount)}
            coinAmount={Number(selectedCoin.coinAmount)}
            coinSymbol={selectedCoin.symbol}
            shouldShowMaxButton
            onMaxSelect={onMaxSelect}
          />
        </View>
        {!!userSelectedAmount && (
          <Typography variant="grey.600" size="buttons">
            {userSelectedFiatAmount}
          </Typography>
        )}
        <View style={arrowContainerStyle.container}>{arrowDown}</View>
      </View>

      <WalletAddress
        customContainerStyle={walletAddressContainerStyle}
        placeholder={translate(
          'screens.stackedWallet.withdraw.walletAddressInputPlaceholder'
        )}
        hintText={translate(
          'screens.stackedWallet.withdraw.walletAddressInputPlaceholder'
        )}
        value={walletAddress}
        onChangeText={setWalletAddress}
        coinSymbol={selectedCoin.symbol}
        handleHasError={handleHasWithdrawAddressError}
      />
      <Typography style={hintTextStyle} variant="grey.600">
        {translate('screens.stackedWallet.withdraw.walletAddressMessage', {
          coin: selectedCoin.symbol,
        })}
      </Typography>
    </View>
  );
};

export default observer(WithdrawContent);
