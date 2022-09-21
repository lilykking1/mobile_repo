import React, {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Palette } from '@app/theme';
import { Indicators } from '@app/components';
import { useScrollHandler } from '@app/hooks';
import { OnScroll } from '@app/hooks/useScrollHandler/types';
import { IndicatorsType } from '@app/components/Indicators/components/Indicator/types';
import { Slide } from './components';
import styles from './styles';
import { SCROLL_INTERVAL } from './constants';

const { width, height } = Dimensions.get('screen');

interface SlideShowProps {
  slideHeight?: number | string;
  slides: Array<ReactNode>;
  highlightBorder?: boolean;
  selectedBorderColor?: Palette;
  hasAutoScroll?: boolean;
  scrollEnabled?: boolean;
  hasIndicators?: boolean;
  scrollIntervalInMs?: number;
  containerHeight?: number | string;
  useExternalScroll?: boolean;
  onExternalScroll?: OnScroll;
  currentExternalScroll?: Animated.SharedValue<number>;
  indicatorsType?: IndicatorsType;
  initialScrollIndex: number;
}

export interface SlideShowRefProps {
  nextSlide: () => void;
  previousSlide: () => void;
  currentSlideIndex: Animated.SharedValue<number>;
}

const SlideShow: ForwardRefRenderFunction<SlideShowRefProps, SlideShowProps> = (
  {
    slideHeight,
    slides,
    highlightBorder = false,
    selectedBorderColor,
    hasAutoScroll = false,
    scrollEnabled = true,
    scrollIntervalInMs = SCROLL_INTERVAL,
    containerHeight = height,
    hasIndicators = true,
    useExternalScroll = false,
    onExternalScroll,
    currentExternalScroll,
    indicatorsType = IndicatorsType.PAINT_CURRENT_STEP,
    initialScrollIndex,
  },
  forwardedRef
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [current, onScroll] = useScrollHandler(width);
  const indexFlatListRef = useRef<FlatList>();
  const currentScroll = useExternalScroll ? currentExternalScroll : current;
  const onScrollAction = useExternalScroll ? onExternalScroll : onScroll;

  const getItemLayout = (_, index) => {
    if (selectedIndex === slides.length) {
      return { length: width, offset: width * index, index };
    }
    return {
      length: width * slides.length,
      offset: width * selectedIndex,
      index,
    };
  };

  const previousSliderListIndex = useCallback(() => {
    if (selectedIndex > 0) {
      indexFlatListRef?.current?.scrollToIndex({
        index: selectedIndex - 1,
        animated: true,
      });
      setSelectedIndex((prevSlide: number) => prevSlide + 1);
    } else {
      indexFlatListRef?.current?.scrollToIndex({
        index: slides.length - 1,
        animated: true,
      });
      setSelectedIndex(slides.length - 1);
    }
  }, [selectedIndex, slides.length]);

  const nextSliderListIndex = useCallback(() => {
    if (selectedIndex < slides.length - 1) {
      indexFlatListRef?.current?.scrollToIndex({
        index: selectedIndex + 1,
        animated: true,
      });
      setSelectedIndex((prevSlide: number) => prevSlide + 1);
    } else {
      indexFlatListRef?.current?.scrollToIndex({
        index: 0,
        animated: true,
      });
      setSelectedIndex(0);
    }
  }, [setSelectedIndex, selectedIndex, slides.length]);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  const handleScroll = useCallback(
    ({ viewableItems }) => {
      if (viewableItems && viewableItems.length) {
        const currentViewableItem = viewableItems[0];
        const currentViewableItemIndex = currentViewableItem.index;
        setSelectedIndex(currentViewableItemIndex);
      }
    },
    [setSelectedIndex]
  );

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged: handleScroll },
  ]);

  const slidesToRender = ({ item, index }) => (
    <Slide
      item={item?.component}
      isSelected={highlightBorder && selectedIndex === index}
      width={width}
      height={slideHeight}
      selectedBorderColor={selectedBorderColor}
    />
  );

  const onMomentumScrollEnd = (event) => {
    const newSliderIndex = event.nativeEvent.contentOffset.x
      ? event.nativeEvent.contentOffset.x / width
      : 0;
    setSelectedIndex(newSliderIndex);
  };

  // Use effect in charge of initializing the setInterval method, which will handle the timer.
  useEffect(() => {
    let interval;
    if (hasAutoScroll) {
      interval = setInterval(nextSliderListIndex, scrollIntervalInMs);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAutoScroll]);

  // If the slide the user is currently seeing is greater than the length of the array, we want to go back to the first slide again.
  useEffect(() => {
    if (selectedIndex > slides.length - 1) {
      setSelectedIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  useImperativeHandle(forwardedRef, () => ({
    nextSlide: nextSliderListIndex,
    previousSlide: previousSliderListIndex,
    currentSlideIndex: useExternalScroll ? currentExternalScroll : current,
  }));

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <FlatList
        testID="Onboarding.ExplainerSeriesList"
        onScroll={onScrollAction}
        onMomentumScrollEnd={onMomentumScrollEnd}
        pagingEnabled
        getItemLayout={hasAutoScroll ? getItemLayout : null}
        ref={indexFlatListRef}
        initialScrollIndex={initialScrollIndex}
        snapToInterval={width}
        horizontal
        scrollEnabled={scrollEnabled}
        decelerationRate="fast"
        scrollEventThrottle={32}
        showsHorizontalScrollIndicator={false}
        data={slides}
        initialNumToRender={1}
        keyExtractor={(item) => item.id}
        renderItem={slidesToRender}
        viewabilityConfig={viewabilityConfig}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      {hasIndicators && (
        <View style={styles.dotsContainer}>
          <Indicators
            type={indicatorsType}
            total={slides.length}
            current={currentScroll}
          />
        </View>
      )}
    </View>
  );
};

export default forwardRef(SlideShow);
