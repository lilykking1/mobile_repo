import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Card } from '@app/components';
import Checkbox from '../index';

import { Close } from './helpers';

declare let module;

storiesOf('Inputs.Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const touched = boolean('Touched', false);
    const error = text('Error', 'This field is required');
    const customIcon = boolean('Custom Icon', false);
    const label = text(
      'Label',
      'I read and agreed to the terms and conditions of service'
    );
    const lineCheck = boolean('Line Check', false);

    const icon = customIcon ? Close : undefined;

    return (
      <Card size="xlarge">
        <Checkbox
          disabled={disabled}
          touched={touched}
          error={error}
          checked={checked}
          icon={icon}
          label={label}
          lineCheck={lineCheck}
        />
      </Card>
    );
  });
