import React, { FC } from 'react';
import GorhomBottomSheet, {
  BottomSheetDraggableView,
} from '@gorhom/bottom-sheet';

import { useBottomSheetDynamicSnapPoints } from './hooks';
import styles from './styles';
import { BottomSheetKeyboardBehavior } from './types';

interface BottomSheetProps {
  keyboardBehavior?: BottomSheetKeyboardBehavior;
}

const BottomSheet: FC<BottomSheetProps> = ({
  children,
  keyboardBehavior = 'restore',
}) => {
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints();

  return (
    <GorhomBottomSheet
      keyboardBlurBehavior={keyboardBehavior}
      handleComponent={null}
      backdropComponent={null}
      backgroundStyle={styles.container}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
    >
      <BottomSheetDraggableView onLayout={handleContentLayout}>
        {children}
      </BottomSheetDraggableView>
    </GorhomBottomSheet>
  );
};

export default BottomSheet;
