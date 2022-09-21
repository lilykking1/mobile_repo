import React, { FC, useCallback, useContext } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Typography } from '@app/components';
import { getTextStyleByTheme } from '@app/components/Slider/components/PercentHeader/utils';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { styles } from './styles';
import { getValueByPercent } from '../../utils';

interface PercentHeaderProps {
  percent: number;
  onValueChange: (value: number | Array<number>) => void;
  maximumValue: number;
}

const PercentHeader: FC<PercentHeaderProps> = ({
  percent,
  onValueChange,
  maximumValue,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const handleOnPress = useCallback(
    (label: number) => onValueChange([getValueByPercent(label, maximumValue)]),
    [maximumValue, onValueChange]
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => handleOnPress(1.1)}>
        <Typography style={getTextStyleByTheme(theme, 1, percent)}>
          1
        </Typography>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleOnPress(25.1)}>
        <Typography style={getTextStyleByTheme(theme, 25, percent)}>
          25
        </Typography>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleOnPress(50.1)}>
        <Typography style={getTextStyleByTheme(theme, 50, percent)}>
          50
        </Typography>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleOnPress(75.1)}>
        <Typography style={getTextStyleByTheme(theme, 75, percent)}>
          75
        </Typography>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleOnPress(99.1)}>
        <Typography style={getTextStyleByTheme(theme, 99, percent)}>
          99
        </Typography>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default observer(PercentHeader);
