import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';

import AccrualCard from '@app/components/AccrualCard';
import { sizes } from './fixtures';

declare let module;

storiesOf('Statuses.AccrualCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const value = number(
      'Value',
      263871.45,
      { min: -1e6, max: 1e6, range: true },
      'Default'
    );
    const percentageChange = number(
      'Percentage Change',
      undefined,
      { min: 0, max: 1e4, range: true },
      'Default'
    );
    const precision = number(
      'Precision',
      0,
      { min: 0, max: 4, range: true },
      'Default'
    );
    const size = select('Size', sizes, sizes.medium, 'Default');

    const isSecret = boolean('Is Secret', false, 'Default');

    return (
      <AccrualCard
        isSecret={isSecret}
        size={size}
        value={value}
        precision={precision}
        percentageChange={
          percentageChange ? percentageChange.toString() : undefined
        }
      />
    );
  });
