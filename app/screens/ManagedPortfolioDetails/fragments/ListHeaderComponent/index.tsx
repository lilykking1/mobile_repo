import React, { FC, useMemo, useContext } from 'react';
import { View, Dimensions } from 'react-native';
import { observer } from 'mobx-react';
import dayjs from 'dayjs';

import { LineChart, Quantity, Typography } from '@app/components';
import { PaletteColor } from '@app/theme';
import { RootContext } from '@app/state';
import { generateDataArray } from '@app/mocks/Portfolio';

import styles from './styles';
import { Data } from './types';
import { getGradientColor } from './utils';

interface ListHeaderComponentProps {
  title: string;
  totalAmount: string;
  accrualPercentage: number;
  portfolioChange: number;
  lineColor: PaletteColor;
  onPressPeriodFilter: () => void;
  periodLabel: string;
}

const { width } = Dimensions.get('window');

const ListHeaderComponent: FC<ListHeaderComponentProps> = ({
  title,
  totalAmount,
  portfolioChange,
  accrualPercentage,
  lineColor,
  periodLabel,
  onPressPeriodFilter,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const gradientColor = useMemo(() => getGradientColor(theme), [theme]);
  const data: Data[] = generateDataArray(15);
  const formatLabel = (label: Date): string => dayjs(label).format('MM/DD');

  if (accrualPercentage) {
    return (
      <LineChart
        accrualValue={portfolioChange}
        accrualPercentage={accrualPercentage}
        width={width}
        chartHeight={100}
        strokeColor={lineColor}
        data={data}
        xKey="time"
        yKey="value"
        padding={30}
        gradientColor={gradientColor}
        xLabelTransform={formatLabel}
        isSolidBackground
        onPressPeriodFilter={onPressPeriodFilter}
        periodLabel={periodLabel}
      >
        <View style={styles.headerContainer}>
          <Typography size="body1" strong>
            {title}
          </Typography>
          <Quantity
            strong
            prefix="$"
            value={totalAmount}
            useValueLabel
            valueLabelVariant="large"
          />
        </View>
      </LineChart>
    );
  }
  return (
    <View style={styles.headerContainerMissingChart}>
      <Typography size="body1" strong>
        {title}
      </Typography>
      <Quantity
        strong
        prefix="$"
        value={totalAmount}
        useValueLabel
        valueLabelVariant="large"
      />
    </View>
  );
};

export default observer(ListHeaderComponent);
