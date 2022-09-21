import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import Card from '@app/components/Card';

import Typography from '../index';
import { sizes, variants } from './fixtures';
import { TypographyVariant } from '../types';

declare let module;

storiesOf('Typography.Typography', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const label = text('Label', 'My Text');
    const size = select('Size', sizes, sizes.body1);
    const variant = select('Variant', variants, undefined);
    const disabled = boolean('Is Disabled', false);

    let altLight: TypographyVariant;
    let altDark: TypographyVariant;
    const hasAltColors = boolean('Has Alternative Colors', false);

    if (hasAltColors) {
      altLight = select('Alternative Light Color', variants, undefined);
      altDark = select('Alternative Dark Color', variants, undefined);
    }

    return (
      <Card>
        <Typography
          size={size}
          variant={variant}
          altLight={altLight}
          altDark={altDark}
          disabled={disabled}
        >
          {label}
        </Typography>
      </Card>
    );
  });
