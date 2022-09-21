import React, { FC, useMemo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { IndicatorsType, IndicatorVariant } from './types';
import { getIndicatorStyle } from './utils';
import { getBackgroundColorFromType } from './animations';

interface IndicatorProps {
  index: number;
  variant: IndicatorVariant;
  current: Animated.SharedValue<number>;
  type?: IndicatorsType;
}

const Indicator: FC<IndicatorProps> = ({
  index,
  current,
  variant = IndicatorVariant.REGULAR,
  type = IndicatorsType.PAINT_CURRENT_STEP,
}) => {
  const animations = useAnimatedStyle(() => ({
    backgroundColor: getBackgroundColorFromType(type, index, current.value),
  }));

  const dotsStyle = useMemo(() => getIndicatorStyle(variant), [variant]);

  return <Animated.View style={[dotsStyle, animations]} />;
};

export default Indicator;
