/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { Card, Icon, ToggleIcons } from '@app/components';
import variants from './fixtures';

const Example = ({
  checked,
  disabled,
  variant,
  rounded,
  leftIcon,
  rightIcon,
}) => {
  const [state, setState] = useState(checked || false);

  useEffect(() => {
    setState(checked);
  }, [checked]);

  return (
    <ToggleIcons
      rounded={rounded}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      variant={variant}
      disabled={disabled}
      onChange={setState}
      checked={state}
    />
  );
};

declare let module;
storiesOf('Controls.ToggleIcons', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', variants, variants.default);
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const rounded = boolean('Rounded', false);
    const currencyIcons = boolean('Currency Icons', true);

    return (
      <Card size="xlarge">
        <Example
          leftIcon={currencyIcons ? <Icon.Dollar /> : <Icon.PieGraph />}
          rightIcon={currencyIcons ? <Icon.Bitcoin /> : <Icon.LineGraph />}
          variant={variant}
          disabled={disabled}
          checked={checked}
          rounded={rounded}
        />
      </Card>
    );
  });
