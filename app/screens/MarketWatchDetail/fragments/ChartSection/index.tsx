import React, { FC, useContext } from 'react';
import { Dimensions, View } from 'react-native';
import { observer } from 'mobx-react';

import { LineChart, Typography, ValueLabel } from '@app/components';
import { chartData } from '@app/screens/MarketWatchDetail/mock/data';
import { RootContext } from '@app/state';

import { CHART_HEIGHT, CHART_PADDING } from '../../constants';

import { getGradientColor, getLineColor } from './utils';
import styles from './styles';

const { width } = Dimensions.get('screen');

export interface ChartSectionProps {
  coinName: string;
  coinValue: string;
  coinMovementValue: number;
  coinMovementPercentage: string;
  periodLabel: string;
  onPressPeriodFilter: () => void;
}
const ChartSection: FC<ChartSectionProps> = ({
  coinName,
  coinValue,
  coinMovementValue,
  coinMovementPercentage,
  periodLabel,
  onPressPeriodFilter,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  return (
    <LineChart
      accrualValue={coinMovementValue}
      accrualPercentage={Number(coinMovementPercentage)}
      width={width}
      chartHeight={CHART_HEIGHT}
      strokeColor={getLineColor(theme)}
      data={chartData}
      xKey="time"
      yKey="value"
      padding={CHART_PADDING}
      gradientColor={getGradientColor(theme)}
      xLabelTransform={(label: string) => `${label}:00`}
      isSolidBackground
      onPressPeriodFilter={onPressPeriodFilter}
      periodLabel={periodLabel}
    >
      <View style={styles.containerValue}>
        <View style={styles.text}>
          <Typography strong size="h6">
            {coinName}
          </Typography>
        </View>

        <ValueLabel variant="large" value={coinValue} />
      </View>
    </LineChart>
  );
};

export default observer(ChartSection);
