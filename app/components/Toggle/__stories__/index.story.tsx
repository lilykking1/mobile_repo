import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { select, withKnobs } from '@storybook/addon-knobs';
import { Card } from '@app/components';
import Toggle from '../index';
import { variants } from './fixtures';

type State<T> = [T, (value: T) => void];

declare let module;
const Example = ({ variant }) => {
  const [isChecked, setIsChecked] = useState(false) as State<boolean>;

  return (
    <Toggle variant={variant} onChange={setIsChecked} checked={isChecked} />
  );
};

storiesOf('Controls.Toggle', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', variants, variants.default);

    return (
      <Card>
        <Example variant={variant} />
      </Card>
    );
  });
