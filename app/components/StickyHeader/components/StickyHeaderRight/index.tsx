import React, { FC, memo, ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import {
  interpolateOpacity,
  interpolateOpacityInversed,
} from '../../animations';
import {
  STICKY_HEADER_START_FADING_POSITION,
  STICKY_HEADER_THRESHOLD,
} from '../../constants';

import styles from './styles';

interface StickyHeaderRightProps {
  scroll?: Animated.SharedValue<number>;
  rightStartFadeInPosition?: number;
  rightFadingPosition?: number;
  Right?: ReactElement;
  CollapsedRight?: ReactElement;
  onPressRight?: () => void;
}

const StickyHeaderRight: FC<StickyHeaderRightProps> = ({
  scroll,
  rightFadingPosition = STICKY_HEADER_THRESHOLD,
  rightStartFadeInPosition = STICKY_HEADER_START_FADING_POSITION,
  Right,
  CollapsedRight,
  onPressRight,
}) => {
  const collapsedRightAnimated = useAnimatedStyle(() => ({
    opacity: scroll
      ? interpolateOpacityInversed(
          scroll,
          rightFadingPosition,
          rightStartFadeInPosition
        )
      : 1,
  }));

  const expandedRightAnimated = useAnimatedStyle(() => ({
    opacity: scroll ? interpolateOpacity(scroll) : 1,
  }));

  if (scroll) {
    if (Right && onPressRight) {
      return (
        <TouchableOpacity onPress={onPressRight}>{Right}</TouchableOpacity>
      );
    }
    if (Right && CollapsedRight) {
      return (
        <>
          <Animated.View
            pointerEvents="none"
            style={[expandedRightAnimated, styles.headerRight]}
          >
            {Right}
          </Animated.View>
          <Animated.View style={[collapsedRightAnimated, styles.headerRight]}>
            {CollapsedRight}
          </Animated.View>
        </>
      );
    }
    if (CollapsedRight) {
      return (
        <>
          <Animated.View style={[collapsedRightAnimated, styles.headerRight]}>
            {CollapsedRight}
          </Animated.View>
        </>
      );
    }
    if (Right) {
      return Right;
    }
    return null;
  }
  if (Right && onPressRight) {
    return <TouchableOpacity onPress={onPressRight}>{Right}</TouchableOpacity>;
  }
  if (Right) {
    return Right;
  }
  return null;
};

export default memo<typeof StickyHeaderRight>(StickyHeaderRight);
