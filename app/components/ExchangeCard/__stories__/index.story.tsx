import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { EXCHANGES } from '@app/models';
import Card from '@app/components/Card';

import ExchangeCard from '../index';

declare let module;

storiesOf('Cards.ExchangeCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const exchange = select<EXCHANGES>(
      'Exchange',
      EXCHANGES,
      EXCHANGES.Binance
    );

    const amount = text('Amount Label', '13,542.12');
    const isSecret = boolean('Is Values Secret', false);
    const isSelected = boolean('Is Selected', true);
    const isOnline = boolean('Is Online', true);

    return (
      <Card>
        <ExchangeCard
          exchange={exchange}
          amount={amount}
          isSecret={isSecret}
          isSelected={isSelected}
          isOnline={isOnline}
        />
      </Card>
    );
  })
  .add('Fallback', () => (
    <Card>
      <ExchangeCard />
    </Card>
  ))
  .add('Stacked Wallet', () => {
    const amount = text('Amount Label', '13,542.12');
    const isSecret = boolean('Is Values Secret', false);
    const isSelected = boolean('Is Selected', true);
    const isOnline = boolean('Is Online', true);

    return (
      <Card>
        <ExchangeCard
          stackedWallet
          amount={amount}
          isSecret={isSecret}
          isSelected={isSelected}
          isOnline={isOnline}
        />
      </Card>
    );
  });
