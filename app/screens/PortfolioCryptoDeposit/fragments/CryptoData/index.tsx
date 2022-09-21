import React, { FC, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';

import { Tabs } from '@app/components';

import { BITCOIN_CHAR, COINS_OPTIONS } from '../../contants';

import { CoinDataBox, WalletAddressBox } from './fragments';
import { TABS_CONTAINER_DARK_COLOR } from './contants';
import styles from './styles';
import {
  getCoinAmount,
  getCoinAmountPrefix,
  getContainerStyles,
  getShouldShowFiatAmount,
} from './utils';

interface CryptoDataProps {
  selectedCoinId: string;
  selectedCoinWalletAddress: string;
  initialInvestment: number;
  isFunding?: boolean;
  onChangeSelectedCoin: (id: string) => void;
  handlePressCopyButton: () => void;
  handleGenerateWalletAddress: () => void;
}

const CryptoData: FC<CryptoDataProps> = ({
  selectedCoinId,
  selectedCoinWalletAddress,
  initialInvestment,
  onChangeSelectedCoin,
  isFunding = true,
  handlePressCopyButton,
  handleGenerateWalletAddress,
}) => {
  const [coinAmountPrefix, setCoinAmountPrefix] = useState(BITCOIN_CHAR);

  useEffect(() => {
    const coinPrefix = getCoinAmountPrefix(selectedCoinId);
    setCoinAmountPrefix(coinPrefix);
  }, [selectedCoinId]);

  const coinAmount = useMemo(
    () => getCoinAmount(initialInvestment, selectedCoinId),
    [initialInvestment, selectedCoinId]
  );

  const showFiatAmount = getShouldShowFiatAmount(selectedCoinId);

  const containerStyles = getContainerStyles(isFunding);

  return (
    <View style={containerStyles}>
      <Tabs
        altDark={TABS_CONTAINER_DARK_COLOR}
        selected={selectedCoinId}
        onChange={onChangeSelectedCoin}
        tabs={COINS_OPTIONS}
      />

      <View style={styles.boxes}>
        <CoinDataBox
          initialInvestment={initialInvestment}
          coinAmount={coinAmount}
          coinAmountPrefix={coinAmountPrefix}
          showFiatAmount={showFiatAmount}
          showIconButton={!!selectedCoinWalletAddress}
          handlePressCopyButton={handlePressCopyButton}
        />

        <WalletAddressBox
          address={selectedCoinWalletAddress}
          handleGenerateWalletAddress={handleGenerateWalletAddress}
          isFunding={isFunding}
          handlePressCopyButton={handlePressCopyButton}
        />
      </View>
    </View>
  );
};

export default CryptoData;
