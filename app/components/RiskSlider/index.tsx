import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import { SliderThumb } from '@app/components';
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import { SliderProps as MiblanchardSliderProps } from '@miblanchard/react-native-slider/lib/types';
import { RootContext } from '@app/state';
import { useBraze } from '@app/hooks';
import {
  AmplitudeRiskAssessmentEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { BrazeBuildMyPortfolioEvents } from '@app/utils/braze/events';
import {
  getMaximumTrackTintColor,
  getMinimumTrackTintColor,
  getTrackStyle,
  getValueWhenForceSnap,
} from './utils';
import { SliderFooter, SliderHeader } from './components';
import { styles } from './styles';

export interface RiskSliderProps extends MiblanchardSliderProps {
  onValueChange: (value: number) => void;
  customSteps: number[];
  showCurrentNumber?: boolean;
  defaultRisk: number;
  handleOpenReAssessmentModal: () => void;
  setIsLowerRisk: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialRiskValue: React.Dispatch<React.SetStateAction<number>>;
  isSnapToEnabled?: boolean;
}

const RiskSlider: FC<RiskSliderProps> = ({
  disabled,
  onValueChange,
  customSteps,
  showCurrentNumber = false,
  defaultRisk,
  handleOpenReAssessmentModal,
  setIsLowerRisk,
  setInitialRiskValue,
  isSnapToEnabled = false,
  ...rest
}) => {
  const { logBrazeCustomEvent } = useBraze();
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [isSnappedInValue, setIsSnappedInValue] = useState(false);

  const handleOpenModal = useCallback(
    (value) => {
      const isUnderDefaultValue = value[0] < defaultRisk;
      setIsLowerRisk(isUnderDefaultValue);
      handleOpenReAssessmentModal();
    },
    [defaultRisk, handleOpenReAssessmentModal, setIsLowerRisk]
  );

  const handleOnValueChange = useCallback(
    (value) => {
      let valueAfterRules = value;

      if (isSnapToEnabled) {
        valueAfterRules = [
          getValueWhenForceSnap(value[0], rest.maximumValue, customSteps),
        ];

        setIsSnappedInValue(valueAfterRules[0] !== value[0]);
      }

      onValueChange(valueAfterRules);
    },
    [customSteps, isSnapToEnabled, onValueChange, rest.maximumValue]
  );

  const handleSlidingStart = useCallback(
    (value) => {
      setInitialRiskValue(value);
    },
    [setInitialRiskValue]
  );

  const handleSlidingComplete = useCallback(
    (value) => {
      logBrazeCustomEvent(BrazeBuildMyPortfolioEvents.SLIDER_RISK_NUMBER);
      logAmplitudeEvent(AmplitudeRiskAssessmentEvents.SLIDER_RISK_NUMBER);
      handleOpenModal(value);
    },
    [handleOpenModal, logBrazeCustomEvent]
  );

  const handleOnHeaderValueChange = useCallback(
    (value) => {
      handleOnValueChange(value);
      handleOpenModal(value);
    },
    [handleOpenModal, handleOnValueChange]
  );

  const Footer = useMemo(() => <SliderFooter />, []);

  const SliderThumbComponent = useMemo(
    () => (
      <SliderThumb
        isSnappedInValue={isSnappedInValue}
        showCurrentNumber={showCurrentNumber}
        currentNumber={rest.value[0]}
        customSteps={customSteps}
      />
    ),
    [customSteps, isSnappedInValue, rest.value, showCurrentNumber]
  );

  const Header = useMemo(
    () => (
      <SliderHeader
        percent={rest.value[0]}
        onValueChange={handleOnHeaderValueChange}
        customHeaderSteps={customSteps}
      />
    ),
    [customSteps, handleOnHeaderValueChange, rest.value]
  );

  return (
    <View style={styles.container}>
      {Header}
      <View style={styles.sliderParent}>
        <RNSlider
          renderThumbComponent={() => SliderThumbComponent}
          disabled={disabled}
          maximumTrackTintColor={getMaximumTrackTintColor(theme)}
          minimumTrackTintColor={getMinimumTrackTintColor(disabled)}
          trackStyle={getTrackStyle(theme)}
          onValueChange={handleOnValueChange}
          onSlidingStart={handleSlidingStart}
          onSlidingComplete={handleSlidingComplete}
          {...rest}
        />
      </View>
      {Footer}
    </View>
  );
};

export default observer(RiskSlider);
