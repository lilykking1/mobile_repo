import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { translate } from '@app/i18n';
import { Background, Typography } from '@app/components';
import { SuccessCoin } from '@app/assets/images';

import { styles } from './styles';

const CongratulationsCard: FC = () => (
  <Background secondary style={styles.container}>
    <Image
      source={SuccessCoin}
      style={styles.successImage}
      accessibilityIgnoresInvertColors
    />
    <View style={styles.textsContainer}>
      <Typography style={styles.headerTitle} strong size="h6">
        {translate('components.depositStatusCard.congratulations')}
      </Typography>

      <Typography style={styles.portfolioText} variant="grey.600" size="body2">
        {translate('components.depositStatusCard.portfolioReadyText')}
      </Typography>
    </View>
  </Background>
);

export default CongratulationsCard;
