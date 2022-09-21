import React, { FC } from 'react';
import { View } from 'react-native';

import { CoinIcon, Icon, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import styles from './styles';
import AmountText from '../AmountText';
import { INTERROGATION_CHAR } from './constants';

interface CoinsRowProps {
  coinFrom: string;
  amountFrom: number;
  coinTo: string;
  amountTo: number;
}

const CoinsRow: FC<CoinsRowProps> = ({
  coinFrom,
  amountFrom,
  amountTo,
  coinTo,
}) => (
  <>
    <View style={styles.coinsContainer}>
      <CoinIcon coin={coinFrom} size={60} />

      <View style={styles.doubleArrowContainer}>
        <Icon.DoubleChevronRight width={16} tint={palette.grey[500]} />
      </View>
      <CoinIcon coin={coinTo} size={60} />
    </View>

    <Typography size="h4" style={styles.message}>
      {translate('swap.confirmations.simple.confirmationMessage')}
      <AmountText coin={coinFrom} amount={amountFrom} />
      {translate('swap.confirmations.simple.into')}
      <AmountText coin={coinTo} amount={amountTo} />
      {INTERROGATION_CHAR}
    </Typography>
  </>
);

export default CoinsRow;
