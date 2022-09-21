import React, { FC } from 'react';
import { View } from 'react-native';

import { Button, Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

interface FooterProps {
  handleBackPress: () => void;
  handleConfirmAction: () => void;
}

const Footer: FC<FooterProps> = ({ handleBackPress, handleConfirmAction }) => (
  <View style={styles.container}>
    <Typography variant="grey.600" size="body2" style={styles.message}>
      {translate('swap.confirmations.simple.informationMessage')}
    </Typography>

    <Button
      label={translate('swap.confirmations.confirmButton')}
      variant="green"
      style={styles.button}
      onPress={handleConfirmAction}
    />
    <Button
      label={translate('swap.confirmations.backButton')}
      variant="secondary"
      style={styles.button}
      onPress={handleBackPress}
    />
  </View>
);

export default Footer;
