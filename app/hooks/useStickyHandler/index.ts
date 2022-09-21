import { MutableRefObject, useCallback } from 'react';
import {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { throttle } from 'lodash';
import {
  STICKY_THROTTLE_DELAY,
  STICKY_HEADER_THRESHOLD,
} from '@app/components/StickyHeader/constants';

import {
  FlatList,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { snapPoint } from './utils';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useStickyHandler = (
  ref: MutableRefObject<FlatList> | undefined,
  stickyThreshold = STICKY_HEADER_THRESHOLD
) => {
  const scroll = useSharedValue(0);
  const headerHeight = useSharedValue(0);
  const bottomHeaderHeight = useSharedValue(0);

  // This function is called by HandleScrollWithFlatList to do the scroll programmatically using variables as the sticky threshold.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSnap = useCallback(
    throttle((offset?: number) => {
      if (offset !== undefined) {
        ref.current?.scrollToOffset({ offset });
      }
    }, STICKY_THROTTLE_DELAY),
    [ref]
  );

  // This function handle the scroll on flatList using an animated handler, which means that it runs in a different thread.
  // This function also uses the snapPoint it's a method that calculates the point to scroll using the scroll value and the threshold.
  // onScroll: This callback is called on user scroll
  // onMomentumEnd: It handles a situation when we release the scroll with a gesture that causes it to move afterward.
  // onEndDrag: It's called when we release the scroll.
  const handleScrollWithFlatList = useAnimatedScrollHandler({
    onScroll: (event) => {
      const offset = event.contentOffset.y;
      scroll.value = offset;
    },
    onMomentumEnd: () => {
      const offset = snapPoint(scroll.value, 0, stickyThreshold);
      runOnJS(handleSnap)(offset);
    },
    onEndDrag: ({ velocity }) => {
      const offset = snapPoint(scroll.value, velocity.y, stickyThreshold);
      runOnJS(handleSnap)(offset);
    },
  });

  const handleScrollWithScrollView = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offset = event.nativeEvent.contentOffset.y;
    scroll.value = offset;
  };

  const handleHeaderLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      headerHeight.value = nativeEvent.layout.height;
    },
    [headerHeight]
  );

  const handleBottomHeaderLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      bottomHeaderHeight.value = nativeEvent.layout.height;
    },
    [bottomHeaderHeight]
  );

  const forceScrollTop = () => {
    scroll.value = 0;
  };

  return {
    scroll,
    handleScrollWithFlatList,
    handleScrollWithScrollView,
    headerHeight,
    handleHeaderLayout,
    bottomHeaderHeight,
    handleBottomHeaderLayout,
    forceScrollTop,
  };
};

export default useStickyHandler;
