import React, { FC, useEffect, useMemo } from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { interpolateOpacity, interpolateTranslateY } from './animations';
import { ANIMATION_Y_OFFSET } from './constants';
import styles from './styles';

interface AnimatedContainerProps extends ViewProps {
  showTooltip: boolean;
  style?: ViewStyle | ViewStyle[];
}

const AnimatedContainer: FC<AnimatedContainerProps> = ({
  showTooltip,
  style,
  children,
}) => {
  const opacity = useSharedValue(1);
  const yOffset = useSharedValue(1);

  useEffect(() => {
    if (showTooltip) {
      opacity.value = 1;
      yOffset.value = -ANIMATION_Y_OFFSET;
    } else {
      opacity.value = 0;
      yOffset.value = ANIMATION_Y_OFFSET;
    }
  }, [opacity, showTooltip, yOffset]);

  const tooltipStyleAnimated = useAnimatedStyle(() => ({
    opacity: interpolateOpacity(opacity),
    transform: [interpolateTranslateY(yOffset)],
  }));

  const containerStyle = useMemo(
    () => [styles.tooltipContainer, style, tooltipStyleAnimated],
    [style, tooltipStyleAnimated]
  );

  return (
    <Animated.View pointerEvents="none" style={containerStyle}>
      {children}
    </Animated.View>
  );
};

export default AnimatedContainer;
