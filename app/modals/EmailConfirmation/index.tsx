import React, { FC, useCallback } from 'react';
import { Image, View } from 'react-native';
import { translate } from '@app/i18n';
import {
  Background,
  Button,
  Icon,
  IconButton,
  Typography,
} from '@app/components';
import { EmailConfirmation } from '@app/assets/images';

import { RootRoutes, Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import styles from './styles';

interface EmailConfirmationRoute {
  route: {
    params: RootRoutes['EmailConfirmation'];
  };
}

const EmailConfirmationModal: FC<EmailConfirmationRoute> = ({ route }) => {
  const { title, subtitle } = route.params;
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleOnResendEmail = useCallback(() => {
    // TODO create resend email logic
    logBrazeCustomEvent(
      BrazeAuthenticationEvents.CLICK_SIGNUP_RESEND_VERIFICATION_EMAIL
    );
    logAmplitudeEvent(AmplitudeAuthEvents.SIGNUP_RESEND_VERIFICATION_EMAIL);
  }, [logBrazeCustomEvent]);

  const iconClose = <Icon.Close />;

  return (
    <Background secondary>
      <View style={styles.container}>
        <View style={styles.iconRight}>
          <IconButton startIcon={iconClose} onPress={handleBackPress} />
        </View>
        <Image
          source={EmailConfirmation}
          style={styles.emailImage}
          accessibilityIgnoresInvertColors
        />
        <Typography
          variant="secondary.500"
          size="h2"
          strong
          style={styles.checkEmailTitle}
        >
          {title}
        </Typography>
        <Typography size="h6" style={styles.checkEmailText}>
          {subtitle}
        </Typography>

        <Button
          label={translate(
            'screens.signUp.signUpForm.emailConfirmation.checkEmailButton'
          )}
          variant="secondary"
          style={styles.buttonContainer}
          onPress={handleOnResendEmail}
        />
      </View>
    </Background>
  );
};

export default EmailConfirmationModal;
