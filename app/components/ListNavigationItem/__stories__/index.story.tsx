import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { noop } from 'lodash';

import { Icon, ListNavigationItem } from '@app/components';
import styles from './styles';

declare let module;

storiesOf('List.NavigationItem', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const title = text('Title', 'Title');
    const subtitle = text('Subtitle', 'Subtitle');
    const customIcon = boolean('Custom Icon', false);
    const customIconStyle = boolean('Custom Icon Style', false);
    const divider = boolean('Has Divider', true);
    const icon = customIcon ? <Icon.ArrowUp /> : null;
    const iconStyle = customIconStyle ? styles.containerStyle : null;
    return (
      <View style={styles.container}>
        <ListNavigationItem
          title={title}
          subTitle={subtitle}
          onPress={noop}
          button={icon}
          containerStyle={iconStyle}
          divider={divider}
        />
      </View>
    );
  });
