import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import Animated from 'react-native-reanimated';
import { Indicator } from './components';
import { IndicatorsType, IndicatorVariant } from './components/Indicator/types';
import styles from './styles';

interface IndicatorsProps {
  total: number;
  current: Animated.SharedValue<number>;
  variant?: IndicatorVariant;
  type?: IndicatorsType;
}

const Indicators: FC<IndicatorsProps> = ({
  total,
  current,
  variant,
  type = IndicatorsType.PAINT_CURRENT_STEP,
}) => {
  const indicators = useMemo(() => {
    const mapper = (_, key) => (
      <Indicator
        type={type}
        variant={variant}
        key={key}
        index={key}
        current={current}
      />
    );

    return Array(total).fill(null).map(mapper);
  }, [total, type, variant, current]);

  return (
    <View style={styles.container}>
      <View style={styles.side} />
      <View style={styles.main}>{indicators}</View>
      <View style={styles.side} />
    </View>
  );
};

export default Indicators;
