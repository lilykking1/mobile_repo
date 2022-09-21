import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Background } from '@app/components';
import { palette } from '@app/theme';
import styles from './styles';
import SearchInput from '../index';

declare let module;

storiesOf('Inputs.SearchInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('default', () =>
    React.createElement(() => {
      const placeholder = text('Placeholder text', 'Search...');
      const [searchString, setSearchString] = useState('');

      return (
        <Background altLight={palette.white} style={styles.container}>
          <SearchInput
            placeholder={placeholder}
            value={searchString}
            onChangeText={setSearchString}
          />
        </Background>
      );
    })
  );
