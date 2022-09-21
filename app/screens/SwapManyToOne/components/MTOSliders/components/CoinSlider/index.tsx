import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { SliderType } from '@app/components/Slider/types';
import { DECIMAL_PRECISION } from '@app/screens/SwapManyToOne/components/MTOSliders/constants';
import Slider from '@app/components/Slider';
import { Asset } from '@app/models';
import { SLIDER_MINIMUM_VALUE, SLIDER_STEP } from './constants';

export interface InitialValueSlider {
  value: number;
  timestamp: number;
}

interface CoinSliderProps {
  item: Asset;
  initialValue: InitialValueSlider;
  onValueChange: (sliderValue: number) => void;
}

const CoinSlider: FC<CoinSliderProps> = ({
  item,
  initialValue,
  onValueChange,
}) => {
  const [value, setValue] = useState<number>(initialValue?.value || 0);

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
    <Slider
      disabled={false}
      sliderType={SliderType.INPUT_WITH_ICON}
      maximumValue={item?.coinAmount}
      minimumValue={SLIDER_MINIMUM_VALUE}
      step={SLIDER_STEP}
      decimalSize={DECIMAL_PRECISION}
      coin={item.symbol}
      value={value}
      onValueChange={handleOnValueChange}
      animationType="spring"
    />
  );
};

export default memo(CoinSlider);
