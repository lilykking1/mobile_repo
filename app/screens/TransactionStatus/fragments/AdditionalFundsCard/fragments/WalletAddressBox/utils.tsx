import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Background, Icon, Typography, IconButton } from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import { COPY_TINT_COLOR, QR_TINT_COLOR } from './constants';
import styles from './styles';

export const getLabel = (hasAddress: boolean): string =>
  hasAddress
    ? translate('screens.portfolioCryptoDeposit.address.valueLabel')
    : '';

export const getContent = (
  label: string,
  address: string,
  handleGenerateWalletAddress: () => void
): React.ReactNode => {
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

      <View style={styles.iconButtonsContainer}>
        <IconButton
          style={styles.iconButtonsMargin}
          startIcon={<Icon.Copy tint={COPY_TINT_COLOR} />}
          size="large"
        />
        <IconButton startIcon={<Icon.QrCode tint={QR_TINT_COLOR} />} />
      </View>
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
