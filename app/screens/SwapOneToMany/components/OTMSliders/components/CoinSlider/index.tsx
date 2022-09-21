import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SliderType } from '@app/components/Slider/types';
import { DECIMAL_PRECISION } from '@app/screens/SwapManyToOne/components/MTOSliders/constants';
import Slider from '@app/components/Slider';
import { Asset } from '@app/models';
import { SLIDER_MINIMUM_VALUE, SLIDER_STEP } from './constants';
import styles from './styles';

export interface InitialValueSlider {
  value: number;
  timestamp: number;
}

interface CoinSliderProps {
  item: Asset;
  initialValue: InitialValueSlider;
  onValueChange: (sliderValue: number) => void;
  isFirstIndex?: boolean;
}

const CoinSlider: FC<CoinSliderProps> = ({
  item,
  initialValue,
  onValueChange,
  isFirstIndex = false,
}) => {
  const [isValueLocked, setIsValueLocked] = useState(false);
  const [value, setValue] = useState<number>(initialValue?.value || 0);

  const firstIndexContainerStyle = isFirstIndex && { marginTop: -10 };

  useEffect(() => setValue(initialValue?.value || 0), [
    initialValue.value,
    initialValue.timestamp,
  ]);

  const handleOnValueChange = useCallback(
    (sliderValue) => {
      onValueChange(sliderValue);
      setValue(sliderValue);
    },
    [onValueChange]
  );

  return (
    <View style={[styles.container, firstIndexContainerStyle]}>
      <Slider
        disabled={isValueLocked}
        sliderType={SliderType.INPUT_WITH_ICON}
        maximumValue={item.coinAmount}
        minimumValue={SLIDER_MINIMUM_VALUE}
        step={SLIDER_STEP}
        decimalSize={DECIMAL_PRECISION}
        coin={item.symbol}
        value={value}
        onValueChange={handleOnValueChange}
        animationType="spring"
        canLockValue
        isValueLocked={isValueLocked}
        setIsValueLocked={setIsValueLocked}
      />
    </View>
  );
};

export default memo(CoinSlider);
