import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import {
  boolean,
  color,
  number,
  select,
  withKnobs,
} from '@storybook/addon-knobs';

import { Card } from '@app/components';
import { palette } from '@app/theme';
import CustomSpinner from '..';

import { sizes } from './fixtures';
import styles from './styles';

declare let module;

storiesOf('Loaders.CustomSpinner', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const size = select('Size', sizes, sizes.large);
    const customSize = number('Custom Size', undefined, {
      min: 5,
      max: 100,
      range: true,
    });
    const colorToUse = color('Color', palette.primary);
    const hasBox = boolean('Has Box', true);

    return (
      <Card style={styles.container}>
        <CustomSpinner
          size={customSize || size}
          color={colorToUse}
          hasBox={hasBox}
        />
      </Card>
    );
  });
