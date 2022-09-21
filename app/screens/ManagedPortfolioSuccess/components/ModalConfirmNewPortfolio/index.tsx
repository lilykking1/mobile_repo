import React, { FC, useCallback } from 'react';
import { Button, Typography } from '@app/components';
import ModalContainer from '@app/components/ModalContent';
import { translate } from '@app/i18n';

import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Routes } from '@app/navigation/types';
import { BrazeManagedPortfolioModificationEvents } from '@app/utils/braze/events';
import { useBraze } from '@app/hooks';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeManagedPortfolioEvents } from '@app/utils/amplitude/constants/managedPortfolio';
import styles from './styles';

interface ModalConfirmNewPortfolioProps {
  visible: boolean;
  onRequestClose: () => void;
  defaultRisk: number;
  newRisk: number;
}

const ModalConfirmNewPortfolio: FC<ModalConfirmNewPortfolioProps> = ({
  visible,
  onRequestClose,
  newRisk,
  defaultRisk,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { logBrazeCustomEvent } = useBraze();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('DashboardScreen', {
      newRealocatedPortfolio: {
        defaultRisk,
        newRisk,
      },
    });
  }, [defaultRisk, navigation, newRisk]);

  const handleOnConfirm = useCallback(() => {
    const logEventProperties = {
      from: defaultRisk.toString(),
      to: newRisk.toString(),
    };

    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_CONFIRM_NEW_PORTFOLIO,
      logEventProperties
    );
    logBrazeCustomEvent(
      BrazeManagedPortfolioModificationEvents.CONFIRM_NEW_PORTFOLIO,
      logEventProperties
    );

    onRequestClose();
    navigateToDashboard();
  }, [
    defaultRisk,
    logBrazeCustomEvent,
    navigateToDashboard,
    newRisk,
    onRequestClose,
  ]);

  return (
    <ModalContainer onRequestClose={onRequestClose} visible={visible}>
      <Typography style={styles.title} strong size="h6">
        {translate(
          'screens.managedPortfolioSuccess.modalConfirmNewPortfolio.title'
        )}
      </Typography>
      <Typography
        style={styles.subtitle}
        altLight="secondary.900"
        altDark="grey.600"
        size="body1"
      >
        {translate(
          'screens.managedPortfolioSuccess.modalConfirmNewPortfolio.subtitle.firstPartSubtitle'
        )}
        <Typography
          altLight="secondary.900"
          altDark="grey.600"
          size="body1"
          strong
        >
          {newRisk}
        </Typography>
        {translate(
          'screens.managedPortfolioSuccess.modalConfirmNewPortfolio.subtitle.secondPartSubtitle'
        )}
      </Typography>
      <Button
        style={styles.button}
        onPress={handleOnConfirm}
        variant="green"
        label={translate(
          'screens.managedPortfolioSuccess.modalConfirmNewPortfolio.button.confirm'
        )}
      />
      <Button
        style={styles.button}
        onPress={onRequestClose}
        variant="secondary"
        label={translate(
          'screens.managedPortfolioSuccess.modalConfirmNewPortfolio.button.cancel'
        )}
      />
    </ModalContainer>
  );
};

export default ModalConfirmNewPortfolio;
