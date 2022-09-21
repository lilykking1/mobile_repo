import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';

import { items } from './fixtures';

import AssetsVariationTable from '../index';

declare let module;

storiesOf('List.AssetsVariationTable', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => <AssetsVariationTable assetsList={items} />);
