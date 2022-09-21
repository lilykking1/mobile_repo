import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { getStyle } from './utils';

interface IndicatorProps {
  isSelected: boolean;
  isAddExchangeSelected: boolean;
}

const Indicator: FC<IndicatorProps> = ({
  isSelected = false,
  isAddExchangeSelected = false,
}) => {
  const baseStyles = useMemo(
    () => getStyle(isSelected, isAddExchangeSelected),
    [isAddExchangeSelected, isSelected]
  );

  return <View style={baseStyles} />;
};

export default Indicator;
