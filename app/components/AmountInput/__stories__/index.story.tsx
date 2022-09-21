import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Background } from '@app/components';
import { palette } from '@app/theme';
import styles from './styles';
import AmountInput from '../index';

declare let module;

storiesOf('Inputs.AmountInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () =>
    React.createElement(() => {
      const placeholder = text('Placeholder text', '0');
      const [amount, setAmount] = useState('');
      const shouldShowMaxButton = boolean('Show Max button', false);
      const fiatAmount = number('Fiat Amount Label', 28482.3);
      const coinAmount = number('Coin Amount Label', 0.3892);
      const coinName = text('Coin name', 'ETH');

      return (
        <Background altLight={palette.white} style={styles.container}>
          <AmountInput
            placeholder={placeholder}
            value={amount}
            onChangeText={setAmount}
            coinAmount={coinAmount}
            fiatAmount={fiatAmount}
            coinSymbol={coinName}
            shouldShowMaxButton={shouldShowMaxButton}
          />
        </Background>
      );
    })
  );
