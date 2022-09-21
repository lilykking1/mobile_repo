import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';

import { ExampleMultiSelect, ExampleSingleSelect } from './components';

declare let module;
storiesOf('Backdrop.MultiSelect', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => (
    <>
      <ExampleMultiSelect />
      <ExampleSingleSelect />
    </>
  ));
