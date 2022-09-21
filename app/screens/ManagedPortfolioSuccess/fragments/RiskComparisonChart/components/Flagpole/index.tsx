import React, { FC, useContext } from 'react';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { Line, Circle, Text } from 'react-native-svg';
import { palette } from '@app/theme';
import { getColor } from './utils';
import {
  CIRCLCE_Y_COORD,
  CIRCLE_RADIUS,
  TEXT_FONTSIZE,
  TEXT_Y_COORD,
  LINE_Y_COORDS,
} from './constants';

interface FlagpoleProps {
  riskValueXCoord: number;
  riskValue: number;
}

const Flagpole: FC<FlagpoleProps> = ({ riskValueXCoord, riskValue }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  return (
    <>
      <Circle
        cx={riskValueXCoord}
        cy={CIRCLCE_Y_COORD}
        r={CIRCLE_RADIUS}
        stroke={getColor(theme, palette.royalBlue[400], palette.royalBlue[800])}
        strokeWidth="1"
      />
      <Text
        fontWeight="normal"
        fill={getColor(theme, palette.white, palette.royalBlue[800])}
        fontSize={TEXT_FONTSIZE}
        textAnchor="middle"
        x={riskValueXCoord}
        y={TEXT_Y_COORD}
      >
        {riskValue}
      </Text>
      <Line
        x1={riskValueXCoord}
        x2={riskValueXCoord}
        y1={LINE_Y_COORDS.y1}
        y2={LINE_Y_COORDS.y2}
        stroke={getColor(theme, palette.royalBlue[400], palette.royalBlue[500])}
        strokeWidth="1"
      />
    </>
  );
};

export default observer(Flagpole);
