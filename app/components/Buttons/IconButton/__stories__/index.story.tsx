import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { Background, Icon } from '@app/components';
import { palette } from '@app/theme';

import Button from '../index';
import { sizes } from './fixtures';
import styles from './styles';

declare let module;

storiesOf('Buttons.IconButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'My Button');
    const size = select('Size', sizes, sizes.normal);
    const hasStartIcon = boolean('StartIcon', true);
    const hasEndIcon = boolean('EndIcon', false);

    const startIcon = hasStartIcon ? <Icon.Bell /> : undefined;
    const endIcon = hasEndIcon ? <Icon.ChevronRight /> : undefined;

    return (
      <Background secondary altDark={palette.white} style={styles.container}>
        <Button
          disabled={disabled}
          endIcon={endIcon}
          label={label}
          size={size}
          startIcon={startIcon}
        />
      </Background>
    );
  });
