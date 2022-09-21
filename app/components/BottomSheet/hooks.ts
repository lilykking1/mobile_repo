import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { clamp } from 'lodash';

const INITIAL_HANDLE_HEIGHT = -999;
const INITIAL_SNAP_POINT = -999;
const LIMIT = -170;
const { height } = Dimensions.get('window');

export const useBottomSheetDynamicSnapPoints = () => {
  const animatedHandleHeight = useSharedValue(0);
  const animatedContentHeight = useSharedValue(0);

  const animatedSnapPoints = useDerivedValue(() => {
    if (
      animatedHandleHeight.value === INITIAL_HANDLE_HEIGHT ||
      animatedContentHeight.value === 0
    ) {
      return [INITIAL_SNAP_POINT];
    }
    const contentWithHandleHeight =
      animatedContentHeight.value + animatedHandleHeight.value;

    return [contentWithHandleHeight];
  }, []);

  const handleContentLayout = useCallback(
    ({ nativeEvent: { layout } }) => {
      animatedContentHeight.value = clamp(layout.height, 0, height - LIMIT);
    },
    [animatedContentHeight]
  );

  return {
    animatedSnapPoints,
    animatedHandleHeight,
    animatedContentHeight,
    handleContentLayout,
  };
};
