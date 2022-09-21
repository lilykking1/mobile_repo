import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import CryptoValueLabel from '@app/components/CryptoValueLabel';
import {
  variants,
  coinsSuffix,
  coinsPrefix,
  trueOrFalse,
  getBoolean,
} from './fixtures';

declare let module;

storiesOf('Typography.CryptoValueLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const value = number('Value', 0.3452, { min: -1e6, max: 1e6, range: true });
    const variant = select('Variant', variants, variants.normal);

    const prefix = select('Coin Prefix', coinsPrefix, coinsPrefix[0]);
    const suffix = select('Coin Suffix', coinsSuffix, coinsSuffix[0]);

    const prefixStyled = select(
      'Is Prefix Styled',
      trueOrFalse,
      trueOrFalse[0]
    );
    const suffixStyled = select(
      'Is Suffix Styled',
      trueOrFalse,
      trueOrFalse[0]
    );

    const isSecret = select('Is Secret', trueOrFalse, trueOrFalse[1]);

    return (
      <CryptoValueLabel
        value={value}
        variant={variant}
        coinPrefix={prefix || undefined}
        coinSuffix={suffix}
        isPrefixStyled={getBoolean(prefixStyled)}
        isSuffixStyled={getBoolean(suffixStyled)}
        isSecret={getBoolean(isSecret)}
      />
    );
  });
