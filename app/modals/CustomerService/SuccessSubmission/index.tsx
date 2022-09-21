import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { View, Image } from 'react-native';

import { translate } from '@app/i18n';
import { RootContext } from '@app/state';
import { BluePinkEllipse } from '@app/assets/images';
import { Typography, SafeArea } from '@app/components';
import { ALT_LIGHT_COLOR } from './constants';
import styles from './styles';
import { getSubtitleVariant } from './utils';

const SuccessSubmission: React.FC = () => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const subtitleVariantColor = getSubtitleVariant(theme);

  return (
    <View style={styles.mainContainer}>
      <SafeArea style={styles.container} altLight={ALT_LIGHT_COLOR}>
        <View style={styles.position}>
          <Image source={BluePinkEllipse} accessibilityIgnoresInvertColors />
        </View>
        <View style={styles.topContainer}>
          <Typography strong size="h2" style={styles.text}>
            {translate('modals.customerService.submissionSuccess.title')}
          </Typography>

          <Typography
            size="body1"
            variant={subtitleVariantColor}
            style={[styles.text, styles.message]}
          >
            {translate('modals.customerService.submissionSuccess.subtitle')}
          </Typography>
        </View>
      </SafeArea>
    </View>
  );
};

export default observer(SuccessSubmission);
