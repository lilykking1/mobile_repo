import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { Modal } from '@app/modals';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import ListButton from '@app/components/ListButton';
import { BottomSheetModalProps } from '@app/components/BottomSheetModal';
import { Icon } from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { getTitleAction } from '../../utils';

interface ModalActionsProps extends BottomSheetModalProps {
  onEditAction: () => void;
  onDeleteAction: () => void;
  title: string | string[];
  disabled: boolean;
}

const ModalActions: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ModalActionsProps
> = ({ title, onEditAction, onDeleteAction, disabled }, ref) => (
  <Modal.ManagedButtonSheetActions title={getTitleAction(title)} ref={ref}>
    <ListButton
      Icon={() => <Icon.Edit />}
      title={translate('modals.dotsActions.exchange.edit')}
      action={onEditAction}
    />
    <ListButton
      Icon={() => <Icon.Close tint={palette.grey[600]} />}
      title={translate('modals.dotsActions.exchange.delete')}
      action={onDeleteAction}
      disabled={disabled}
      isLast
    />
  </Modal.ManagedButtonSheetActions>
);

export default forwardRef(ModalActions);
