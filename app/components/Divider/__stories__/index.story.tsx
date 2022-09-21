import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';

import { Divider, Card, Typography } from '@app/components';
import styles from './styles';

declare let module;

storiesOf('Dividers.Divider', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    let altLight: string;
    let altDark: string;
    const mainHasAltColors = boolean('Use Alt Colors', false);

    if (mainHasAltColors) {
      altLight = color('Alt Light', undefined);
      altDark = color('Alt Dark', undefined);
    }

    return (
      <Card>
        <Typography style={styles.text} size="h6">
          First item
        </Typography>
        <Divider altLight={altLight} altDark={altDark} />
        <Typography style={styles.text} size="h6">
          Second Item
        </Typography>
        <Divider altLight={altLight} altDark={altDark} />
      </Card>
    );
  });
