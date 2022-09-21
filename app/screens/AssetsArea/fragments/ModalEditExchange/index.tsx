import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Modal } from '@app/modals';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalProps } from '@app/components/BottomSheetModal';
import { translate } from '@app/i18n';
import { Button } from '@app/components';
import TextInput from '@app/components/TextInput';

import styles from './styles';

interface ModalEditProps extends BottomSheetModalProps {
  onSaveAction: () => void;
  onChangeText: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value: string | string[];
}

const ModalEditExchange: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ModalEditProps
> = ({ value, onChangeText, onSaveAction }, ref) => (
  <Modal.ManagedButtonSheetActions
    title={translate('modals.dotsActions.exchange.editTitle')}
    ref={ref}
  >
    <TextInput
      useBottomSheet
      style={styles.customInputStyle}
      hintText={translate('modals.dotsActions.exchange.inputTitle')}
      value={value as string}
      onChange={onChangeText}
    />
    <Button
      style={styles.itemSeparator}
      onPress={onSaveAction}
      variant="primary"
      label={translate('modals.dotsActions.exchange.btnSave')}
    />
  </Modal.ManagedButtonSheetActions>
);

export default forwardRef(ModalEditExchange);
