import React, { FC, useCallback } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { Typography, Card, Icon } from '@app/components';
import { Lending } from '@app/assets/images';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import styles from './styles';

const Empty: FC = () => {
  // it will opens the Assets tab empty state [APP-218]
  const handleOnPress = useCallback(() => {}, []);

  return (
    <Card size="large" style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={handleOnPress}>
        <View style={styles.row}>
          <Typography
            strong
            style={styles.title}
            size="h6"
            variant="secondary.900"
          >
            {translate('screens.dashboard.cards.selfDirected.title')}
          </Typography>

          <Icon.ChevronRight tint={palette.grey[500]} />
        </View>

        <View style={styles.messageContainer}>
          <Typography style={styles.message} variant="grey.600" size="buttons">
            {translate('screens.dashboard.cards.selfDirected.message')}
          </Typography>
        </View>

        <View style={styles.detailContainer}>
          <Image
            style={styles.image}
            accessibilityIgnoresInvertColors
            source={Lending}
          />
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default Empty;
