/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useContext,
  useState,
  ReactElement,
  ReactNode,
  Children,
  cloneElement,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { View } from 'react-native';
import { Typography, Slider } from '@app/components';
import { RootContext } from '@app/state';
import styles from './styles';
import { SLIDERS_NUMERIC_STEPS, SPACE_DASH } from './constants';
import {
  getActiveMarkStyle,
  getHowMuchToInvestFirstStepStyle,
  getHowMuchToInvestMaximumStepStyle,
  getHowMuchToInvestMediumStepStyle,
} from './utils';

const SliderContainer = (props: {
  caption?: ReactElement;
  children?: ReactElement;
  sliderValue?: Array<any>;
  trackMarks?: Array<any>;
  hasThreePoints?: boolean;
  slider1GraphPoint1?: string;
  slider1GraphPoint2?: string;
  slider1GraphPoint3?: string;
  slider1GraphPoint4?: string;
  howMuchToInvestFirstStep?: string;
  howMuchToInvestMediumStep?: string;
  howMuchToInvestMaximumStep?: string;
  howMuchToInvestMaximumValue?: number;
  slider3GraphPoint1?: string;
  slider3GraphPoint2?: string;
  slider3GraphPoint3?: string;
  slider4GraphPoint1?: string;
  slider4GraphPoint2?: string;
  slider4GraphPoint3?: string;
  slider5GraphPoint1?: string;
  slider5GraphPoint2?: string;
  slider5GraphPoint3?: string;
  slider5GraphPoint4?: string;
}) => {
  const {
    caption,
    sliderValue,
    trackMarks,
    hasThreePoints,
    slider1GraphPoint1,
    slider1GraphPoint2,
    slider1GraphPoint3,
    slider1GraphPoint4,
    howMuchToInvestFirstStep,
    howMuchToInvestMediumStep,
    howMuchToInvestMaximumStep,
    howMuchToInvestMaximumValue,
    slider3GraphPoint1,
    slider3GraphPoint2,
    slider3GraphPoint3,
    slider4GraphPoint1,
    slider4GraphPoint2,
    slider4GraphPoint3,
    slider5GraphPoint1,
    slider5GraphPoint2,
    slider5GraphPoint3,
    slider5GraphPoint4,
    children,
  } = props;
  const [value, setValue] = useState(sliderValue || SLIDERS_NUMERIC_STEPS.zero);
  const [extractedValue, setExtractedValue] = useState<number>(null);

  let renderTrackMarkComponent: ReactNode;

  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const isDarkTheme = theme === 'dark';

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value ||
        (Array.isArray(value) && value[SLIDERS_NUMERIC_STEPS.zero]) ||
        SLIDERS_NUMERIC_STEPS.zero;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? getActiveMarkStyle(theme)
          : styles.inactiveMark;
      return <View style={style} />;
    };
  }

  const childrenSliders = useMemo(
    () =>
      Children.map(children, (child: ReactElement) => {
        if (!!child && child.type === Slider) {
          return cloneElement(child, {
            onValueChange: setValue,
            renderTrackMarkComponent,
            trackMarks,
            value: sliderValue || value,
          });
        }

        return child;
      }),
    [children, renderTrackMarkComponent, sliderValue, trackMarks, value]
  );

  useEffect(() => {
    const val = Number(Array.isArray(value) ? value.join(SPACE_DASH) : value);
    setExtractedValue(val);
  }, [extractedValue, props, value]);

  const slider1GraphPointStyle1 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider1GraphPointStyle2 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider1GraphPointStyle3 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.twentyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.twentyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider1GraphPointStyle4 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const Slider1Values = useCallback(
    () => (
      <View style={styles.graphPointContainer}>
        <Typography size="body2" style={slider1GraphPointStyle1()}>
          {slider1GraphPoint1}
        </Typography>
        <Typography size="body2" style={slider1GraphPointStyle2()}>
          {slider1GraphPoint2}
        </Typography>
        <Typography size="body2" style={slider1GraphPointStyle3()}>
          {slider1GraphPoint3}
        </Typography>
        {hasThreePoints ? null : (
          <Typography size="body2" style={slider1GraphPointStyle4()}>
            {slider1GraphPoint4}
          </Typography>
        )}
      </View>
    ),
    [
      hasThreePoints,
      slider1GraphPoint1,
      slider1GraphPoint2,
      slider1GraphPoint3,
      slider1GraphPoint4,
      slider1GraphPointStyle1,
      slider1GraphPointStyle2,
      slider1GraphPointStyle3,
      slider1GraphPointStyle4,
    ]
  );

  const HowMuchToInvestValues = useCallback(
    () => (
      <View style={styles.graphPointContainer2}>
        <Typography
          size="body2"
          style={getHowMuchToInvestFirstStepStyle(isDarkTheme, extractedValue)}
        >
          {howMuchToInvestFirstStep}
        </Typography>
        <Typography
          size="body2"
          style={getHowMuchToInvestMediumStepStyle(
            hasThreePoints,
            isDarkTheme,
            extractedValue
          )}
        >
          {howMuchToInvestMediumStep}
        </Typography>
        <Typography
          size="body2"
          style={getHowMuchToInvestMaximumStepStyle(
            howMuchToInvestMaximumValue,
            isDarkTheme,
            extractedValue
          )}
        >
          {howMuchToInvestMaximumStep}
        </Typography>
      </View>
    ),
    [
      isDarkTheme,
      extractedValue,
      howMuchToInvestFirstStep,
      hasThreePoints,
      howMuchToInvestMediumStep,
      howMuchToInvestMaximumValue,
      howMuchToInvestMaximumStep,
    ]
  );

  const slider3GraphPointStyle1 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider3GraphPointStyle2 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.fifteenThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.fifteenThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider3GraphPointStyle3 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const Slider3Values = useCallback(
    () => (
      <View style={styles.graphPointContainer3}>
        <Typography size="body2" style={slider3GraphPointStyle1()}>
          {slider3GraphPoint1}
        </Typography>
        <Typography size="body2" style={slider3GraphPointStyle2()}>
          {slider3GraphPoint2}
        </Typography>
        <Typography size="body2" style={slider3GraphPointStyle3()}>
          {slider3GraphPoint3}
        </Typography>
      </View>
    ),
    [
      slider3GraphPoint1,
      slider3GraphPoint2,
      slider3GraphPoint3,
      slider3GraphPointStyle1,
      slider3GraphPointStyle2,
      slider3GraphPointStyle3,
    ]
  );

  const slider4GraphPointStyle1 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider4GraphPointStyle2 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.fifteenThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.fifteenThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider4GraphPointStyle3 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const Slider4Values = useCallback(
    () => (
      <View style={styles.graphPointContainer4}>
        <Typography size="body2" style={slider4GraphPointStyle1()}>
          {slider4GraphPoint1}
        </Typography>
        <Typography size="body2" style={slider4GraphPointStyle2()}>
          {slider4GraphPoint2}
        </Typography>
        <Typography size="body2" style={slider4GraphPointStyle3()}>
          {slider4GraphPoint3}
        </Typography>
      </View>
    ),
    [
      slider4GraphPoint1,
      slider4GraphPoint2,
      slider4GraphPoint3,
      slider4GraphPointStyle1,
      slider4GraphPointStyle2,
      slider4GraphPointStyle3,
    ]
  );

  const slider5GraphPointStyle1 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.zero) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider5GraphPointStyle2 = useCallback(() => {
    if (isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
      return styles.sliderValueHighlight;
    }
    if (!isDarkTheme && extractedValue === SLIDERS_NUMERIC_STEPS.tenThousand) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider5GraphPointStyle3 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.twentyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.twentyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const slider5GraphPointStyle4 = useCallback(() => {
    if (
      isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueHighlight;
    }
    if (
      !isDarkTheme &&
      extractedValue === SLIDERS_NUMERIC_STEPS.thirtyThousand
    ) {
      return styles.sliderValueBlue;
    }
    return styles.graphPointStyle;
  }, [extractedValue, isDarkTheme]);

  const Slider5Values = useCallback(
    () => (
      <View style={styles.graphPointContainerSlider5}>
        <Typography size="body2" style={slider5GraphPointStyle1()}>
          {slider5GraphPoint1}
        </Typography>
        <Typography size="body2" style={slider5GraphPointStyle2()}>
          {slider5GraphPoint2}
        </Typography>
        <Typography size="body2" style={slider5GraphPointStyle3()}>
          {slider5GraphPoint3}
        </Typography>
        {hasThreePoints ? null : (
          <Typography size="body2" style={slider5GraphPointStyle4()}>
            {slider5GraphPoint4}
          </Typography>
        )}
      </View>
    ),
    [
      hasThreePoints,
      slider5GraphPoint1,
      slider5GraphPoint2,
      slider5GraphPoint3,
      slider5GraphPoint4,
      slider5GraphPointStyle1,
      slider5GraphPointStyle2,
      slider5GraphPointStyle3,
      slider5GraphPointStyle4,
    ]
  );

  return (
    <View style={styles.sliderContainer}>
      {caption}
      <Slider1Values />
      <HowMuchToInvestValues />
      <Slider3Values />
      <Slider4Values />
      <Slider5Values />
      {childrenSliders}
    </View>
  );
};

export default SliderContainer;

SliderContainer.defaultProps = {
  children: null,
  caption: null,
  sliderValue: null,
  trackMarks: null,
  hasThreePoints: null,
  slider1GraphPoint1: null,
  slider1GraphPoint2: null,
  slider1GraphPoint3: null,
  slider1GraphPoint4: null,
  howMuchToInvestFirstStep: null,
  howMuchToInvestMediumStep: null,
  howMuchToInvestMaximumStep: null,
  howMuchToInvestMaximumValue: null,
  slider3GraphPoint1: null,
  slider3GraphPoint2: null,
  slider3GraphPoint3: null,
  slider4GraphPoint1: null,
  slider4GraphPoint2: null,
  slider4GraphPoint3: null,
  slider5GraphPoint1: null,
  slider5GraphPoint2: null,
  slider5GraphPoint3: null,
  slider5GraphPoint4: null,
};
