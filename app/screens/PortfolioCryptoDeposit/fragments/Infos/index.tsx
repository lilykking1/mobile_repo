import React, { FC } from 'react';
import { View } from 'react-native';

import { Typography } from '@app/components';
import { translate } from '@app/i18n';

import styles from './styles';

interface InfosProps {
  selectedCoin: string;
  hasToGenerateAddress?: boolean;
}

const Infos: FC<InfosProps> = ({
  selectedCoin,
  hasToGenerateAddress = false,
}) => (
  <View style={styles.container}>
    {hasToGenerateAddress && (
      <Typography style={styles.text} strong variant="grey.600" size="body2">
        {translate('screens.portfolioCryptoDeposit.infos.generateAddress', {
          selectedCoin,
        })}
      </Typography>
    )}

    <Typography style={styles.text} strong variant="grey.600" size="body2">
      {translate('screens.portfolioCryptoDeposit.infos.sendToAddress', {
        selectedCoin,
      })}
    </Typography>

    <Typography style={styles.text} strong variant="grey.600" size="body2">
      {translate('screens.portfolioCryptoDeposit.infos.ensureProperCoin', {
        selectedCoin,
      })}
    </Typography>

    <Typography style={styles.text} strong variant="grey.600" size="body2">
      {translate('screens.portfolioCryptoDeposit.infos.windowClosing')}
    </Typography>

    <Typography style={styles.text} strong variant="grey.600" size="body2">
      {translate('screens.portfolioCryptoDeposit.infos.minimumAmount')}
    </Typography>
  </View>
);

export default Infos;
