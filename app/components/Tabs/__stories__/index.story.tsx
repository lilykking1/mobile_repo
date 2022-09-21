import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Card } from '@app/components';

import Tabs from '..';
import { tabs } from './fixtures';
import styles from './styles';

declare let module;

storiesOf('Tabs.Tabs', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const selected = select(
      'Selected',
      tabs.map((tab) => tab.id),
      '1'
    );

    return (
      <Card style={styles.container}>
        <Tabs selected={selected} tabs={tabs} />
      </Card>
    );
  });
