import React, { FC } from 'react';
import { View } from 'react-native';
import { Divider, Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

interface IndividualCoinsCardHeaderProps {
  assetLabel?: string;
  lendingLabel?: string;
  valuesAllocationLabel?: string;
}

const IndividualCoinsCardHeader: FC<IndividualCoinsCardHeaderProps> = ({
  assetLabel = translate('components.individualCoinsCard.assetLabel'),
  lendingLabel = translate('components.individualCoinsCard.lendingLabel'),
  valuesAllocationLabel = translate(
    'components.individualCoinsCard.valuesAllocationLabel'
  ),
}) => (
  <View style={styles.mainContainer}>
    <View style={styles.labelContainer}>
      <Typography
        altLight="grey.600"
        altDark="grey.600"
        size="small"
        style={styles.leftLabel}
      >
        {assetLabel}
      </Typography>
      <Typography
        altLight="grey.600"
        altDark="grey.600"
        size="small"
        style={styles.middleLabel}
      >
        {lendingLabel}
      </Typography>
      <Typography
        altLight="grey.600"
        altDark="grey.600"
        size="small"
        style={styles.rightLabel}
      >
        {valuesAllocationLabel}
      </Typography>
    </View>
    <Divider />
  </View>
);

export default IndividualCoinsCardHeader;
