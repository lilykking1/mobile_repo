import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number, select, boolean } from '@storybook/addon-knobs';

import Quantity from '../index';
import { sizes, variants } from './fixtures';

declare let module;

storiesOf('Typography.Quantity', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const prefix = select('Prefix', ['$', '€', undefined], null, 'Default');
    const value = number(
      'Value',
      263871.45,
      { min: -1e6, max: 1e6, range: true },
      'Default'
    );
    const suffix = select('Suffix', ['%', undefined], null, 'Default');
    const accrual = boolean('Accrual', false, 'Default');
    const profit = boolean('Profit', false, 'Default');
    const loss = boolean('Loss', false, 'Default');
    const precision = number('Precision', 2, {}, 'Default');

    const useValueLabel = boolean('Use Value Label', false, 'Value Label');
    const valueLabelVariant = select(
      'Value Label Variant',
      ['normal', 'large'],
      'normal',
      'Value Label'
    );

    const caret = boolean('Caret', false, 'Default');
    const isSecret = boolean('Is Secret', false, 'Default');

    const variant = select(
      'Variant',
      { ...variants, undefined },
      undefined,
      'Typography'
    );
    const size = select(
      'Size',
      { ...sizes, undefined },
      undefined,
      'Typography'
    );

    // Programmatically assign the properties for overriding
    let extra = {};

    if (variant) {
      extra = { ...extra, variant };
    }

    if (size) {
      extra = { ...extra, size };
    }

    return (
      <Quantity
        isSecret={isSecret}
        caret={caret}
        prefix={prefix}
        suffix={suffix}
        accrual={accrual}
        profit={profit}
        loss={loss}
        value={profit || loss ? Math.abs(value) : value}
        useValueLabel={useValueLabel}
        valueLabelVariant={valueLabelVariant}
        precision={precision}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...extra}
      />
    );
  });
