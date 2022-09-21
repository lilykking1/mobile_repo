import React, { FC } from 'react';
import { Typography, Button } from '@app/components';
import ModalContainer from '@app/components/ModalContent';
import { translate } from '@app/i18n';
import styles from './styles';

interface KycRequiredModalProps {
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const KycRequiredModal: FC<KycRequiredModalProps> = ({
  visible,
  onCancel,
  onSubmit,
}) => (
  <ModalContainer onRequestClose={onCancel} visible={visible}>
    <Typography style={styles.title} strong size="h6">
      {translate('modals.kycRequired.title')}
    </Typography>
    <Typography style={styles.subtitle} variant="grey.600" size="body1">
      {translate('modals.kycRequired.subtitle')}
    </Typography>
    <Button
      style={styles.button}
      onPress={onSubmit}
      variant="green"
      label={translate('modals.kycRequired.actions.submit')}
    />
    <Button
      style={styles.button}
      onPress={onCancel}
      variant="secondary"
      label={translate('modals.kycRequired.actions.cancel')}
    />
  </ModalContainer>
);

export default KycRequiredModal;
