import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Badge } from '@app/components';

declare let module;

storiesOf('Icons.Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const count = { min: 0, max: 10, range: true };
    const badgeCount = number('Label', 16, count);

    return <Badge count={badgeCount} />;
  });
