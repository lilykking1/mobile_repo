import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { BadgeButton, Icon } from '@app/components';

declare let module;

storiesOf('Buttons.BadgeButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const disabled = boolean('Disabled', false);
    const count = { min: 0, max: 10, range: true };
    const badgeCount = number('Label', 16, count);
    const icon = <Icon.Bell />;

    return (
      <BadgeButton disabled={disabled} icon={icon} badgeCount={badgeCount} />
    );
  });
