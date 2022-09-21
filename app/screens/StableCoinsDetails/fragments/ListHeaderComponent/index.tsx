import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography, ValueLabel } from '@app/components';
import { translate } from '@app/i18n';
import { formatNumberToLocale } from '@app/utils/numbers';

import styles from './styles';

interface ListHeaderComponentProps {
  percentage: string;
  totalAmount: string;
}

const ListHeaderComponent: FC<ListHeaderComponentProps> = ({
  percentage,
  totalAmount,
}) => {
  const formatted = formatNumberToLocale(totalAmount);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.percentageContainer}>
        <Typography
          altLight="secondary.500"
          altDark="secondary.400"
          size="h0"
          style={styles.percentageText}
        >
          {`${percentage}%`}
        </Typography>
      </View>
      <View style={styles.infoContainer}>
        <Typography
          size="body2"
          variant="grey.600"
          style={styles.headerSubtitle}
        >
          {translate('screens.managedAssetsDetails.initialInvestment')}
        </Typography>
        <ValueLabel variant="normal" value={`$${formatted}`} />
      </View>
    </View>
  );
};

export default ListHeaderComponent;
