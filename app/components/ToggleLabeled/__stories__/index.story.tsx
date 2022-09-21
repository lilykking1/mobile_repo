/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import { ToggleLabeled } from '@app/components';
import Background from '@app/components/Background';
import variants from './fixtures';
import styles from './styles';

const Example = ({ checked, disabled, variant, textOne, textTwo }) => {
  const [state, setState] = useState(checked || false);

  useEffect(() => {
    setState(checked);
  }, [checked]);

  return (
    <ToggleLabeled
      variant={variant}
      disabled={disabled}
      onChange={setState}
      checked={state}
      textOne={textOne}
      textTwo={textTwo}
    />
  );
};

declare let module;
storiesOf('Controls.ToggleLabeled', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', variants, variants.primary);
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const textOne = text('Text One', 'One');
    const textTwo = text('Text Two', 'Two');

    return (
      <Background style={styles.container} secondary>
        <Example
          textOne={textOne}
          textTwo={textTwo}
          variant={variant}
          disabled={disabled}
          checked={checked}
        />
      </Background>
    );
  });
