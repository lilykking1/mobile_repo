import React, { FC, useContext, useEffect } from 'react';
import { Image } from 'react-native';
import { translate } from '@app/i18n';
import { Background, Typography } from '@app/components';
import { RootRoutes } from '@app/navigation/types';
import { BackgroundNotAvailableLocation, ErrorCoin } from '@app/assets/images';

import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import styles from './styles';

interface NotAvailableLocationRoute {
  route: {
    params: RootRoutes['NotAvailableLocationModal'];
  };
}

const NotAvailableLocation: FC<NotAvailableLocationRoute> = ({ route }) => {
  const { location } = route.params;
  const {
    amplitudeStore: { isUniqueEventAlreadyLogged, addAlreadyLoggedUniqueEvent },
  } = useContext(RootContext);
  const { logBrazeCustomEvent } = useBraze();
  useEffect(() => {
    const isAlreadyLogged = isUniqueEventAlreadyLogged(
      AmplitudeAuthEvents.UNABLE_LOGIN_DUE_LOCATION
    );

    if (!isAlreadyLogged) {
      logAmplitudeEvent(AmplitudeAuthEvents.UNABLE_LOGIN_DUE_LOCATION);
      logBrazeCustomEvent(
        BrazeAuthenticationEvents.UNABLE_TO_LOGIN_DUE_LOCATION
      );
      addAlreadyLoggedUniqueEvent(
        AmplitudeAuthEvents.UNABLE_LOGIN_DUE_LOCATION
      );
    }
  }, [
    addAlreadyLoggedUniqueEvent,
    isUniqueEventAlreadyLogged,
    logBrazeCustomEvent,
  ]);

  return (
    <Background
      secondary
      altDark={palette.royalBlue[1000]}
      style={styles.container}
    >
      <Image
        resizeMode="cover"
        source={BackgroundNotAvailableLocation}
        style={styles.backgroundImage}
        accessibilityIgnoresInvertColors
      />
      <Image
        source={ErrorCoin}
        style={styles.coinImage}
        accessibilityIgnoresInvertColors
      />
      <Typography size="h2" strong style={styles.notAvailableLocationTitle}>
        {`${translate('modals.notAvailableLocation.title')} ${location}`}
      </Typography>
      <Typography
        size="buttons"
        altDark="grey.600"
        style={styles.notAvailableLocationSubtitle}
      >
        {translate('modals.notAvailableLocation.subtitle')}
      </Typography>
    </Background>
  );
};

export default NotAvailableLocation;
