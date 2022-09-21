import React, { FC } from 'react';
import { View } from 'react-native';
import { Typography, Quantity, Divider } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';
import { keyMetrics } from '../../mock/data';

const KeyMetrics: FC = () => (
  <View>
    <View style={styles.title}>
      <Typography strong size="h6">
        {translate('coinDetail.keyMetrics.title')}
      </Typography>
    </View>
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.price')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={keyMetrics.price} prefix="$" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.24hrChange')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={keyMetrics.hrChange} accrual suffix="%" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.24hrRealVol')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={keyMetrics.hrRealVol} accrual suffix="%" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.liquidMarketcap')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={keyMetrics.liquidMarketcap} prefix="$" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.liquidSupply')}
        </Typography>
      </View>
      <View>
        <Quantity strong value={keyMetrics.liquidSupply} prefix="$" />
      </View>
    </View>
    <Divider />
    <View style={styles.row}>
      <View>
        <Typography variant="grey.600">
          {translate('coinDetail.keyMetrics.maxSupply')}
        </Typography>
      </View>
      <View>
        <Quantity value={keyMetrics.maxSupply} />
      </View>
    </View>
  </View>
);

export default KeyMetrics;
