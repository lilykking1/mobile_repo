import React, { FC, useCallback, useRef, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  LayoutChangeEvent,
} from 'react-native';

import { translate } from '@app/i18n';
import { Background, Typography } from '@app/components';

import { CoinInfo } from '@app/models';
import useStickyHandler from '@app/hooks/useStickyHandler';
import styles from './styles';
import { AllCoins } from '..';

interface SearchCoinsProps {
  coinsList: CoinInfo[];
  onSort: () => void;
}

const SearchCoins: FC<SearchCoinsProps> = ({ coinsList, onSort }) => {
  const listRef = useRef<FlatList>();
  const [headerHeight, setHeaderHeight] = useState(0);

  const { handleScrollWithFlatList } = useStickyHandler(listRef, 0);

  const renderSearchResult = useCallback(() => {
    if (coinsList?.length >= 1) {
      return (
        <AllCoins
          coins={coinsList}
          ref={listRef}
          height={headerHeight}
          onScroll={handleScrollWithFlatList}
        />
      );
    }
    return (
      <KeyboardAvoidingView style={styles.emptyView} behavior="position">
        <Typography size="body1" variant="grey.600" style={styles.emptyText}>
          No results found
        </Typography>
      </KeyboardAvoidingView>
    );
  }, [coinsList, handleScrollWithFlatList, headerHeight]);

  const handleHeaderLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      setHeaderHeight(nativeEvent.layout.height);
    },
    []
  );

  return (
    <>
      <Background style={styles.listHeader} onLayout={handleHeaderLayout}>
        <Typography size="h6" strong>
          {translate('marketWatch.searchResults')}
        </Typography>
        <TouchableOpacity onPress={onSort}>
          <Typography variant="grey.600">
            {translate('marketWatch.sort')}
          </Typography>
        </TouchableOpacity>
      </Background>
      {renderSearchResult()}
    </>
  );
};

export default SearchCoins;
