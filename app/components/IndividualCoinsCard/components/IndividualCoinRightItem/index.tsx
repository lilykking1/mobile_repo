import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Typography } from '@app/components';
import { formatNumberToLocale } from '@app/utils/numbers';

import styles from './styles';

interface IndividualCoinItemRightProps {
  percentage: string;
  fiatAmount: string;
}

const IndividualCoinItemRight: FC<IndividualCoinItemRightProps> = ({
  percentage,
  fiatAmount,
}) => {
  const formattedFiatAmount = useMemo(() => formatNumberToLocale(fiatAmount), [
    fiatAmount,
  ]);

  return (
    <View style={styles.rightItemContainer}>
      <Typography style={styles.percentageLabel} size="buttons" strong>
        {`${percentage}%`}
      </Typography>
      <Typography size="small" altLight="grey.600" altDark="grey.600" strong>
        {`$${formattedFiatAmount}`}
      </Typography>
    </View>
  );
};

export default IndividualCoinItemRight;
