import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import { ContainerProps } from '../../types';

const ScrollViewContainer: FC<ContainerProps> = ({
  stickyHeader,
  regularHeader,
  content,
  onScroll,
}) => (
  <ScrollView
    onScroll={onScroll}
    stickyHeaderIndices={[0]}
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={25}
  >
    {stickyHeader}
    {regularHeader}
    {content}
  </ScrollView>
);

export default ScrollViewContainer;
