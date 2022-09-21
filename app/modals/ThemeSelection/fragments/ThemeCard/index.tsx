import React, { FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import {
  AccrualCard,
  CoinStack,
  LineChart,
  Quantity,
  Typography,
} from '@app/components';
import { Theme } from '@app/state/stores/settings/types';
import { palette } from '@app/theme';

import {
  SHADOW_DISTANCE,
  SHADOW_COLOR,
  SHADOW_OFFSET,
  COINS,
  CHART_DATA,
  TOTAL_AMOUNT,
  ACCRUAL_VALUE,
  PERCENTAGE_CHANGE,
  CHART_HEIGHT,
  CHART_WIDTH,
} from './constants';
import styles from './styles';
import { getStyles, getTitle } from './utils';

interface ThemeCardProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

const ThemeCard: FC<ThemeCardProps> = ({ theme, onChange }) => {
  const handlePress = useCallback(
    (chosenTheme: Theme) => {
      onChange(chosenTheme);
    },
    [onChange]
  );

  const cardStyles = getStyles(theme);
  const title = getTitle(theme);

  return (
    <Shadow
      distance={SHADOW_DISTANCE}
      startColor={SHADOW_COLOR}
      offset={SHADOW_OFFSET}
      viewStyle={styles.container}
    >
      <TouchableOpacity
        testID={`ThemeCard.${theme}`}
        style={cardStyles}
        activeOpacity={0.75}
        onPress={() => handlePress(theme)}
      >
        <View style={[styles.row, styles.bottomSpace]}>
          <Typography variant={title.variant} size="h6" strong>
            {title.text}
          </Typography>

          <Quantity
            prefix="$"
            value={TOTAL_AMOUNT}
            variant={title.variant}
            size="h6"
          />
        </View>

        <View style={styles.row}>
          <CoinStack.Filled size={24} coins={COINS} max={5} />

          <AccrualCard
            style={styles.accrualCard}
            value={ACCRUAL_VALUE}
            percentageChange={PERCENTAGE_CHANGE}
            precision={0}
          />
        </View>

        <LineChart
          width={CHART_WIDTH}
          chartHeight={CHART_HEIGHT}
          strokeColor={palette.royalBlue[500]}
          data={CHART_DATA}
          xKey="time"
          yKey="value"
          gradientColor={palette.royalBlue[500]}
          showGrid={false}
          showPeriodSelectButton={false}
          showXLabels={false}
        />
      </TouchableOpacity>
    </Shadow>
  );
};

export default ThemeCard;
