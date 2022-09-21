import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import BottomSheetModal from '@app/components/BottomSheetModal';
import { Theme } from '@app/state/stores/settings/types';

import { Header, Message, ThemeCard } from './fragments';

interface ModalProps {
  handleSelectTheme: (chosenTheme: Theme) => void;
}

const ThemeSelection: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ModalProps
> = ({ handleSelectTheme }, ref) => {
  const handleSelect = useCallback((theme) => handleSelectTheme(theme), [
    handleSelectTheme,
  ]);

  return (
    <BottomSheetModal
      isActionMandatory
      snapToContent
      ref={ref}
      headerComponent={<Header />}
    >
      <ThemeCard theme="light" onChange={handleSelect} />
      <ThemeCard theme="dark" onChange={handleSelect} />

      <Message />
    </BottomSheetModal>
  );
};

export default forwardRef(ThemeSelection);
