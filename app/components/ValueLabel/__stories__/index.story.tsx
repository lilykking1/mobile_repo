import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import ValueLabel from '@app/components/ValueLabel';
import { variants } from './fixtures';

declare let module;

storiesOf('Typography.ValueLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const value = text('Value', '$100.00');
    const variant = select('Variant', variants, variants.normal);

    return <ValueLabel value={value} variant={variant} />;
  });
