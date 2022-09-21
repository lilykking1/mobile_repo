import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Typography } from '@app/components';

import { translate } from '@app/i18n';
import styles from './styles';

interface TransactionAddressButtonProps {
  index: number;
  address: string;
  isAddressCopied: boolean;
  handleCopyAddress: (from: string, index: number) => void;
}

const TransactionAddressButton: FC<TransactionAddressButtonProps> = ({
  address,
  index,
  isAddressCopied,
  handleCopyAddress,
}) => (
  <TouchableOpacity
    onPress={() => handleCopyAddress(address, index)}
    style={styles.txAddressButton}
  >
    <Typography
      numberOfLines={1}
      ellipsizeMode="middle"
      altLight="secondary.500"
      altDark="secondary.400"
      size="body2"
    >
      {isAddressCopied
        ? translate('screens.managedPortfolio.transactions.copied')
        : address}
    </Typography>
  </TouchableOpacity>
);

export default TransactionAddressButton;
