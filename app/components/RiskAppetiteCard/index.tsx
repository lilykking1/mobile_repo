import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import {
  CandleStickBarChart,
  Card,
  RiskCard,
  Typography,
} from '@app/components';
import { isEmpty } from 'lodash';
import { RiskAverageCard } from './components';

import styles from './styles';

export interface RiskAppetiteCardValue {
  percentage: number;
  subtitle: string | number;
}

interface RiskAppetiteCardProps {
  leftTitle: string;
  rightTitle?: string;
  lossCard: RiskAppetiteCardValue;
  gainCard?: RiskAppetiteCardValue;
  subtitle?: string;
  risk: number;
  coloredBackground?: boolean;
  accrual?: boolean;
  precision?: number;
}

const RiskAppetiteCard: FC<RiskAppetiteCardProps> = ({
  leftTitle,
  rightTitle = '',
  lossCard,
  gainCard,
  subtitle = '',
  risk,
  coloredBackground = false,
  accrual = false,
  precision = 0,
}) => {
  const leftTextStyle = useMemo(
    () => ({
      paddingLeft: subtitle ? 8 : 0,
    }),
    [subtitle]
  );

  const RenderSubtitle = !isEmpty(subtitle) && (
    <Typography variant="grey.600" size="body1">
      {subtitle}
    </Typography>
  );

  const RenderRightTitle = !isEmpty(rightTitle) && (
    <Typography variant="grey.600" size="body2">
      {rightTitle}
    </Typography>
  );

  return (
    <Card>
      <View style={styles.top}>
        <Typography style={leftTextStyle} size="body1" strong>
          {leftTitle}
        </Typography>
        {RenderRightTitle}
      </View>

      {RenderSubtitle}

      <View style={styles.middle}>
        <RiskAverageCard
          percentage={lossCard.percentage}
          subtitle={lossCard.subtitle}
          accrual={accrual}
          coloredBackground={coloredBackground}
          precision={precision}
        />
        <RiskCard value={risk} size="small" />
        <RiskAverageCard
          percentage={gainCard.percentage}
          gain
          subtitle={gainCard.subtitle}
          accrual={accrual}
          coloredBackground={coloredBackground}
          precision={precision}
        />
      </View>
      <View style={styles.bottom}>
        <CandleStickBarChart
          style={styles.candleStickBarChart}
          high={gainCard.percentage}
          low={lossCard.percentage}
        />
      </View>
    </Card>
  );
};

export default RiskAppetiteCard;
