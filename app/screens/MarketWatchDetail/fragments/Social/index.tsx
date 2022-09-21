import React, { FC, useCallback } from 'react';
import { Linking, View } from 'react-native';

import { Button } from '@app/components';
import {
  Github,
  Telegram,
  Twitter,
  Website,
} from '@app/components/Icon/social';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeMarketWatchProps } from '@app/utils/amplitude/constants/marketWatch/properties';
import styles from './styles';
import { coinData } from '../../mock/data';
import { SocialLink, SocialName } from '../../types';

interface SocialProps {
  website: SocialLink;
  github: SocialLink;
  twitter: SocialLink;
  telegram: SocialLink;
}

const Social: FC<SocialProps> = ({ website, github, twitter, telegram }) => {
  const handleOnPress = useCallback((link: string, eventType: string) => {
    const eventProperties = {};
    eventProperties[`${AmplitudeMarketWatchProps.THIRD_PARTY}`] = eventType;

    logAmplitudeEvent(
      AmplitudeMarketWatchEvents.CLICK_COIN_DETAILS_THIRD_PARTY,
      eventProperties
    );
    Linking.openURL(link);
  }, []);

  return (
    <View style={styles.coinContainer}>
      {website && (
        <View style={styles.rightPadding}>
          <Button
            key={`coin-detail-${coinData.website.name}`}
            startIcon={<Website height={14} />}
            onPress={() =>
              handleOnPress(
                coinData.website.href,
                SocialName.WEBSITE.toLowerCase()
              )}
            size="small"
            style={styles.webButtonStyle}
            pill
            label={coinData.website.name}
            labelCustomStyle={styles.customWebsiteLabelStyle}
          />
        </View>
      )}
      {github && (
        <View style={styles.rightPadding}>
          <Button
            key={`coin-detail-${coinData.github.name}`}
            startIcon={<Github height={17} />}
            style={styles.socialButtonStyle}
            onPress={() =>
              handleOnPress(
                coinData.github.href,
                SocialName.GITHUB.toLowerCase()
              )}
            size="small"
            pill
          />
        </View>
      )}
      {twitter && (
        <View style={styles.rightPadding}>
          <Button
            key={`coin-detail-${coinData.twitter.name}`}
            startIcon={<Twitter height={12} />}
            style={styles.socialButtonStyle}
            onPress={() =>
              handleOnPress(
                coinData.twitter.href,
                SocialName.TWITTER.toLowerCase()
              )}
            size="small"
            pill
          />
        </View>
      )}
      {telegram && (
        <View>
          <Button
            key={`coin-detail-${coinData.telegram.name}`}
            startIcon={<Telegram height={12} />}
            style={styles.socialButtonStyle}
            onPress={() =>
              handleOnPress(
                coinData.telegram.href,
                SocialName.TELEGRAM.toLowerCase()
              )}
            size="small"
            pill
          />
        </View>
      )}
    </View>
  );
};

export default Social;
