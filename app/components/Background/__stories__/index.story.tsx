import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { withKnobs, text, color, boolean } from '@storybook/addon-knobs';

import Typography from '@app/components/Typography';
import Background from '../index';
import styles from './styles';

declare let module;

storiesOf('Colors.Background', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const mainExampleText = text('Main Text', 'Main Example Text');

    let mainAltLight: string;
    let mainAltDark: string;
    const mainHasAltColors = boolean('Main has Alt Colors', false);

    if (mainHasAltColors) {
      mainAltLight = color('Main Alt Light', undefined);
      mainAltDark = color('Main Alt Dark', undefined);
    }

    const secondaryExampleText = text(
      'Secondary Text',
      'Secondary Example Text'
    );

    let secondaryAltLight: string;
    let secondaryAltDark: string;
    const secondaryHasAltColors = boolean('Secondary has Alt Colors', false);

    if (secondaryHasAltColors) {
      secondaryAltLight = color('Secondary Alt Light', undefined);
      secondaryAltDark = color('Secondary Alt Dark', undefined);
    }

    return (
      <>
        <Background
          altLight={mainAltLight}
          altDark={mainAltDark}
          secondary
          style={styles.centralized}
        >
          <Typography size="h3" strong>
            {secondaryExampleText}
          </Typography>
        </Background>
        <Background
          altLight={secondaryAltLight}
          altDark={secondaryAltDark}
          style={styles.centralized}
        >
          <Typography size="h3" strong>
            {mainExampleText}
          </Typography>
        </Background>
      </>
    );
  });
