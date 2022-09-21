import React, { FC } from 'react';
import { FlatList, View } from 'react-native';

import { ContainerProps } from '../../types';
import styles from './styles';

const FlatListContainer: FC<ContainerProps> = ({
  stickyHeader,
  regularHeader,
  content,
  onScroll,
}) => (
  <View style={styles.container}>
    {stickyHeader}

    <FlatList
      data={[]}
      renderItem={null}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      ListHeaderComponent={regularHeader}
      ListFooterComponent={content}
    />
  </View>
);

export default FlatListContainer;
