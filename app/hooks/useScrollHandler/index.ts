import { useDerivedValue, useSharedValue } from 'react-native-reanimated';

import { SharedValue, OnScroll } from './types';

/**
 * Create the handler for scrolling the slides by gestures.
 * @param  {number} width
 */
const useScrollHandler = (width: number): [SharedValue, OnScroll] => {
  // TODO: Define clock to automatically move to the next item and display the indicator progress
  const position = useSharedValue(0);

  // This function runs in a worklek and must be declared inside the hook
  const current = useDerivedValue(() => position.value / width);

  const onScroll = (event) => {
    const axis = event?.nativeEvent.contentOffset.x;
    position.value = axis;
  };

  return [current, onScroll];
};

export default useScrollHandler;
