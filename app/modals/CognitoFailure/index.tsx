import React, { FC, useEffect } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { translate } from '@app/i18n';
import ErrorModal from '@app/modals/ErrorModal';
import { Routes } from '@app/navigation/types';
import { useBraze } from '@app/hooks';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import { AmplitudeKycEvents, logAmplitudeEvent } from '@app/utils/amplitude';

type CognitoFailureProps = NativeStackNavigationProp<Routes, 'CognitoFailure'>;

const CognitoFailure: FC<CognitoFailureProps> = () => {
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();

  const navigateToCustomerService = () => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.CLICK_IDENTITY_FAILURE_CUSTOMER_SERVICE
    );
    logAmplitudeEvent(
      AmplitudeKycEvents.CLICK_VERIFICATION_FAILURE_CUSTOMER_SERVICE
    );
    navigation.navigate('CustomerService');
  };

  useEffect(() => {
    logBrazeCustomEvent(
      BrazeBuildMyPortfolioEvents.NAVIGATION_IDENTITY_VERIFICATION_FAILURE
    );
    logAmplitudeEvent(AmplitudeKycEvents.VERIFICATION_FAILURE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ErrorModal
      headerTitle=""
      title={translate('modals.cognitoFailure.title')}
      subtitle={translate('modals.cognitoFailure.subtitle')}
      secondaryButtonText={translate(
        'modals.cognitoFailure.actions.customerService'
      )}
      secondaryButtonAction={navigateToCustomerService}
      withBackgroundImg
    />
  );
};

export default CognitoFailure;
