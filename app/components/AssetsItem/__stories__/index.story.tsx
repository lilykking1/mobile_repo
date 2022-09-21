import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { AssetsItem, Card } from '@app/components';
import { COINS } from '@app/models';

import styles from './styles';

declare let module;

storiesOf('List.AssetsItem', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const coin = select<COINS>('Coin', COINS, COINS.BTC);
    const fiatAmount = text('Fiat Amount Label', '26,601.44');
    const coinAmount = text('Coin Amount Label', '0.708402');
    const isLending = boolean('Is Lending', false);
    const isMultiSelect = boolean('Is Multi Select', false);
    const checked = boolean('Is Selected', false);
    const prefix = text('Prefix Label', '$');
    const suffix = text('Suffix Label', '');
    const lending = isLending
      ? {
          text: 'Lending',
          amount: '+0.02',
          coin: 'USDT',
        }
      : undefined;

    return (
      <Card size="xlarge" style={styles.container}>
        <AssetsItem
          coin={coin}
          coinAmount={coinAmount}
          fiatAmount={fiatAmount}
          lending={lending}
          prefixValue={prefix}
          suffixValue={suffix}
          isMultiSelect={isMultiSelect}
          checked={checked}
        />
      </Card>
    );
  });
