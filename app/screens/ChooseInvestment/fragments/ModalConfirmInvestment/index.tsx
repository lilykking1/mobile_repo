import React, { FC } from 'react';
import { BottomSheetModalProps } from '@app/components/BottomSheetModal';
import { translate } from '@app/i18n';
import { Button, ModalContent, Typography } from '@app/components';

import styles from './styles';

interface ModalConfirmInvestmentProps extends BottomSheetModalProps {
  onRequestClose: () => void;
  onConfirm: () => void;
  visible: boolean;
  depositValue: string;
}

const ModalConfirmInvestment: FC<ModalConfirmInvestmentProps> = ({
  visible,
  onRequestClose,
  onConfirm,
  depositValue,
}) => (
  <ModalContent
    visible={visible}
    onRequestClose={onRequestClose}
    style={styles.modalContent}
  >
    <Typography strong size="h6" style={styles.titleEdit}>
      {translate('screens.chooseInvestment.confirmInvestmentModal.title')}
    </Typography>
    <Typography
      altLight="secondary.900"
      altDark="grey.600"
      size="buttons"
      style={styles.subTitleEdit}
    >
      {translate(
        'screens.chooseInvestment.confirmInvestmentModal.description',
        {
          amountValue: depositValue,
        }
      )}
    </Typography>
    <Button
      style={styles.buttonSeparator}
      onPress={onConfirm}
      variant="green"
      label={translate('screens.chooseInvestment.confirmInvestmentModal.fund')}
    />
    <Button
      onPress={onRequestClose}
      variant="secondary"
      label={translate(
        'screens.chooseInvestment.confirmInvestmentModal.goBack'
      )}
    />
  </ModalContent>
);

export default ModalConfirmInvestment;
