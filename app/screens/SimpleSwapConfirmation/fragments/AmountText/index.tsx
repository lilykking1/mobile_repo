import React, { FC } from 'react';

import { Typography } from '@app/components';

import styles from './styles';

interface AmountTextProps {
  coin: string;
  amount: number;
}

const AmountText: FC<AmountTextProps> = ({ coin, amount }) => (
  <Typography strong size="h4" style={styles.text}>
    {`${amount} ${coin.toUpperCase()}`}
  </Typography>
);

export default AmountText;
