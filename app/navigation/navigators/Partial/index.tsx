import React, { FC } from 'react';
import { View } from 'react-native';
import { createNavigatorFactory, EventMapBase } from '@react-navigation/core';
import {
  useNavigationBuilder,
  StackRouter,
  DefaultNavigatorOptions,
  ParamListBase,
  NavigationState,
} from '@react-navigation/native';

import styles from './styles';

// eslint-disable-next-line @typescript-eslint/ban-types
type PartialProps<ScreenOptions = {}> = DefaultNavigatorOptions<
  ParamListBase,
  NavigationState,
  ScreenOptions,
  EventMapBase
>;

const Partial: FC<PartialProps> = (props) => {
  const { state, descriptors, NavigationContent } = useNavigationBuilder(
    StackRouter,
    props
  );

  const mapper = (route, index) => {
    const style = index === state.index ? styles.show : styles.hide;
    return (
      <View key={route.key} style={[styles.view, style]}>
        {descriptors[route.key].render()}
      </View>
    );
  };

  return (
    <NavigationContent>
      <View style={styles.container}>{state.routes.map(mapper)}</View>
    </NavigationContent>
  );
};

export default createNavigatorFactory(Partial);
