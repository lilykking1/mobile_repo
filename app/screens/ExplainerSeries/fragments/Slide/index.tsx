import React, { FC } from 'react';
import LottieView from 'lottie-react-native';
import { View, Image } from 'react-native';
import { Typography } from '@app/components';
import styles from './styles';
import { SlideProps } from './types';

const Slide: FC<SlideProps> = ({
  image,
  title,
  subtitle,
  lottieAnimation,
  bottomContainerStyle,
  titleFontSize,
  subtitleFontSize,
  extraTitleStyle,
  extraSubtitleStyle,
}) => (
  <View style={styles.slidesContainer}>
    {lottieAnimation && (
      <LottieView
        style={styles.lottieAnimationStyle}
        source={lottieAnimation}
        autoPlay
        loop={false}
      />
    )}
    {image && (
      <Image
        accessibilityIgnoresInvertColors
        source={image}
        resizeMode="cover"
        style={styles.slideImageStyle}
      />
    )}
    <View style={bottomContainerStyle}>
      {title && (
        <Typography strong size={titleFontSize} style={extraTitleStyle}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          variant="grey.600"
          size={subtitleFontSize}
          style={extraSubtitleStyle}
        >
          {subtitle}
        </Typography>
      )}
    </View>
  </View>
);

export default Slide;
