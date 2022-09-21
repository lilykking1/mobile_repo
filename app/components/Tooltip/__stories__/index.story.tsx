import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Background from '@app/components/Background';
import Tooltip from '..';
import { TooltipVariant } from '../types';

declare let module;

storiesOf('Statuses.Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const variant = select('Variant', TooltipVariant, TooltipVariant.SUCCESS);
    const tooltipText = text('Text', 'Text');
    const isAnimated = boolean('Is Animated', false);

    return (
      <Background>
        <Tooltip
          variant={variant}
          text={tooltipText}
          isAnimated={isAnimated}
          showTooltip={isAnimated}
        />
      </Background>
    );
  });
