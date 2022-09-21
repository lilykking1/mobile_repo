import React, { FC, memo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { STACK_LIST_MARGIN_TOP } from '@app/screens/MarketWatch/constants';

interface ListHeaderProps {
  height: Animated.SharedValue<number> | number;
}

const ListHeader: FC<ListHeaderProps> = ({ height }) => {
  const style = useAnimatedStyle(() => ({
    height:
      typeof height === 'number'
        ? height + STACK_LIST_MARGIN_TOP
        : height.value + STACK_LIST_MARGIN_TOP,
  }));

  return <Animated.View style={style} />;
};

export default memo<typeof ListHeader>(ListHeader);
