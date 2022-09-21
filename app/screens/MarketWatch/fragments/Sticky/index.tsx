import React, { FC, memo } from 'react';
import { ViewProps } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { interpolateTranslate } from './animations';
import styles from './styles';

interface StickyProps extends ViewProps {
  scroll: Animated.SharedValue<number>;
}

const Sticky: FC<StickyProps> = ({ scroll, ...rest }) => {
  const style = useAnimatedStyle(() => ({
    transform: [interpolateTranslate(scroll)],
  }));

  return <Animated.View style={[styles.sticky, style]} {...rest} />;
};

export default memo<typeof Sticky>(Sticky);
