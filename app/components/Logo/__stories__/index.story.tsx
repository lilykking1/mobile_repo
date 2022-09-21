import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs';

import Logo from '../index';
import { variants } from './fixtures';
import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../utils';

declare let module;

storiesOf('Assets.Logo', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const width = number('Width', DEFAULT_WIDTH);
    const height = number('Height', DEFAULT_HEIGHT);
    const variant = select('Variant', variants, variants.dark);
    const monochromatic = boolean('Monochromatic', false);
    const compact = boolean('Compact', false);

    return (
      <Logo
        variant={variant}
        monochromatic={monochromatic}
        compact={compact}
        width={width}
        height={height}
      />
    );
  });
