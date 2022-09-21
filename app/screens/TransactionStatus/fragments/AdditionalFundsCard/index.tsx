import React, { FC } from 'react';
import { ViewProps } from 'react-native';
import { Background, Tabs, Typography } from '@app/components';
import { translate } from '@app/i18n';
import styles from './styles';
import { WalletAddressBox } from './fragments';
import { TABS_CONTAINER_DARK_COLOR, COINS_OPTIONS } from '../../constants';

interface AdditionalFundsCardProps extends ViewProps {
  selectedCoinId: string;
  selectedCoinWalletAddress: string;
  handleGenerateWalletAddress?: () => void;
  onChangeSelectedCoin: (id: string) => void;
}

const AdditionalFundsCard: FC<AdditionalFundsCardProps> = ({
  selectedCoinId,
  selectedCoinWalletAddress,
  handleGenerateWalletAddress,
  onChangeSelectedCoin,
}) => (
  <Background style={styles.container} secondary>
    <Typography style={styles.title} size="body1">
      {translate('screens.transactionStatus.additionalFunds')}
    </Typography>
    <Tabs
      altDark={TABS_CONTAINER_DARK_COLOR}
      selected={selectedCoinId}
      onChange={onChangeSelectedCoin}
      tabs={COINS_OPTIONS}
    />
    <WalletAddressBox
      address={selectedCoinWalletAddress}
      handleGenerateWalletAddress={handleGenerateWalletAddress}
    />
  </Background>
);

export default AdditionalFundsCard;
