import React, { FC, useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Typography, ExchangeIcon } from '@app/components';
import {
  EXCHANGE_TITLES,
  EXCHANGES,
  WALLET_TITLES,
  WALLETS,
} from '@app/models';
import { translate } from '@app/i18n';

import styles from './styles';

interface ExchangesListItemProps {
  item: string;
  quickConnect: boolean;
}

const ExchangesListItem: FC<ExchangesListItemProps> = ({
  item,
  quickConnect,
  ...rest
}) => {
  const stackedWallet = useMemo(() => item === 'StackedWallet', [item]);
  const icon = useMemo(() => WALLETS[item] || EXCHANGES[item], [item]);
  const exchangeText = useMemo(
    () => WALLET_TITLES[WALLETS[item]] || EXCHANGE_TITLES[EXCHANGES[item]],
    [item]
  );
  const rightText = useMemo(
    () => (
      <Typography size="small" style={styles.rightFlatListItemText}>
        {quickConnect && translate('components.quickConnect')}
        {stackedWallet && translate('components.makeDeposit')}
      </Typography>
    ),
    [quickConnect, stackedWallet]
  );

  return (
    <TouchableOpacity
      activeOpacity={0.65}
      {...rest}
      style={styles.flatListItemContainer}
    >
      <View style={styles.leftFlatListItemContainer}>
        <ExchangeIcon
          width={26}
          height={26}
          exchange={icon}
          style={styles.exchangeIcon}
        />
        <Typography size="body1" strong style={styles.exchangeText}>
          {exchangeText}
        </Typography>
      </View>
      {rightText}
    </TouchableOpacity>
  );
};

export default ExchangesListItem;
