import React, { FC, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { translate } from '@app/i18n';
import { Background, Icon, IconButton, Typography } from '@app/components';

import { Routes } from '@app/navigation/types';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import styles from './styles';

const UserAgreement: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const arrowLeft = <Icon.ArrowLeft />;

  return (
    <Background secondary>
      <View style={styles.container}>
        <View style={styles.iconLeft}>
          <IconButton startIcon={arrowLeft} onPress={handleBackPress} />
        </View>
        <Typography size="h3" strong style={styles.title}>
          {translate('screens.signUp.signUpForm.userAgreement.title')}
        </Typography>
        <ScrollView style={styles.agreementContainer} />
      </View>
    </Background>
  );
};

export default UserAgreement;
