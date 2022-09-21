import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select } from '@storybook/addon-knobs';
import Card from '@app/components/Card';
import { PeriodFilterShortLabels } from '@app/utils/periodIntervalSelection';

import PeriodButton from '../index';

declare let module;
storiesOf('Button.PeriodButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const label = select(
      'Label',
      { ...PeriodFilterShortLabels, undefined },
      undefined,
      'Label'
    );

    return (
      <Card>
        <PeriodButton label={label} />
      </Card>
    );
  });
