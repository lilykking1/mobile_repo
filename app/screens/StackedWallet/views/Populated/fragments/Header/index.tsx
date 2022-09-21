import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { translate } from '@app/i18n';
import { Background, Quantity, Typography } from '@app/components';
import CryptoValueLabel from '@app/components/CryptoValueLabel';

import { useWallet } from '@app/hooks';
import ButtonWithOutsideLabel from './components/ButtonWithOutsideLabel';
import { depositIcon, swapIcon, withdrawIcon } from './icons';
import styles from './styles';

interface HeaderProps {
  isValuesInBitcoin: boolean;
  isValuesSecret: boolean;
  suffixValue?: string;
  prefixValue?: string;
  handlePressDeposit: () => void;
  handlePressSwap: () => void;
  handlePressWithdraw: () => void;
}

const Header: FC<HeaderProps> = ({
  isValuesInBitcoin,
  isValuesSecret,
  suffixValue,
  prefixValue,
  handlePressDeposit,
  handlePressSwap,
  handlePressWithdraw,
}) => {
  const { wallet } = useWallet();
  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={wallet.totalInvested}
          variant="large"
          coinSuffix={suffixValue}
        />
      );
    }

    return (
      <Quantity
        isSecret={isValuesSecret}
        strong
        useValueLabel
        valueLabelVariant="large"
        prefix={prefixValue}
        suffix={suffixValue}
        value={wallet.totalInvested}
      />
    );
  }, [
    isValuesInBitcoin,
    isValuesSecret,
    prefixValue,
    suffixValue,
    wallet.totalInvested,
  ]);

  return (
    <Background secondary style={styles.spacing}>
      <View style={styles.valueContainer}>
        <Typography size="h6" strong style={styles.walleText}>
          {translate('screens.stackedWallet.populated.walletBalance')}
        </Typography>

        {valueDisplayed}
      </View>

      <View style={styles.actionsContainer}>
        <ButtonWithOutsideLabel
          icon={withdrawIcon}
          label={translate('screens.stackedWallet.populated.actions.withdraw')}
          onPress={handlePressWithdraw}
        />

        <ButtonWithOutsideLabel
          icon={depositIcon}
          label={translate('screens.stackedWallet.populated.actions.deposit')}
          onPress={handlePressDeposit}
        />

        <ButtonWithOutsideLabel
          icon={swapIcon}
          label={translate('screens.stackedWallet.populated.actions.swap')}
          onPress={handlePressSwap}
        />
      </View>
    </Background>
  );
};

export default Header;
