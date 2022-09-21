import React, {
  FC,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { GestureResponderEvent, View, Pressable } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { observer } from 'mobx-react';
import { Icon, IconButton, Typography, Indicators } from '@app/components';
import Slider from '@app/components/Slider';
import {
  IndicatorsType,
  IndicatorVariant,
} from '@app/components/Indicators/components/Indicator/types';
import { translate } from '@app/i18n';
import { RootContext } from '@app/state';
import { palette } from '@app/theme';
import { Asset } from '@app/models';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  DEFAULT_PRECISION,
  SLIDER_STEP,
  STEP_NEED_ANIMATE_HEADER,
} from './constants';
import styles from './styles';
import { SliderType } from '../Slider/types';
import Background from '../Background';
import {
  interpolateHeaderBorderColor,
  interpolateHeaderButtonColor,
  interpolateHeaderColor,
} from './animations';
import { getIconTint } from './utils';

interface HeaderProps {
  scrollPosition?: Animated.SharedValue<number>;
  current: Animated.SharedValue<number>;
  onPressBack?: () => void;
  title: string;
  indicatorHidden?: boolean;
  iconHidden?: boolean;
  totalIndicators?: number;
  faqPress?: (event: GestureResponderEvent) => any;
  rightIconHidden?: boolean;
  isLastStep?: boolean;
  isFixedHeader?: boolean;
  swapFromCoin?: Asset;
  decimalPrecision?: number;
}

const HeaderSwap: FC<HeaderProps> = ({
  current,
  title,
  scrollPosition,
  onPressBack,
  indicatorHidden,
  iconHidden,
  totalIndicators,
  faqPress,
  rightIconHidden = true,
  swapFromCoin,
  isLastStep = false,
  isFixedHeader = false,
  decimalPrecision = DEFAULT_PRECISION,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const [value, setValue] = useState<number>(0);
  const iconColor = useMemo(() => getIconTint(theme), [theme]);
  const insets = useSafeAreaInsets();

  const headerStyle = { paddingTop: insets.top };

  const animatedHeaderStyle = useAnimatedStyle(() => {
    if (theme === 'light' || !STEP_NEED_ANIMATE_HEADER[current.value]) {
      return {
        backgroundColor: palette.transparent,
        borderBottomWidth: 0,
      };
    }
    if (isLastStep && isFixedHeader) {
      return {
        backgroundColor: palette.royalBlue[950],
        borderBottomWidth: 1,
        borderColor: palette.royalBlue[950],
      };
    }

    return {
      backgroundColor: interpolateHeaderColor(scrollPosition?.value),
      borderBottomWidth: 1,
      borderColor: interpolateHeaderBorderColor(scrollPosition?.value),
    };
  });

  const animatedHeaderButtonStyle = useAnimatedStyle(() => {
    if (theme === 'light') {
      return {
        backgroundColor: palette.grey[300],
      };
    }
    if (isLastStep && isFixedHeader) {
      return {
        backgroundColor: palette.royalBlue[1000],
      };
    }
    if (!STEP_NEED_ANIMATE_HEADER[current.value]) {
      return {
        backgroundColor: palette.royalBlue[950],
      };
    }

    return {
      backgroundColor: interpolateHeaderButtonColor(scrollPosition?.value),
    };
  });

  const handleOnValueChange = useCallback((sliderValue) => {
    setValue(sliderValue);
  }, []);

  const iconHeader = (
    <Icon.ChevronLeft width={22} height={22} tint={iconColor} />
  );

  useEffect(() => {
    setValue(Number(swapFromCoin?.coinAmount));
  }, [swapFromCoin?.coinAmount]);

  const renderSlider = useCallback(() => {
    if (isLastStep && isFixedHeader) {
      return (
        <>
          <View style={styles.sliderContainer}>
            <View style={styles.containerHeader}>
              <Typography variant="grey.600" size="body2" strong>
                {translate(
                  'screens.stackedWallet.manyToOneSwap.slidersScreen.title'
                )}
              </Typography>
            </View>
            <Slider
              customTrackStyle={styles.trackStyle}
              disabled={false}
              sliderType={SliderType.INPUT_ICON_WITH_LEVELS}
              maximumValue={swapFromCoin?.coinAmount}
              minimumValue={swapFromCoin?.coinAmount * 0.05}
              step={SLIDER_STEP}
              decimalSize={decimalPrecision}
              coin={swapFromCoin.symbol}
              value={value}
              onValueChange={handleOnValueChange}
              animationType="spring"
            />
          </View>
          <Background style={styles.divider} />
        </>
      );
    }
    return null;
  }, [
    isLastStep,
    swapFromCoin,
    value,
    handleOnValueChange,
    isFixedHeader,
    decimalPrecision,
  ]);

  return (
    <Animated.View style={[animatedHeaderStyle, headerStyle]}>
      <View style={iconHidden ? styles.hiddenIcon : styles.container}>
        {iconHidden ? null : (
          <Animated.View style={[styles.iconBtn, animatedHeaderButtonStyle]}>
            <IconButton
              size="xlarge"
              containerStyle={styles.iconBtn}
              startIcon={iconHeader}
              onPress={onPressBack}
            />
          </Animated.View>
        )}
        <View
          style={
            rightIconHidden ? styles.headerTitleIconHidden : styles.headerTitle
          }
        >
          <Typography size="h6" strong>
            {title}
          </Typography>
        </View>

        {rightIconHidden ? (
          <View style={styles.faqIcon}>
            <Pressable />
          </View>
        ) : (
          <View style={styles.faqIcon}>
            <Pressable onPress={faqPress}>
              <Icon.FAQIcon />
            </Pressable>
          </View>
        )}
      </View>
      <View
        style={
          rightIconHidden
            ? styles.indicatorContainer
            : styles.indicatorContainerHidden
        }
      >
        {indicatorHidden ? null : (
          <Indicators
            variant={IndicatorVariant.SMALL}
            total={totalIndicators}
            current={current}
            type={IndicatorsType.PAINT_ALL_STEPS}
          />
        )}
      </View>
      {renderSlider()}
    </Animated.View>
  );
};

export default observer(HeaderSwap);
