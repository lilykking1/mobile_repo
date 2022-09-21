import React, { FC, useCallback } from 'react';
import { Image, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { Lockpads } from '@app/assets/images';
import { translate } from '@app/i18n';
import {
  Button,
  Logo,
  SafeArea,
  Typography,
  StickyHeader,
} from '@app/components';
import { Routes } from '@app/navigation/types';

import { FROM_ALT_COLOR, TO_ALT_COLOR } from './constants';
import styles from './styles';

type TwoFactorConfigurationBlockProps = BottomTabScreenProps<
  Routes,
  'TwoFactorConfigurationBlock'
>;

const TwoFactorConfigurationBlock: FC<TwoFactorConfigurationBlockProps> = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const logo = <Logo style={styles.logo} />;

  const handleContinueSetup = useCallback(() => {
    navigation.navigate('TwoFactorConfigurationSetup');
  }, [navigation]);

  const handleBackPress = useCallback(() => {
    navigation.getParent().goBack();
  }, [navigation]);

  return (
    <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
      <StickyHeader
        handleBackPress={handleBackPress}
        altLight={FROM_ALT_COLOR}
        altDark={TO_ALT_COLOR}
        Title={logo}
      />
      <View style={styles.container}>
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
            {translate('modals.twoFactorConfigurationBlock.title')}
          </Typography>
          <Typography size="body1" style={styles.instructions}>
            {translate('modals.twoFactorConfigurationBlock.text.instructions')}
          </Typography>
        </View>
        <View>
          <Button
            variant="primary"
            block
            label={translate(
              'modals.twoFactorConfigurationBlock.action.continue'
            )}
            onPress={handleContinueSetup}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default TwoFactorConfigurationBlock;
