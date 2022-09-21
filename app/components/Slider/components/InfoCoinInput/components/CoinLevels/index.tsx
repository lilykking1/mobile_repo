import React, { FC } from 'react';
import { View } from 'react-native';
import Typography from '@app/components/Typography';
import { formatNumberToLocale } from '@app/utils/numbers';
import styles from './styles';
import { getValueWithLimitedDecimal } from '../../utils';

interface CoinLevelsProps {
  minimumValue: number;
  maximumValue: number;
}

const CoinLevels: FC<CoinLevelsProps> = ({ minimumValue, maximumValue }) => {
  const formatValue = (value: number) =>
    formatNumberToLocale(getValueWithLimitedDecimal(value.toString(), 2));

  return (
    <View style={styles.levels}>
      <Typography altDark="grey.600" size="body2" numberOfLines={1}>
        {formatValue(minimumValue)}
      </Typography>
      <Typography altDark="grey.600" size="body2" numberOfLines={1}>
        {formatValue(maximumValue / 2)}
      </Typography>
      <Typography altDark="grey.600" size="body2" numberOfLines={1}>
        {formatValue(maximumValue)}
      </Typography>
    </View>
  );
};

export default CoinLevels;
