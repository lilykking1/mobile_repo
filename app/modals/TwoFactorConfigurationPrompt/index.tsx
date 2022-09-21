import React, { FC, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Image, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Lockpads } from '@app/assets/images';
import { translate } from '@app/i18n';
import {
  Button,
  Logo,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';
import { Routes } from '@app/navigation/types';

import { AmplitudeAuthEvents, logAmplitudeEvent } from '@app/utils/amplitude';
import { FROM_ALT_COLOR, TO_ALT_COLOR } from './constants';
import styles from './styles';

type TwoFactorConfigurationPromptProps = BottomTabScreenProps<
  Routes,
  'TwoFactorConfigurationPrompt'
>;

const TwoFactorConfigurationPrompt: FC<TwoFactorConfigurationPromptProps> = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const logo = <Logo style={styles.logo} />;

  navigation.addListener('beforeRemove', (e) => {
    e.preventDefault();
  });

  const handleProtectAccountPress = useCallback(() => {
    navigation.navigate('TwoFactorConfigurationSetup');
    logAmplitudeEvent(AmplitudeAuthEvents.TWOFA_CLICK_PROTECT_MY_ACCOUNT);
  }, [navigation]);

  return (
    <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <StickyHeader
              altLight={FROM_ALT_COLOR}
              altDark={TO_ALT_COLOR}
              Title={logo}
            />
          </View>
          <View style={styles.content}>
            <Image
              accessibilityIgnoresInvertColors
              source={Lockpads}
              style={styles.icon}
            />
            <Typography
              altLight="main.500"
              altDark="white"
              size="h2"
              strong
              style={styles.margin}
            >
              {translate('modals.twoFactorConfigurationPrompt.title')}
            </Typography>
            <Typography size="body1" style={styles.instructions}>
              {translate(
                'modals.twoFactorConfigurationPrompt.text.firstInstruction'
              )}
            </Typography>
            <Typography size="body1" style={styles.instructions}>
              {translate(
                'modals.twoFactorConfigurationPrompt.text.secondInstruction'
              )}
            </Typography>
          </View>
        </View>
        <View>
          <Button
            variant="primary"
            block
            label={translate(
              'modals.twoFactorConfigurationPrompt.action.protectAccount'
            )}
            style={styles.margin}
            onPress={handleProtectAccountPress}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default observer(TwoFactorConfigurationPrompt);
