/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import RadioButton from '..';
import { sizes, variants } from './fixtures';

declare let module;

const options = [
  { id: '1', value: 'Opt' },
  { id: '2', value: 'Alternative' },
  { id: '3', value: 'Option' },
];

storiesOf('Controls.RadioButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', variants, variants.primary);
    const size = select('Size', sizes, sizes.normal);
    const pill = boolean('Pill', false);
    const selected = select(
      'Selected',
      options.map((option) => option.id),
      '1'
    );

    return (
      <RadioButton
        variant={variant}
        size={size}
        pill={pill}
        selected={selected}
        options={options}
      />
    );
  });
