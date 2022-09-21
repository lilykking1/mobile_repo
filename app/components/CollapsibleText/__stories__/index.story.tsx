import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number } from '@storybook/addon-knobs';

import CollapsibleText from '..';

declare let module;

storiesOf('Typography.CollapsibleText', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const numberOfLines = number('Number of Lines', 4);
    return (
      <CollapsibleText numberOfLines={numberOfLines}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        voluptates incidunt quibusdam et perspiciatis vel fugit mollitia dicta
        aspernatur? Necessitatibus maxime assumenda autem voluptatum pariatur
        est quibusdam incidunt obcaecati nihil?
      </CollapsibleText>
    );
  });
