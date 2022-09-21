import React, { FC } from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Logo, SafeArea } from '@app/components';

import { palette } from '@app/theme';
import { Coins } from './components';
import styles from './styles';

const AuthBackground: FC = ({ children }) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeArea altLight={palette.white}>
        <Logo variant="dark" style={styles.logo} />
        <Coins />
        {children}
      </SafeArea>
    </TouchableWithoutFeedback>
  </View>
);

export default AuthBackground;
