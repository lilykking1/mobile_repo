import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import {
  boolean,
  color,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { CoinStackCard } from '@app/components';

import { coinsList } from './fixtures';

declare let module;

storiesOf('Cards.CoinStackCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const emptyCoins = boolean('Empty Coins', false);
    const reversePositions = boolean('Reverse Positions', false);
    const amount = text('Amount', '23456');
    const title = text('Title', 'Individual coins');
    const percentage = text('Percentage', '23');
    const amountPrecision = number('Amount precision', 0);
    const percentagePrecision = number('Percentage precision', 0);
    const selectedColor = color('Color', '#77C47A');
    const addColorToCard = boolean('Select a color to the card', true);
    const coins = emptyCoins ? [] : coinsList;

    return (
      <CoinStackCard
        coins={coins}
        color={addColorToCard && selectedColor}
        title={title}
        amount={amount}
        percentage={percentage}
        reverseValuePositions={reversePositions}
        percentagePrecision={percentagePrecision}
        amountPrecision={amountPrecision}
      />
    );
  });
