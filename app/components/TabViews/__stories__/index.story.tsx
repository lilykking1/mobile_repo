import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import Typography from '@app/components/Typography';
import Background from '@app/components/Background';

import Button from '@app/components/Buttons/Button';
import * as TabViews from '../index';
import { loremIpsum } from './fixtures';
import { styles } from './styles';

declare let module;

storiesOf('Tabs.TabViews', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const showExtraButton = boolean('Show Extra Button', false);
    const doExtraAction = boolean('Do Extra Action', false);

    const ExtraButton = <Button label="Button" />;
    const extraAction = () => {
      Alert.alert('Change Tab and did extra action!');
    };

    return (
      <Background secondary style={styles.container}>
        <TabViews.Container
          extraTabRowComponent={showExtraButton && ExtraButton}
          extraActionOnChangeTab={doExtraAction ? extraAction : undefined}
        >
          <TabViews.Tab title="Tab 1">
            <Typography variant="green.500" size="h3" strong>
              Content 1
            </Typography>

            <Typography size="body1">{loremIpsum}</Typography>
          </TabViews.Tab>

          <TabViews.Tab title="Tab 2">
            <Typography variant="red" size="h2" strong>
              Content 2
            </Typography>

            <Typography size="body2">{loremIpsum}</Typography>
          </TabViews.Tab>

          <TabViews.Tab title="Tab 3">
            <Typography variant="main.400" size="body1" strong>
              Content 3
            </Typography>

            <Typography>{loremIpsum}</Typography>
          </TabViews.Tab>
        </TabViews.Container>
      </Background>
    );
  });
