import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';

import CopyWalletAddress from '../index';

declare let module;

storiesOf('Buttons.CopyWalletAddress', module)
  .addDecorator(withView)
  .add('Default', () => (
    <CopyWalletAddress walletAddress="aslkdfjeiruhuireiufuirhfuhiuhiaslkfjweiofjiewofijoew1231232132112" />
  ));
