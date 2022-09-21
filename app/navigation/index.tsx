import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Root } from '@app/navigation/navigators';

import theme from './theme';
import { navigationRef } from './utils';
import { linkingConfig } from './linkingConfig';

const Navigator: FC = () => (
  <NavigationContainer
    ref={navigationRef}
    theme={theme}
    linking={linkingConfig}
  >
    <Root />
  </NavigationContainer>
);

export default Navigator;
