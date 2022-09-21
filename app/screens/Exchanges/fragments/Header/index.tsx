import React, { FC, useCallback } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { View } from 'react-native';
import { palette } from '@app/theme';
import { IconButton, Typography, Icon } from '@app/components';
import { Routes } from '@app/navigation/types';
import { translate } from '@app/i18n';

import styles from './styles';

const Header: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.left}>
        <View style={styles.backButtonContainer}>
          <IconButton
            containerStyle={styles.backButton}
            onPress={onBackPress}
            size="small"
            startIcon={(
              <Icon.ChevronLeft
                tint={palette.royalBlue[900]}
                width={24}
                height={24}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.headerTextContainer}>
        <Typography size="h5" strong style={styles.headerText}>
          {translate('screens.exchanges.connectExchange')}
        </Typography>
      </View>
    </View>
  );
};

export default Header;
