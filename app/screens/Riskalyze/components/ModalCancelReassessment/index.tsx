import React, { FC } from 'react';
import { Typography, Button } from '@app/components';
import ModalContainer from '@app/components/ModalContent';
import { translate } from '@app/i18n';

import styles from './styles';

interface ModalCancelReassessmentProps {
  visible: boolean;
  onRequestClose: () => void;
  handleStopReAssessment: () => void;
}

const ModalCancelReassessment: FC<ModalCancelReassessmentProps> = ({
  visible,
  onRequestClose,
  handleStopReAssessment,
}) => (
  <ModalContainer onRequestClose={onRequestClose} visible={visible}>
    <Typography style={styles.title} strong size="h6">
      {translate('screens.riskalyze.reTakeAssessment.title')}
    </Typography>
    <Typography style={styles.subtitle} variant="grey.600" size="body1">
      {translate('screens.riskalyze.reTakeAssessment.subTitle')}
    </Typography>
    <Button
      style={styles.button}
      onPress={handleStopReAssessment}
      variant="red"
      label={translate(
        'screens.riskalyze.reTakeAssessment.actions.stopReAssessment'
      )}
    />
    <Button
      style={styles.button}
      onPress={onRequestClose}
      variant="secondary"
      label={translate('screens.riskalyze.reTakeAssessment.actions.cancel')}
    />
  </ModalContainer>
);

export default ModalCancelReassessment;
