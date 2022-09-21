import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { Routes } from '@app/navigation/types';
import { Button } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

const Footer: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackToWalletPress = useCallback(() => {
    navigation.navigate('StackedWalletScreen');
  }, [navigation]);

  const secondaryActionToUse = useMemo(() => handleBackToWalletPress, [
    handleBackToWalletPress,
  ]);

  return (
    <View style={styles.container}>
      <Button
        label={translate('swap.status.success.action')}
        variant="secondary"
        style={styles.button}
        onPress={secondaryActionToUse}
      />
    </View>
  );
};

export default Footer;
