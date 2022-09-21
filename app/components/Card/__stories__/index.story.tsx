import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Card from '../index';
import { variants, sizes } from './fixtures';

declare let module;

storiesOf('Cards.Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', variants, undefined);
    const size = select('Size', sizes, sizes.medium);
    const outline = boolean('Outline', false);
    const highlight = boolean('Highlight', false);
    const usePadding = boolean('Use Default Padding', true);

    return (
      <Card
        size={size}
        outline={outline}
        highlight={highlight}
        variant={variant}
        usePadding={usePadding}
      >
        <Text>The Card Component</Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam fugit
          obcaecati velit iste corporis. Sit iste impedit, illo quos eius quasi
          similique soluta laboriosam repudiandae sapiente placeat, perferendis
          quod minima?
        </Text>
      </Card>
    );
  });
