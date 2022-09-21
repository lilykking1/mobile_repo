import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { number, withKnobs } from '@storybook/addon-knobs';

import CandleStickBarChart from '..';

declare let module;

storiesOf('Graph.CandleStickBarChart', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const min = 0;
    const max = 100;
    const range = true;
    const options = { min, max, range };

    const high = number('high', 10);
    const low = number('low', 10, options);

    return <CandleStickBarChart high={high} low={low} />;
  });
