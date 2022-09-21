import React from 'react';
import { View } from 'react-native';
import { Typography, Tabs } from '@app/components';
import styles from './styles';
import { TabsWithCoinLabelProps } from './types';

const TabsWithCoinLabel: React.FC<TabsWithCoinLabelProps> = ({
  altDark,
  selected,
  onChange,
  tabs,
  btcAmount,
  usdcAmount,
}) => (
  <View>
    <Tabs
      altDark={altDark}
      selected={selected}
      onChange={onChange}
      tabs={tabs}
    />
    <View style={styles.coinAmountConverted}>
      <View style={styles.labelStyle}>
        <Typography size="buttons" variant="grey.600">
          {btcAmount}
        </Typography>
      </View>
      <View style={styles.labelStyle}>
        <Typography size="buttons" variant="grey.600">
          {usdcAmount}
        </Typography>
      </View>
    </View>
  </View>
);

export default TabsWithCoinLabel;
