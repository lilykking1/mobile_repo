import React, { FC, memo, ReactElement } from 'react';
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

interface StickyHeaderTitleProps {
  scroll?: Animated.SharedValue<number>;
  titleFadingPosition?: number;
  titleStartFadeInPosition?: number;
  Title?: ReactElement;
  CollapsedTitle?: ReactElement;
}

const StickyHeaderTitle: FC<StickyHeaderTitleProps> = ({
  scroll,
  titleFadingPosition = STICKY_HEADER_THRESHOLD,
  titleStartFadeInPosition = STICKY_HEADER_START_FADING_POSITION,
  Title,
  CollapsedTitle,
}) => {
  const expandedTopTitleAnimated = useAnimatedStyle(() => ({
    opacity: scroll ? interpolateOpacity(scroll) : 1,
  }));

  const collapsedTopTitleAnimated = useAnimatedStyle(() => ({
    opacity: scroll
      ? interpolateOpacityInversed(
          scroll,
          titleFadingPosition,
          titleStartFadeInPosition
        )
      : 1,
  }));

  if (scroll) {
    if (Title && CollapsedTitle) {
      return (
        <>
          <Animated.View
            pointerEvents="none"
            style={[collapsedTopTitleAnimated, styles.headerTopTitle]}
          >
            {CollapsedTitle}
          </Animated.View>
          <Animated.View
            pointerEvents="none"
            style={[expandedTopTitleAnimated, styles.headerTopTitle]}
          >
            {Title}
          </Animated.View>
        </>
      );
    }
    if (CollapsedTitle) {
      return (
        <>
          <Animated.View
            pointerEvents="none"
            style={[collapsedTopTitleAnimated, styles.headerTopTitle]}
          >
            {CollapsedTitle}
          </Animated.View>
        </>
      );
    }
    if (Title) {
      return Title;
    }
    return null;
  }
  if (Title) {
    return Title;
  }
  return null;
};

export default memo<typeof StickyHeaderTitle>(StickyHeaderTitle);
