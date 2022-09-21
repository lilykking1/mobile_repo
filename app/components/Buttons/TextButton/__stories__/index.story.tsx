import React from 'react';
import { Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { ArrowRightWhite, ArrowLeftGrey } from '@app/assets/images';

import TextButton from '@app/components/Buttons/TextButton';
import { sizes, variants } from './fixtures';

declare let module;

storiesOf('Buttons.TextButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const block = boolean('Block', true);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'My Button');
    const size = select('Size', sizes, sizes.normal);
    const variant = select('Variant', variants, variants.primary);
    const hasStartIcon = boolean('StartIcon', false);
    const hasEndIcon = boolean('EndIcon', false);

    const startIcon = hasStartIcon ? (
      <Image accessibilityIgnoresInvertColors source={ArrowLeftGrey} />
    ) : undefined;

    const endIcon = hasEndIcon ? (
      <Image accessibilityIgnoresInvertColors source={ArrowRightWhite} />
    ) : undefined;

    return (
      <TextButton
        block={block}
        disabled={disabled}
        endIcon={endIcon}
        label={label}
        size={size}
        startIcon={startIcon}
        variant={variant}
      />
    );
  });
