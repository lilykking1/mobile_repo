import React, { FC } from 'react';
import { View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { Routes } from '@app/navigation/types';

import { IconButton, Icon, Typography } from '@app/components';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import styles from './styles';

const Header: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const arrowIcon = (
    <Icon.ChevronLeft tint={palette.royalBlue[900]} width={24} height={24} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.spaceContainer}>
        <IconButton
          onPress={navigation.goBack}
          size="small"
          startIcon={arrowIcon}
          style={styles.button}
        />
      </View>

      <View style={styles.titleContainer}>
        <Typography strong variant="white" size="h6" style={styles.text}>
          {translate('screens.stackedWallet.populated.actions.scanQrCode')}
        </Typography>
      </View>

      <View style={styles.spaceContainer} />
    </View>
  );
};

export default Header;
