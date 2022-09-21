import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Background, Icon, IconButton, Typography } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import CopyButton from '../CopyButton';
import styles from './styles';

interface GetContentProps {
  label: string;
  address: string;
  isFunding: boolean;
  handleGenerateWalletAddress: () => void;
  handlePressCopyButton: () => void;
  handlePressQrButton: () => void;
}

export const getLabel = (hasAddress: boolean): string =>
  hasAddress
    ? translate('screens.portfolioCryptoDeposit.address.valueLabel')
    : '';

export const getContent = ({
  address,
  isFunding,
  handleGenerateWalletAddress,
  handlePressCopyButton,
  handlePressQrButton,
  label,
}: GetContentProps): React.ReactNode => {
  const hasAddress = !!address;

  return hasAddress ? (
    <>
      <Typography variant="secondary.800" altDark="white" size="body1">
        {label}
      </Typography>

      <Typography
        strong
        size="buttons"
        numberOfLines={1}
        ellipsizeMode="middle"
        variant="secondary.800"
        altDark="secondary.400"
        style={styles.walletAddress}
      >
        {address}
      </Typography>

      {!isFunding && (
        <View style={styles.buttonsRow}>
          <CopyButton onCopy={handlePressCopyButton} />

          <IconButton
            onPress={handlePressQrButton}
            containerStyle={styles.qrButton}
            altLight={palette.white}
            startIcon={
              <Icon.QrCode width={24} height={24} tint={palette.grey[600]} />
            }
          />
        </View>
      )}
    </>
  ) : (
    <View style={styles.generateContainer}>
      <TouchableOpacity
        onPress={handleGenerateWalletAddress}
        activeOpacity={0.75}
        style={styles.generateButton}
      >
        <Background altLight={palette.white} style={styles.iconContainer}>
          <Icon.CircleArrowsWithCheck
            tint={palette.royalBlue[500]}
            width={22}
            height={22}
          />
        </Background>

        <Typography
          strong
          variant="secondary.800"
          altDark="secondary.400"
          size="buttons"
        >
          {translate('screens.portfolioCryptoDeposit.address.generate')}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};
