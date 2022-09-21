import React, { useCallback } from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';

import { CoinCard } from '@app/components';

import { data } from './mock';

const coinCardStyles = {
  marginBottom: 10,
};

const Example = () => {
  const mapper = useCallback(
    ({ coin, coinValue, key, percentage }) => (
      <CoinCard
        key={key}
        coin={coin}
        value={coinValue}
        percentage={percentage}
        style={coinCardStyles}
      />
    ),
    []
  );

  return <View>{data.map(mapper)}</View>;
};

declare let module;
storiesOf('CoinCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => <Example />);
