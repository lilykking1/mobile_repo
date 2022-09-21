import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography, Quantity, Icon } from '@app/components';
import { palette } from '@app/theme';

import { getPrecisionValue } from '../../utils';
import styles from './styles';

interface AssetsRightItemProps {
  endPercentage: number;
  endValue: number;
}

const AssetsRightItem: FC<AssetsRightItemProps> = ({
  endPercentage,
  endValue,
}) => (
  <View style={styles.container}>
    <Icon.DoubleChevronRight tint={palette.grey[500]} />

    <View style={styles.valuesContainer}>
      <Typography strong size="body1">
        {`${endPercentage}%`}
      </Typography>

      <Quantity
        value={endValue}
        variant="grey.600"
        precision={getPrecisionValue(endValue)}
        size="body2"
        strong={false}
      />
    </View>
  </View>
);

export default AssetsRightItem;
