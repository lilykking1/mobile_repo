import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import RiskCard from '@app/components/RiskCard';
import { riskCardSize } from '@app/components/RiskCard/__stories__/fixtures';
import Typography from '@app/components/Typography';
import styles from './styles';

declare let module;

storiesOf('Cards.RiskCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const value = number('Value', 75);
    const size = select('Size', riskCardSize, riskCardSize[0]);
    const noShadow = boolean('No Shadow', false);
    const label = (
      <Typography size="body2" variant="grey.600" style={styles.label}>
        Label
      </Typography>
    );
    const hasLabel = boolean('Has Label', false);

    return (
      <RiskCard
        value={value}
        size={size}
        noShadow={noShadow}
        label={hasLabel && label}
      />
    );
  });
