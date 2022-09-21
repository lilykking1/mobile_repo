import React, {
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { View, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { SliderThumb } from '@app/components';
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import { SliderProps as MiblanchardSliderProps } from '@miblanchard/react-native-slider/lib/types';
import { SliderType } from '@app/components/Slider/types';
import {
  getMaximumTrackTintColor,
  getMinimumTrackTintColor,
  getPercentByValue,
  getValueWhenForceSnap,
  isShowCoinIcon,
} from '@app/components/Slider/utils';
import { RootContext } from '@app/state';
import { PercentHeader, PercentFooter } from './components';
import CoinValueInput from './components/CoinValueInput';
import { styles } from './styles';

export interface SliderProps extends MiblanchardSliderProps {
  coin?: string;
  decimalSize?: number;
  sliderType?: SliderType;
  onValueChange?: (value: number) => void;
  withFooterBackground?: boolean;
  canLockValue?: boolean;
  isValueLocked?: boolean;
  customTrackStyle?: ViewStyle;
  setIsValueLocked?: Dispatch<SetStateAction<boolean>>;
  hideTopView?: boolean;
  passValue?: boolean;
  handleChange?: any;
}

const Slider: FC<SliderProps> = ({
  handleChange,
  passValue,
  disabled,
  coin,
  decimalSize = 4,
  sliderType,
  hideTopView,
  onValueChange,
  setIsValueLocked,
  customTrackStyle,
  withFooterBackground = true,
  canLockValue = false,
  isValueLocked = false,
  ...rest
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [isSnappedInValue, setIsSnappedInValue] = useState(false);

  const handleOnValueChange = useCallback(
    (value) => {
      let valueAfterRules = value;

      if (sliderType === SliderType.WITHOUT_INPUT) {
        valueAfterRules = [getValueWhenForceSnap(value[0], rest.maximumValue)];
        setIsSnappedInValue(valueAfterRules[0] !== value[0]);
      }

      onValueChange(valueAfterRules);
      if (passValue) {
        handleChange(value);
      }
    },
    [handleChange, onValueChange, passValue, rest.maximumValue, sliderType]
  );

  const viewPercentFooter = useMemo(
    () =>
      sliderType === SliderType.WITHOUT_INPUT && (
        <PercentFooter withFooterBackground={withFooterBackground} />
      ),
    [sliderType, withFooterBackground]
  );

  const viewThumbComponent = useMemo(
    () => <SliderThumb isSnappedInValue={isSnappedInValue} />,
    [isSnappedInValue]
  );
  const [isUsingSlide, setIsUsingSlide] = useState(false);

  const viewTop = useMemo(
    () =>
      sliderType === SliderType.WITHOUT_INPUT ? (
        <PercentHeader
          percent={getPercentByValue(rest.value[0], rest.maximumValue)}
          onValueChange={handleOnValueChange}
          maximumValue={rest.maximumValue}
        />
      ) : (
        <CoinValueInput
          coin={coin}
          isLevelsValue={sliderType === SliderType.INPUT_ICON_WITH_LEVELS}
          showCoinIcon={isShowCoinIcon(sliderType)}
          value={rest.value[0] || rest.value}
          minimumValue={rest.minimumValue}
          maximumValue={rest.maximumValue}
          onValueChange={onValueChange}
          disabled={disabled}
          decimalSize={decimalSize}
          isUsingSlide={isUsingSlide}
          canLockValue={canLockValue}
          isValueLocked={isValueLocked}
          setIsValueLocked={setIsValueLocked}
        />
      ),
    [
      coin,
      decimalSize,
      disabled,
      handleOnValueChange,
      isUsingSlide,
      onValueChange,
      rest.maximumValue,
      rest.minimumValue,
      rest.value,
      sliderType,
      canLockValue,
      isValueLocked,
      setIsValueLocked,
    ]
  );

  return (
    <View style={styles.container}>
      {hideTopView ? <View style={styles.hideTopView} /> : viewTop}
      <View style={styles.sliderParent}>
        <RNSlider
          renderThumbComponent={() => viewThumbComponent}
          disabled={disabled}
          maximumTrackTintColor={getMaximumTrackTintColor(theme)}
          minimumTrackTintColor={getMinimumTrackTintColor(disabled)}
          trackStyle={{ ...styles.track, ...customTrackStyle }}
          onValueChange={handleOnValueChange}
          onSlidingStart={() => setIsUsingSlide(true)}
          onSlidingComplete={() => setIsUsingSlide(false)}
          {...rest}
        />
      </View>
      {viewPercentFooter}
    </View>
  );
};

export default observer(Slider);
