import React, { FC, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { noop, upperCase } from 'lodash';

import { Card, CoinIcon, Quantity, Typography } from '@app/components';
import { formatCoinCurrency } from '@app/utils/numbers';

import styles from './styles';

interface CoinCardProps extends TouchableOpacityProps {
  coin: string;
  percentage: number;
  value: number;
}

const CoinCard: FC<CoinCardProps> = ({
  coin,
  percentage,
  style,
  value,
  onPress = noop,
}) => {
  const coinTitle = useMemo(() => upperCase(coin), [coin]);
  const cardStyle = useMemo(() => [styles.card, style], [style]);
  const formattedValue = useMemo(() => formatCoinCurrency(value), [value]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Card style={cardStyle}>
        <CoinIcon coin={coin} size={30} style={styles.coin} />
        <Typography strong size="body2" style={styles.coinTitle}>
          {coinTitle}
        </Typography>
        <Quantity strong size="body2" value={formattedValue} prefix="$" />
        <Quantity strong size="body2" value={percentage} suffix="%" accrual />
      </Card>
    </TouchableOpacity>
  );
};

export default CoinCard;
