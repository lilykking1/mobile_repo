/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { FlatList, StyleProp, ViewStyle, ScrollViewProps } from 'react-native';

import { getHeaderStyles, getStyles } from './utils';

interface ListProps extends ScrollViewProps {
  items: any[];
  renderItem: ({ item }: { item: any }) => React.ReactElement;
  headerComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  headerComponentCustomStyle?: ViewStyle;
  customContentStyle?: ViewStyle;
  emptyListView?: React.ComponentType<any> | React.ReactElement | null;
  customStyle?: StyleProp<ViewStyle>;
  keyExtractor?: (item: any, index: number) => string;
}

const List: FC<ListProps> = ({
  items,
  renderItem,
  headerComponent,
  headerComponentCustomStyle,
  emptyListView,
  customStyle,
  keyExtractor,
  customContentStyle,
  ...rest
}) => {
  const isListEmpty = items?.length === 0;
  const baseStyles = getStyles(
    !!headerComponent,
    isListEmpty,
    customContentStyle
  );
  const headerStyles = getHeaderStyles(
    !!headerComponent,
    headerComponentCustomStyle
  );

  return (
    <FlatList
      style={customStyle}
      contentContainerStyle={baseStyles}
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={headerComponent}
      ListHeaderComponentStyle={headerStyles}
      ListEmptyComponent={emptyListView}
      {...rest}
    />
  );
};

export default List;
