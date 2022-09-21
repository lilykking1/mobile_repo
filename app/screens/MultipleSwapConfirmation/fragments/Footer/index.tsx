import React, { FC } from 'react';
import { View } from 'react-native';

import { Button, Icon, Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

interface FooterProps {
  handleBackPress: () => void;
  handleConfirmAction: () => void;
}

const Footer: FC<FooterProps> = ({ handleBackPress, handleConfirmAction }) => (
  <View style={styles.container}>
    <Typography variant="grey.600" size="small" style={styles.message}>
      <Icon.Exclamation width={9} height={9} />
      {translate('swap.confirmations.multiple.informationMessage')}
    </Typography>

    <View style={styles.buttonsContainer}>
      <Button
        label={translate('swap.confirmations.backButton')}
        variant="secondary"
        style={styles.button}
        onPress={handleBackPress}
      />
      <Button
        label={translate('swap.confirmations.confirmButton')}
        variant="green"
        style={[styles.button, styles.spaceLeft]}
        onPress={handleConfirmAction}
      />
    </View>
  </View>
);

export default Footer;
