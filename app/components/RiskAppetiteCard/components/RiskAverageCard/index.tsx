import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { Card, Quantity, Typography } from '@app/components';
import { TypographyVariant } from '@app/components/Typography/types';
import {
  formatNumberSubtitle,
  getTextBackgroundColor,
  getTextPaddingVertical,
} from './utils';
import {
  SHADOW_COLOR_WITH_ALPHA,
  SHADOW_DISTANCE,
  SHADOW_OFFSET_X,
  SHADOW_OFFSET_Y,
} from './constants';

import styles from './styles';

interface RiskAverageCardProps {
  gain?: boolean;
  percentage: number;
  subtitle: string | number;
  coloredBackground?: boolean;
  accrual?: boolean;
  precision?: number;
}

const RiskAverageCard: FC<RiskAverageCardProps> = ({
  gain = false,
  percentage,
  subtitle,
  coloredBackground = false,
  accrual = false,
  precision = 0,
}) => {
  const percentageVariant = useMemo(
    (): TypographyVariant => (gain ? 'green.500' : 'red'),
    [gain]
  );

  const containerTextStyle = useMemo(
    () => ({
      ...styles.containerText,
      backgroundColor: getTextBackgroundColor(coloredBackground, gain),
      paddingVertical: getTextPaddingVertical(coloredBackground),
    }),
    [coloredBackground, gain]
  );

  const RenderSubtitle = () =>
    typeof subtitle === 'number' ? (
      <Typography strong style={styles.subtitle} size="body2">
        {formatNumberSubtitle(subtitle, gain)}
      </Typography>
    ) : (
      <Typography style={styles.subtitle} size="small">
        {subtitle}
      </Typography>
    );

  return (
    <Shadow
      distance={SHADOW_DISTANCE}
      startColor={SHADOW_COLOR_WITH_ALPHA}
      offset={[SHADOW_OFFSET_X, SHADOW_OFFSET_Y]}
    >
      <View style={styles.riskAvgCardContainer}>
        <Card style={styles.riskAvgCard}>
          <View style={containerTextStyle}>
            <Quantity
              variant={percentageVariant}
              size="buttons"
              value={percentage}
              suffix="%"
              precision={precision}
              style={styles.percentage}
              loss={accrual && !gain}
              profit={accrual && gain}
            />
          </View>
          {RenderSubtitle()}
        </Card>
      </View>
    </Shadow>
  );
};

export default RiskAverageCard;
