import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import { translate } from '@app/i18n';
import { SlideShowRefProps } from '@app/components/SlideShow';
import { Background, HeaderSwap, SlideShow } from '@app/components';
import { useScrollHandler, useWallet } from '@app/hooks';
import { palette } from '@app/theme';
import MTOSliders from '@app/screens/SwapManyToOne/components/MTOSliders';
import { Routes } from '@app/navigation/types';
import useScrollHandlerVertical from '@app/hooks/useScrollHandlerVertical';
import { Asset } from '@app/models';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MTOSelectFrom, MTOSelectTo } from './components';
import { getCoinsDataList } from './mock/data';
import styles from './styles';
import { STEPS_NUMBER } from './constants';

const { width, height } = Dimensions.get('screen');

const SwapManyToOne: FC = () => {
  const {
    wallet: { tokens },
  } = useWallet();
  const [currentScrollY, onScrollY] = useScrollHandlerVertical(height);
  const slideShowRef = useRef<SlideShowRefProps>(null);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [current, onScroll] = useScrollHandler(width);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [swapFromCoins, setSwapFromCoins] = useState<Array<Asset>>();
  const [selectedToCoin, setSelectedToCoin] = useState<Asset>({
    symbol: '',
    name: '',
    coinAmount: 0,
    fiatAmount: 0,
  });

  const { bottom } = useSafeAreaInsets();

  const nextSlide = useCallback(() => {
    const actualIndex = Number(
      slideShowRef?.current.currentSlideIndex.value.toFixed(1)
    );
    setCurrentIndex(actualIndex + 1);
    slideShowRef?.current?.nextSlide();
  }, [slideShowRef]);

  const previousSlide = useCallback(() => {
    if (slideShowRef?.current.currentSlideIndex.value === 0) {
      navigation.goBack();
    } else {
      const actualIndex = Number(
        slideShowRef?.current.currentSlideIndex.value.toFixed(1)
      );
      setCurrentIndex(actualIndex - 1);
      slideShowRef?.current?.previousSlide();
    }
  }, [slideShowRef, navigation]);

  const handleSwapFromCoin = useCallback((selectedCoin: Array<Asset>) => {
    setSwapFromCoins(selectedCoin);
  }, []);

  const handleSelectToCoin = useCallback(
    (selectedCoin: Asset) => {
      setSelectedToCoin(selectedCoin);
      nextSlide();
    },
    [nextSlide]
  );

  const slides = useMemo(
    () => [
      {
        id: 'stepOne',
        component: (
          <View style={styles.content}>
            <MTOSelectFrom
              handleSelectCoins={handleSwapFromCoin}
              onPressNext={nextSlide}
            />
          </View>
        ),
      },
      {
        id: 'stepTwo',
        component: (
          <View style={styles.content}>
            <MTOSelectTo
              coinBalances={getCoinsDataList(tokens)}
              handleSelectCoin={handleSelectToCoin}
            />
          </View>
        ),
      },
      {
        id: 'stepThree',
        component: (
          <View style={styles.content}>
            <MTOSliders
              onScroll={onScrollY}
              selectedToCoin={selectedToCoin}
              swapFromCoins={swapFromCoins}
            />
          </View>
        ),
      },
    ],
    [
      handleSelectToCoin,
      handleSwapFromCoin,
      nextSlide,
      onScrollY,
      selectedToCoin,
      swapFromCoins,
      tokens,
    ]
  );

  const isLastStep = useMemo(() => currentIndex === slides.length - 1, [
    currentIndex,
    slides.length,
  ]);

  const bottomContainerStyle = { paddingBottom: isLastStep ? 0 : bottom };

  return (
    <Background
      style={[styles.container, bottomContainerStyle]}
      altLight={palette.white}
    >
      <HeaderSwap
        totalIndicators={STEPS_NUMBER}
        scrollPosition={currentScrollY}
        onPressBack={previousSlide}
        current={current}
        title={translate('screens.stackedWallet.manyToOneSwap.headerTitle')}
      />

      <SlideShow
        ref={slideShowRef}
        slides={slides}
        hasAutoScroll={false}
        scrollEnabled={false}
        hasIndicators={false}
        containerHeight="100%"
        slideHeight="90%"
        useExternalScroll
        onExternalScroll={onScroll}
        currentExternalScroll={current}
        initialScrollIndex={0}
      />
    </Background>
  );
};

export default SwapManyToOne;
