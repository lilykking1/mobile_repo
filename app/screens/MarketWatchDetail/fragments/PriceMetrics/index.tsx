import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, Quantity, Divider } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';
import { priceMetrics } from '../../mock/data';

const PriceMetrics: FC = () => (
  <View>
    <View style={styles.title}>
      <Typography strong size="h6">
        {translate('coinDetail.priceMetrics.title')}
      </Typography>
    </View>
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.1hrLowHigh')}
        </Typography>
      </View>
      <View>
        <Typography strong>{priceMetrics.OnehrLowHigh}</Typography>
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.24hrLowHeight')}
        </Typography>
      </View>
      <View>
        <Typography strong>{priceMetrics.TFhrLowHigh}</Typography>
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.athUsd')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={priceMetrics.athUsd} accrual suffix="%" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.athDate')}
        </Typography>
      </View>
      <View>
        <Typography strong>{priceMetrics.athDate}</Typography>
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.cycleLowUsd')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={priceMetrics.cycleLowUsd} prefix="$" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.priceMetrics.cycleLowDate')}
        </Typography>
      </View>
      <View>
        <Typography strong>{priceMetrics.cycleLowDate}</Typography>
      </View>
    </View>
  </View>
);

export default PriceMetrics;
