import React, { FC } from 'react';
import { View } from 'react-native';

import { Quantity, Typography } from '@app/components';

import { getPrecisionValue } from '../../utils';
import styles from './styles';

interface AssetsCenterItemProps {
  currentPercentage: number;
  currentValue: number;
}

const AssetsCenterItem: FC<AssetsCenterItemProps> = ({
  currentPercentage,
  currentValue,
}) => (
  <View style={styles.container}>
    <Typography strong size="body1">
      {`${currentPercentage}%`}
    </Typography>

    <Quantity
      value={currentValue}
      variant="grey.600"
      size="body2"
      strong={false}
      precision={getPrecisionValue(currentValue)}
    />
  </View>
);

export default AssetsCenterItem;
