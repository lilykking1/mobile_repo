import React, { FC, useCallback, useContext } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Typography } from '@app/components';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { getTextStyleByTheme } from './utils';
import { styles } from './styles';

interface SliderHeaderProps {
  percent: number;
  onValueChange: (value: number | Array<number>) => void;
  customHeaderSteps?: number[];
}

const SliderHeader: FC<SliderHeaderProps> = ({
  percent,
  onValueChange,
  customHeaderSteps,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const handleOnPress = useCallback((label: number) => onValueChange([label]), [
    onValueChange,
  ]);

  return (
    <View style={styles.container}>
      {customHeaderSteps.map((customStep, index) => (
        <TouchableWithoutFeedback
          key={customStep}
          onPress={() => handleOnPress(customStep)}
        >
          <Typography
            size="small"
            style={getTextStyleByTheme(
              theme,
              customStep,
              percent,
              customHeaderSteps,
              customStep,
              index
            )}
          >
            {customStep}
          </Typography>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default observer(SliderHeader);
