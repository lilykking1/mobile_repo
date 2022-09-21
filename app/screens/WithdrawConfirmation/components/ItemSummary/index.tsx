import React, { FC } from 'react';
import { View } from 'react-native';
import { CoinIcon, Typography } from '@app/components';
import styles from './styles';

interface ItemSummaryProps {
  withIcon?: boolean;
  coin: string;
  leftText: string;
  rightText: string | number;
}

const ItemSummary: FC<ItemSummaryProps> = ({
  withIcon,
  coin,
  leftText,
  rightText,
}) => (
  <View style={styles.summaryItemContainer}>
    <View style={styles.leftTextContainer}>
      {withIcon && <CoinIcon coin={coin} size={16} />}
      <Typography
        variant="grey.600"
        size="body2"
        style={styles.withIconTextStyle}
      >
        {leftText}
      </Typography>
    </View>
    <Typography altDark="white">{rightText}</Typography>
  </View>
);
export default ItemSummary;
