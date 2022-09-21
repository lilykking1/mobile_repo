import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import { Indicator } from './components';
import styles from './styles';
import { getArrayFromNumber, getItemKey, getSlicedIndicators } from './utils';

interface IndicatorsProps {
  itemsQuantity: number;
  selectedIndex: number;
}

const Indicators: FC<IndicatorsProps> = ({ itemsQuantity, selectedIndex }) => {
  const indicatorsArray = getArrayFromNumber(itemsQuantity);
  const indicatorsQuantity = itemsQuantity - 1;

  const isAddExchangeSelected = selectedIndex === itemsQuantity - 1;

  const indicatorsBeforeSelected = useMemo(
    () =>
      getSlicedIndicators({
        indicators: indicatorsArray,
        startIndex: 0,
        endIndex: selectedIndex,
        isAddExchangeSelected,
      }),
    [indicatorsArray, isAddExchangeSelected, selectedIndex]
  );

  const indicatorsAfterSelected = useMemo(() => {
    const lastIndicatorIndex = indicatorsQuantity - 1;
    return getSlicedIndicators({
      indicators: indicatorsArray,
      startIndex: selectedIndex,
      endIndex: lastIndicatorIndex,
      isAddExchangeSelected,
    });
  }, [
    indicatorsArray,
    indicatorsQuantity,
    isAddExchangeSelected,
    selectedIndex,
  ]);

  const selectedIndicator = useMemo(
    () => (
      <Indicator
        isAddExchangeSelected={isAddExchangeSelected}
        isSelected
        key={getItemKey()}
      />
    ),
    [isAddExchangeSelected]
  );

  return (
    <View style={styles.container}>
      <View style={styles.beforeContainer}>{indicatorsBeforeSelected}</View>

      {selectedIndicator}

      <View style={styles.afterContainer}>{indicatorsAfterSelected}</View>
    </View>
  );
};

export default Indicators;
