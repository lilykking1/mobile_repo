import React, { FC } from 'react';
import { Typography, Background } from '@app/components';
import { translate } from '@app/i18n';
import { styles } from './styles';

const SliderFooter: FC = () => (
  <Background style={styles.percentFooter}>
    <Typography size="small" variant="grey.600">
      {translate('components.riskSlider.lowRisk')}
    </Typography>
    <Typography size="small" variant="grey.600">
      {translate('components.riskSlider.highRisk')}
    </Typography>
  </Background>
);

export default SliderFooter;
