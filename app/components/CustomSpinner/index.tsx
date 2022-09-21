import React, { FC, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  cancelAnimation,
} from 'react-native-reanimated';
import { isNumber } from 'lodash';

import { palette } from '@app/theme';
import { Icon } from '..';

import { interpolateRotation, startIconRotation } from './animations';
import { CustomSpinnerSizes } from './types';
import { getContainerStyles, getSize } from './utils';

interface CustomSpinnerProps {
  size?: CustomSpinnerSizes;
  color?: string;
  hasBox?: boolean;
}

const CustomSpinner: FC<CustomSpinnerProps> = ({
  color = palette.primary,
  size = 'large',
  hasBox = true,
}) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    startIconRotation(rotation);
    return () => cancelAnimation(rotation);
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: interpolateRotation(rotation),
    }),
    [rotation.value]
  );

  const spinnerSize = isNumber(size) ? size : getSize(size);

  const containerStyles = getContainerStyles(hasBox, spinnerSize);

  return (
    <Animated.View style={[containerStyles, animatedStyle]}>
      <Icon.Loading width={spinnerSize} height={spinnerSize} tint={color} />
    </Animated.View>
  );
};

export default CustomSpinner;
