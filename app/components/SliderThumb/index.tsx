import React, { FC, useContext, useMemo } from 'react';
import { View } from 'react-native';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import { Shadow } from 'react-native-shadow-2';
import { Typography } from '@app/components';
import { styles } from './styles';
import { getThumbDetailColor } from './utils';
import {
  SHADOW_COLOR_WITH_ALPHA,
  SHADOW_DISTANCE,
  SHADOW_OFFSET_X,
  SHADOW_OFFSET_Y,
} from './constants';

interface SliderThumbProps {
  isSnappedInValue: boolean;
  showCurrentNumber?: boolean;
  currentNumber?: number;
  customSteps?: number[];
}

const SliderThumb: FC<SliderThumbProps> = ({
  isSnappedInValue,
  currentNumber,
  showCurrentNumber,
  customSteps,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const styleThumbDetail = useMemo(
    () => ({
      ...styles.thumbDetail,
      backgroundColor: getThumbDetailColor(theme, isSnappedInValue),
    }),
    [isSnappedInValue, theme]
  );

  const viewThumbDetail = useMemo(() => <View style={styleThumbDetail} />, [
    styleThumbDetail,
  ]);

  return (
    <Shadow
      distance={SHADOW_DISTANCE}
      startColor={SHADOW_COLOR_WITH_ALPHA}
      offset={[SHADOW_OFFSET_X, SHADOW_OFFSET_Y]}
    >
      <View style={styles.thumb}>
        {!isSnappedInValue &&
          showCurrentNumber &&
          customSteps &&
          !customSteps.includes(currentNumber) && (
            <View style={styles.currentNumber}>
              <Typography size="small">{currentNumber}</Typography>
            </View>
          )}
        <View style={styles.thumb}>
          {viewThumbDetail}
          {viewThumbDetail}
          {viewThumbDetail}
        </View>
      </View>
    </Shadow>
  );
};

export default observer(SliderThumb);
