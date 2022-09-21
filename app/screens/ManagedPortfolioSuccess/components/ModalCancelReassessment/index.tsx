import React, { FC, useCallback } from 'react';
import { Button, Typography } from '@app/components';
import ModalContainer from '@app/components/ModalContent';
import { Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { translate } from '@app/i18n';
import { getThePreviousRouteName } from '@app/utils/navigation';
import { useBraze } from '@app/hooks';
import { BrazeManagedPortfolioModificationEvents } from '@app/utils/braze/events';
import { AmplitudeManagedPortfolioEvents } from '@app/utils/amplitude/constants/managedPortfolio';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import styles from './styles';

interface ModalCancelReassessmentProps {
  visible: boolean;
  onRequestClose: () => void;
}

const ModalCancelReassessment: FC<ModalCancelReassessmentProps> = ({
  visible,
  onRequestClose,
}) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { logBrazeCustomEvent } = useBraze();

  const navigateToThePreviousScreen = useCallback(
    (previousRouteName: string) => {
      if (previousRouteName === 'Home') {
        navigation.navigate('DashboardScreen', undefined);
      } else {
        navigation.navigate('ManagedPortfolio');
      }
    },
    [navigation]
  );

  const handleOnConfirm = useCallback(() => {
    logAmplitudeEvent(
      AmplitudeManagedPortfolioEvents.CLICK_DISCARD_NEW_PORTFOLIO
    );
    logBrazeCustomEvent(
      BrazeManagedPortfolioModificationEvents.DISCARD_NEW_PORTFOLIO
    );

    onRequestClose();
    const previousRouteName = getThePreviousRouteName(navigation);
    navigateToThePreviousScreen(previousRouteName);
  }, [
    logBrazeCustomEvent,
    navigateToThePreviousScreen,
    navigation,
    onRequestClose,
  ]);

  return (
    <ModalContainer onRequestClose={onRequestClose} visible={visible}>
      <Typography style={styles.title} strong size="h6">
        {translate(
          'screens.managedPortfolioSuccess.modalCancelReassessment.title'
        )}
      </Typography>
      <Typography
        style={styles.subtitle}
        altLight="secondary.900"
        altDark="grey.600"
        size="body1"
      >
        {translate(
          'screens.managedPortfolioSuccess.modalCancelReassessment.subtitle'
        )}
      </Typography>
      <Button
        style={styles.button}
        onPress={handleOnConfirm}
        variant="red"
        label={translate(
          'screens.managedPortfolioSuccess.modalCancelReassessment.button.confirm'
        )}
      />
      <Button
        style={styles.button}
        onPress={onRequestClose}
        variant="secondary"
        label={translate(
          'screens.managedPortfolioSuccess.modalCancelReassessment.button.cancel'
        )}
      />
    </ModalContainer>
  );
};

export default ModalCancelReassessment;
