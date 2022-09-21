import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { Quantity, Typography, CoinStack, AccrualCard } from '@app/components';
import { COINS } from '@app/models';

import { getUnderLineColor } from './utils';
import styles from './styles';

export interface PopulatedProps {
  value: number | string;
  prefixValues?: string;
  suffixValues?: string;
  accrualValue?: number;
  accrualChange?: number;
  coins?: COINS[];
  title: string;
  accrualPrefixValue?: string;
  isLastItem?: boolean;
}

const PortfolioChangeCard: FC<PopulatedProps> = ({
  value,
  prefixValues,
  suffixValues,
  accrualValue,
  accrualChange,
  coins,
  title,
  accrualPrefixValue,
  isLastItem = false,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const containerStyle = useMemo(
    () => [
      styles.container,
      getUnderLineColor(theme),
      isLastItem && styles.withoutSeparator,
    ],
    [isLastItem, theme]
  );

  return (
    <View style={containerStyle}>
      <View style={[styles.row, styles.bottomSpace]}>
        <Typography strong style={styles.title} size="h6">
          {title}
        </Typography>

        <Quantity
          prefix={prefixValues}
          suffix={suffixValues}
          value={value}
          useValueLabel
          valueLabelVariant="normal"
        />
      </View>

      <View style={styles.row}>
        <CoinStack.Filled size={24} coins={coins} max={5} />

        {accrualValue && (
          <AccrualCard
            style={styles.accrualCard}
            value={accrualValue}
            accrualPrefixValue={accrualPrefixValue}
            percentageChange={accrualChange?.toString()}
            precision={0}
          />
        )}
      </View>
    </View>
  );
};

export default observer(PortfolioChangeCard);
