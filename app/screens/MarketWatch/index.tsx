import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  GetCoinsInfoDetailsQuery,
  GetCoinsInfoQueryVariables,
} from '@app/graphql/types/queries';
import { Modal } from '@app/modals';
import { CoinInfo } from '@app/models/Coin';
import { translate } from '@app/i18n';
import { Background, LoadingModal, Typography } from '@app/components';

import useStickyHandler from '@app/hooks/useStickyHandler';
import { OptionIds } from '@app/modals/SortBy/types';
import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { AmplitudeMarketWatchProps } from '@app/utils/amplitude/constants/marketWatch/properties';
import { GET_COINS_INFO } from './queries';
import styles from './styles';
import { filterCoinsByCoinAndName, sortCoinsBySelectedOption } from './utils';
import Header from './fragments/Header';
import { AllCoins, Sticky, TopMovers, TrendingCoins } from './fragments';
import { SORT_CHOICE_DESCRIPTION, STICKY_FILTER_THRESHOLD } from './constants';
import SearchCoins from './fragments/SearchCoins';

const MarketWatch: FC = () => {
  const listRef = useRef<FlatList>();
  const [searchText, setSearchText] = useState<string>('');
  const [usAllowed, setUsAllowed] = useState<boolean>(false);
  const [coinsList, setCoinsList] = useState<CoinInfo[]>([]);
  const [trendingList, setTrendingList] = useState<CoinInfo[]>([]);
  const [topMoversList, setTopMoversList] = useState<CoinInfo[]>([]);

  const {
    handleHeaderLayout,
    scroll,
    handleScrollWithFlatList,
    headerHeight,
    forceScrollTop,
  } = useStickyHandler(listRef, STICKY_FILTER_THRESHOLD);
  const sortByOptionsBottomSheetFilterRef = useRef<BottomSheetModal>(null);
  const [selectedSortOption, setSelectedSortOption] = useState<string>(
    translate(OptionIds.SORT_BY_NAME_ASC)
  );

  const handleCloseSortByOptionsFilter = useCallback(
    () => sortByOptionsBottomSheetFilterRef.current?.close(),
    []
  );

  const handleOpenSortByOptionsFilter = useCallback(
    () => sortByOptionsBottomSheetFilterRef.current?.present(),
    []
  );

  const handleSelectSortByOptions = useCallback(
    (selectedSortByOptions) => {
      setSelectedSortOption(selectedSortByOptions);
      const newCoinList = [...coinsList];
      newCoinList.sort((a, b) =>
        sortCoinsBySelectedOption(a, b, selectedSortByOptions)
      );
      setCoinsList(newCoinList);
      handleCloseSortByOptionsFilter();

      const eventProperties = {};
      eventProperties[`${AmplitudeMarketWatchProps.SORT_CHOICE}`] =
        SORT_CHOICE_DESCRIPTION[selectedSortByOptions];

      logAmplitudeEvent(
        AmplitudeMarketWatchEvents.CLICK_SORT_COINS,
        eventProperties
      );
    },
    [handleCloseSortByOptionsFilter, coinsList]
  );

  const handleSearch = (val: string) => {
    setSearchText(val);
    if (!val) {
      forceScrollTop();
    }
  };

  // TODO: refactor on BE task,
  // currently using .env.staging --> GRAPHQL_API_ENDPOINT=https://api.stage.stackedinvest.com/graphql
  const { loading, error, data } = useQuery<
    GetCoinsInfoDetailsQuery,
    GetCoinsInfoQueryVariables
  >(GET_COINS_INFO, {
    variables: { limit: 16, page: 1, usAllowed },
  });

  useEffect(() => {
    if (loading || error) {
      return;
    }

    let newList = [];
    if (searchText) {
      newList = filterCoinsByCoinAndName(data.coinsInfo.coins, searchText);
    } else {
      newList = data.coinsInfo.coins;
    }

    setCoinsList(newList);
  }, [searchText, data, loading, error]);

  useEffect(() => {
    if (loading || error) {
      return;
    }

    const newTrendingList = data.coinsInfo.coins.slice(0, 8);
    const newTopMoversList = data.coinsInfo.coins.slice(8, 16);
    setTrendingList(newTrendingList);
    setTopMoversList(newTopMoversList);
  }, [data, loading, error]);

  const isSearching = useMemo(() => !!searchText, [searchText]);

  return (
    <>
      <Background style={styles.container}>
        <Header
          searchText={searchText}
          setSearchText={handleSearch}
          usAllowed={usAllowed}
          usAllowedCallback={setUsAllowed}
        />
        {loading ? (
          <LoadingModal />
        ) : (
          <View style={styles.content}>
            {!isSearching ? (
              <>
                <Sticky scroll={scroll} onLayout={handleHeaderLayout}>
                  <Background style={styles.scrollContent}>
                    <TrendingCoins usAllowed={usAllowed} coins={trendingList} />
                    <TopMovers usAllowed={usAllowed} coins={topMoversList} />
                  </Background>
                  <Background style={styles.allRow}>
                    <Typography size="h6" strong>
                      {translate('marketWatch.forAll')}
                    </Typography>
                    <TouchableOpacity onPress={handleOpenSortByOptionsFilter}>
                      <Typography variant="grey.600">
                        {translate('marketWatch.sort')}
                      </Typography>
                    </TouchableOpacity>
                  </Background>
                </Sticky>
                <AllCoins
                  coins={coinsList}
                  ref={listRef}
                  onScroll={handleScrollWithFlatList}
                  height={headerHeight}
                  usAllowed={usAllowed}
                />
              </>
            ) : (
              <SearchCoins
                coinsList={coinsList}
                onSort={handleOpenSortByOptionsFilter}
              />
            )}
          </View>
        )}
      </Background>
      <Modal.SortBy
        ref={sortByOptionsBottomSheetFilterRef}
        selected={selectedSortOption}
        onSelect={handleSelectSortByOptions}
      />
    </>
  );
};

export default MarketWatch;
