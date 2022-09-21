import React, { FC, useCallback, useMemo, useState } from 'react';
import { TouchableOpacity, View, LayoutChangeEvent } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { isEmpty } from 'lodash';

import {
  Quantity,
  Typography,
  Card,
  AccrualCard,
  LineChart,
} from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import CryptoValueLabel from '@app/components/CryptoValueLabel';
import { Routes } from '@app/navigation/types';

import styles from './styles';
import { OPACITY_ON_PRESS_VALUE } from './constants';

export interface PopulatedProps {
  value: number | string;
  isValuesSecret: boolean;
  isValuesInBitcoin: boolean;
  prefixValues?: string;
  suffixValues?: string;
  accrualValue?: number;
  accrualChange?: number;
  chartData?: any[];
}

const Populated: FC<PopulatedProps> = ({
  value,
  isValuesSecret,
  isValuesInBitcoin,
  chartData = [],
  prefixValues,
  suffixValues,
  accrualValue,
  accrualChange,
}) => {
  const [charWidth, setChartWidth] = useState<number>(0);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleOpenManagedPortfolio = useCallback(() => {
    navigation.navigate('ManagedPortfolio');
  }, [navigation]);

  const chart = isEmpty(chartData) ? (
    <Typography size="h4" variant="grey.500">
      No Chart Data
    </Typography>
  ) : (
    <LineChart
      width={charWidth}
      chartHeight={74}
      strokeColor={palette.royalBlue[500]}
      data={chartData}
      xKey="time"
      yKey="value"
      gradientColor={palette.royalBlue[500]}
      showGrid={false}
      showPeriodSelectButton={false}
      showXLabels={false}
    />
  );

  const valueDisplayed = useMemo(() => {
    if (isValuesInBitcoin) {
      return (
        <CryptoValueLabel
          isSecret={isValuesSecret}
          value={value}
          variant="normal"
          coinSuffix={suffixValues}
        />
      );
    }

    return (
      <Quantity
        prefix={prefixValues}
        suffix={suffixValues}
        value={value}
        isSecret={isValuesSecret}
        useValueLabel
        valueLabelVariant="normal"
      />
    );
  }, [isValuesInBitcoin, isValuesSecret, prefixValues, suffixValues, value]);

  const onChartContainerLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setChartWidth(width);
  };

  return (
    <Card usePadding={false} size="large" style={styles.container}>
      <TouchableOpacity
        activeOpacity={OPACITY_ON_PRESS_VALUE}
        onPress={handleOpenManagedPortfolio}
      >
        <View style={[styles.row, styles.paddings]}>
          <Typography strong style={styles.title} size="h6">
            {translate('screens.dashboard.cards.managedPortfolio.title')}
          </Typography>

          <View style={styles.valuesContainer}>
            {valueDisplayed}

            {accrualValue && (
              <AccrualCard
                style={styles.accrualCard}
                value={accrualValue}
                isSecret={isValuesSecret}
                percentageChange={accrualChange?.toString()}
                precision={0}
              />
            )}
          </View>
        </View>

        <View onLayout={onChartContainerLayout}>{chart}</View>
      </TouchableOpacity>
    </Card>
  );
};

export default Populated;
