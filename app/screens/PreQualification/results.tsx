import { Image, View } from 'react-native';
import React, { FC } from 'react';
import { ErrorCoin, SuccessCoin } from '@app/assets/images';
import { Typography, Button } from '@app/components';
import { translate } from '@app/i18n';
import { SlideProps } from './slides';
import styles from './styles';

export const Unqualified: FC<SlideProps> = ({ unqualifiedButton }) => (
  <View style={styles.container}>
    <View style={styles.greenCheckContainer}>
      <Image source={ErrorCoin} accessibilityIgnoresInvertColors />
    </View>
    <View style={styles.boldTextContainer}>
      <Typography size="h2" strong style={styles.boldText}>
        {translate('screens.prequalification.unqualified')}
      </Typography>
    </View>
    <View style={styles.smallTextContainer}>
      <Typography size="buttons" style={styles.smallText}>
        {translate('screens.prequalification.unqualifiedMessage')}
      </Typography>
    </View>
    <View style={styles.smallTextContainer}>
      <Typography size="buttons" style={styles.smallTextInvesting}>
        {translate('screens.prequalification.dontworry')}
      </Typography>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        label={translate('screens.prequalification.market')}
        onPress={unqualifiedButton}
      />
    </View>
  </View>
);

export const Qualified: FC<SlideProps> = ({ qualifiedButton }) => (
  <View style={styles.container}>
    <View style={styles.greenCheckContainer}>
      <Image
        source={SuccessCoin}
        style={styles.image}
        accessibilityIgnoresInvertColors
      />
    </View>
    <View style={styles.boldTextContainer}>
      <Typography size="h2" strong style={styles.boldText}>
        {translate('screens.prequalification.congrats')}
      </Typography>
    </View>
    <View style={styles.smallTextContainer}>
      <Typography size="body1" style={styles.smallText}>
        {translate('screens.prequalification.goodfit')}
      </Typography>
    </View>
    <View style={styles.smallTextContainer}>
      <Typography size="body1" style={styles.smallText}>
        {translate('screens.prequalification.nextstep')}
      </Typography>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        label={translate('screens.prequalification.risk')}
        variant="green"
        onPress={qualifiedButton}
      />
    </View>
  </View>
);
