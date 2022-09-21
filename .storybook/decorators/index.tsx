import React, { ReactNode } from 'react';
// Using type from @storybook/addon added by @storybook/react-native
// eslint-disable-next-line import/no-extraneous-dependencies
import { DecoratorFunction } from '@storybook/addons';

import UseCase from '../UseCase';

export const withView: DecoratorFunction<ReactNode> = (component, { kind, name }) => (
  <UseCase title={kind} subtitle={name}>
    {component()}
  </UseCase>
);

export const withWideView: DecoratorFunction<ReactNode> = (
  component,
  { kind, name }
) => (
  <UseCase title={kind} subtitle={name} wide>
    {component()}
  </UseCase>
);

export const withFlatList: DecoratorFunction<ReactNode> = (
  component,
  { kind, name }
) => (
  <UseCase title={kind} subtitle={name} flatList>
    {component()}
  </UseCase>
);

