/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import Background from '@app/components/Background';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import { ArrowRightWhite, ArrowLeftGrey } from '@app/assets/images';

import Button from '../index';
import { sizes, variants } from './fixtures';
import styles from './styles';

declare let module;

storiesOf('Buttons.Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const block = boolean('Block', true);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'My Button');
    const size = select('Size', sizes, sizes.normal);
    const variant = select('Variant', variants, variants.primary);
    const pill = boolean('Pill', false);
    const hasStartIcon = boolean('StartIcon', false);
    const hasEndIcon = boolean('EndIcon', false);
    const useDefaultLineHeight = boolean('Use Default Line Height', true);
    const useVariantDisabledColor = boolean('Use Default Disabled Color', true);
    const startIcon = hasStartIcon ? (
      <Image accessibilityIgnoresInvertColors source={ArrowLeftGrey} />
    ) : undefined;

    const endIcon = hasEndIcon ? (
      <Image accessibilityIgnoresInvertColors source={ArrowRightWhite} />
    ) : undefined;

    return (
      <Background style={styles.container}>
        <Button
          pill={pill}
          block={block}
          disabled={disabled}
          endIcon={endIcon}
          label={label}
          size={size}
          startIcon={startIcon}
          variant={variant}
          useDefaultLineHeight={useDefaultLineHeight}
          useVariantDisabledColor={useVariantDisabledColor}
        />
      </Background>
    );
  });
