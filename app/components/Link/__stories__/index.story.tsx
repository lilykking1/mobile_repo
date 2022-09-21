import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Link from '../index';
import { sizes, variants } from './fixtures';

declare let module;

storiesOf('.Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const label = text('Label', 'My Link');
    const size = select('Size', sizes, sizes.normal);
    const variant = select('Variant', variants, variants.primary);

    return <Link size={size} variant={variant} label={label} />;
  });
