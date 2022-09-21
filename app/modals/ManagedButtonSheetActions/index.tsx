import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

import { View } from 'react-native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import Header from './fragments/Header';

import styles from './styles';

interface DotsActionsProps extends BottomSheetModalProps {
  children?: ReactNode;
  title: string | string[];
}

const ManagedButtonSheetActions: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  DotsActionsProps
> = ({ children, title }, ref) => (
  <BottomSheetModal
    contentStyle={styles.content}
    snapToContent
    ref={ref}
    headerComponent={<Header title={title} />}
  >
    {children}
    <View style={styles.separator} />
  </BottomSheetModal>
);

export default forwardRef(ManagedButtonSheetActions);
