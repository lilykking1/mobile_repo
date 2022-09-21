import React, { FC } from 'react';

import { Typography } from '@app/components';

import { translate } from '@app/i18n';
import { getValue } from './utils';
import styles from './styles';

interface AmountTextProps {
  coins: Array<string>;
  amount?: number;
}

const AmountText: FC<AmountTextProps> = ({ coins, amount }) => (
  <>
    <Typography strong size="h4" style={styles.text}>
      {getValue(coins, amount)}
    </Typography>
    {coins.length > 1 && (
      <Typography size="h4" style={styles.text}>
        {translate('swap.inProgress.coins')}
      </Typography>
    )}
  </>
);
export default AmountText;
