/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { FlatListContainer, ScrollViewContainer } from './components';
import { ContainerProps } from './types';

interface ContainerWithScrollableHeaderProps extends ContainerProps {
  useFlatList?: boolean;
}

const ContainerWithScrollableHeader: FC<ContainerWithScrollableHeaderProps> = ({
  useFlatList,
  ...props
}) =>
  useFlatList ? (
    <FlatListContainer {...props} />
  ) : (
    <ScrollViewContainer {...props} />
  );

export default ContainerWithScrollableHeader;
