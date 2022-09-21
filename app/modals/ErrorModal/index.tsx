import React, { FC } from 'react';
import { View, Image, TextStyle } from 'react-native';

import { ErrorCoin, BluePinkEllipse } from '@app/assets/images';
import { Typography, Button, SafeArea } from '@app/components';
import { FROM_ALT_COLOR } from './constants';
import styles from './styles';

interface ErrorModalProps {
  headerTitle: string;
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  extraTitleStyles?: TextStyle;
  extraSubtitleStyles?: TextStyle;
  withBackgroundImg?: boolean;
}

const ErrorModal: FC<ErrorModalProps> = ({
  headerTitle,
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  extraTitleStyles,
  extraSubtitleStyles,
  withBackgroundImg = false,
}) => (
  <View style={styles.mainContainer}>
    <SafeArea style={styles.container} altLight={FROM_ALT_COLOR}>
      {withBackgroundImg && (
        <View style={styles.position}>
          <Image source={BluePinkEllipse} accessibilityIgnoresInvertColors />
        </View>
      )}
      <Typography strong size="h6">
        {headerTitle}
      </Typography>
      <View style={styles.topContainer}>
        <Image
          source={ErrorCoin}
          style={styles.image}
          accessibilityIgnoresInvertColors
        />

        <Typography size="h4" style={[styles.text, extraTitleStyles]}>
          {title}
        </Typography>

        <Typography
          size="body1"
          variant="grey.600"
          style={[styles.text, styles.message, extraSubtitleStyles]}
        >
          {subtitle}
        </Typography>
      </View>
      {primaryButtonAction && (
        <Button
          label={primaryButtonText}
          variant="primary"
          style={styles.button}
          onPress={primaryButtonAction}
        />
      )}
      {secondaryButtonAction && (
        <Button
          label={secondaryButtonText}
          variant="secondary"
          style={styles.button}
          onPress={secondaryButtonAction}
        />
      )}
    </SafeArea>
  </View>
);

export default ErrorModal;
