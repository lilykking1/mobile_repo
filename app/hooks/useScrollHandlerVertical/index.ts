import { useDerivedValue, useSharedValue } from 'react-native-reanimated';

import { SharedValue, OnScroll } from './types';

const useScrollHandlerVertical = (height: number): [SharedValue, OnScroll] => {
  const position = useSharedValue(0);

  const current = useDerivedValue(() => position.value / height);

  const onScroll = (event) => {
    const axis = event?.nativeEvent.contentOffset.y;
    position.value = axis;
  };

  return [current, onScroll];
};

export default useScrollHandlerVertical;
