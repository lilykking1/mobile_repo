import React, { FC, useMemo, useCallback, useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/core';

import { translate } from '@app/i18n';
import { SlideShowRefProps } from '@app/components/SlideShow';
import { SlideShow, HeaderSwap, Background } from '@app/components';
import { useScrollHandler } from '@app/hooks';
import useScrollHandlerVertical from '@app/hooks/useScrollHandlerVertical';
import { Routes } from '@app/navigation/types';

import { palette } from '@app/theme';
import { Asset } from '@app/models';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import OTMSelectFrom from './components/OTMSelectFrom';
import styles from './styles';
import OTMSelectTo from './components/OTMSelectTo';
import OTMSliders from './components/OTMSliders';
import { STEPS_NUMBER } from './constants';

const { width, height } = Dimensions.get('screen');

const SwapOneToMany: FC = () => {
  const [currentScrollY, onScrollY] = useScrollHandlerVertical(height);
  const slideShowRef = useRef<SlideShowRefProps>(null);
  const navigation = useNavigation<NavigationProp<Routes>>();

  const [current, onScroll] = useScrollHandler(width);
  const [swapFromCoin, setSelectedToCoinFrom] = useState<Asset>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedToCoin, setSelectedToCoinTo] = useState<Asset[]>();

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

  const handleSelectFromCoin = useCallback(
    (selectedCoin: Asset) => {
      setSelectedToCoinFrom(selectedCoin);
      nextSlide();
    },
    [nextSlide]
  );

  const handleSelectToCoin = useCallback(
    (selectedCoin: Asset[]) => {
      setSelectedToCoinTo(selectedCoin);
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
            <OTMSelectFrom handleSelectToCoin={handleSelectFromCoin} />
          </View>
        ),
      },
      {
        id: 'stepTwo',
        component: (
          <View style={styles.content}>
            <OTMSelectTo handleSelectToCoins={handleSelectToCoin} />
          </View>
        ),
      },
      {
        id: 'stepThree',
        component: (
          <View style={styles.content}>
            <OTMSliders onScroll={onScrollY} selectedToCoins={selectedToCoin} />
          </View>
        ),
      },
    ],
    [handleSelectFromCoin, handleSelectToCoin, onScrollY, selectedToCoin]
  );

  const isLastStep = useMemo(() => currentIndex === slides.length - 1, [
    currentIndex,
    slides.length,
  ]);

  const bottomContainerStyle = { paddingBottom: isLastStep ? 0 : bottom };

  return (
    <Background
      style={[styles.container, bottomContainerStyle]}
      secondary={isLastStep}
      altLight={palette.white}
    >
      <HeaderSwap
        isFixedHeader
        isLastStep={isLastStep}
        swapFromCoin={swapFromCoin}
        scrollPosition={currentScrollY}
        title={translate(
          'screens.stackedWallet.oneToManySelectFrom.headerTitle'
        )}
        onPressBack={previousSlide}
        current={current}
        totalIndicators={STEPS_NUMBER}
      />
      <View style={styles.container}>
        <SlideShow
          ref={slideShowRef}
          slides={slides}
          hasAutoScroll={false}
          scrollEnabled={false}
          hasIndicators={false}
          containerHeight="100%"
          slideHeight="100%"
          useExternalScroll
          onExternalScroll={onScroll}
          currentExternalScroll={current}
          initialScrollIndex={0}
        />
      </View>
    </Background>
  );
};

export default SwapOneToMany;
