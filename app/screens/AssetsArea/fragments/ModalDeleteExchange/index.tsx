import React, { FC } from 'react';
import { BottomSheetModalProps } from '@app/components/BottomSheetModal';
import { translate } from '@app/i18n';
import { Button, ModalContent, Typography } from '@app/components';

import styles from './styles';

interface ModalDeleteProps extends BottomSheetModalProps {
  onRequestClose: () => void;
  onConfirm: () => void;
  visible: boolean;
}

const ModalDeleteExchange: FC<ModalDeleteProps> = ({
  visible,
  onRequestClose,
  onConfirm,
}) => (
  <ModalContent visible={visible} onRequestClose={onRequestClose}>
    <Typography strong size="h6" style={styles.titleEdit}>
      {translate('modals.dotsActions.exchange.deleteTitle')}
    </Typography>
    <Typography variant="grey.600" size="body1" style={styles.subTitleEdit}>
      {translate('modals.dotsActions.exchange.deleteSubTitle')}
    </Typography>
    <Button
      style={styles.buttonSeparator}
      onPress={onConfirm}
      variant="red"
      label={translate('modals.dotsActions.exchange.btnConfirmDelete')}
    />
    <Button
      onPress={onRequestClose}
      variant="secondary"
      label={translate('modals.dotsActions.exchange.btnCancelDelete')}
    />
  </ModalContent>
);

export default ModalDeleteExchange;
