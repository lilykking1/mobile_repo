import React, { FC, useCallback } from 'react';
import { Typography, Button } from '@app/components';
import ModalContainer from '@app/components/ModalContent';
import { Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { translate } from '@app/i18n';

import styles from './styles';

interface ModalExitConfirmationProps {
  visible: boolean;
  onRequestClose: () => void;
}

const ModalExitConfirmation: FC<ModalExitConfirmationProps> = ({
  visible,
  onRequestClose,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleOnConfirm = useCallback(() => {
    onRequestClose();
    navigation.navigate('DashboardScreen');
  }, [navigation, onRequestClose]);

  return (
    <ModalContainer onRequestClose={onRequestClose} visible={visible}>
      <Typography style={styles.title} strong size="h6">
        {translate(
          'screens.managedPortfolioSuccess.modalExitConfirmation.title'
        )}
      </Typography>
      <Typography style={styles.subtitle} variant="grey.600" size="body1">
        {translate(
          'screens.managedPortfolioSuccess.modalExitConfirmation.subtitle'
        )}
      </Typography>
      <Button
        style={styles.button}
        onPress={handleOnConfirm}
        variant="primary"
        label={translate(
          'screens.managedPortfolioSuccess.modalExitConfirmation.button.confirm'
        )}
      />
      <Button
        style={styles.button}
        onPress={onRequestClose}
        variant="secondary"
        label={translate(
          'screens.managedPortfolioSuccess.modalExitConfirmation.button.cancel'
        )}
      />
    </ModalContainer>
  );
};

export default ModalExitConfirmation;
