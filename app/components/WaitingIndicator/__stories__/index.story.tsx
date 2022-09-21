import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, number, color } from '@storybook/addon-knobs';

import Card from '@app/components/Card';
import { palette } from '@app/theme';
import { labelAlignmentVariants } from './fixtures';
import WaitingIndicator from '..';
import styles from './styles';

declare let module;

storiesOf('Loaders.WaitingIndicator', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const labelAlignment = select(
      'Label Alignment',
      labelAlignmentVariants,
      labelAlignmentVariants.right
    );
    const customSize = number('Custom Size', 17, {
      min: 5,
      max: 100,
      range: true,
    });
    const customCountdown = number('Countdown', 20, {
      min: 10,
      max: 300,
      range: true,
    });
    const colorToUse = color('Color', palette.primary);

    return (
      <Card style={styles.container}>
        <WaitingIndicator
          labelAlignment={labelAlignment}
          size={customSize}
          color={colorToUse}
          countdown={customCountdown}
          onCountdownFinish={() => Alert.alert('FINISHED COUNTDOWN')}
        />
      </Card>
    );
  });
