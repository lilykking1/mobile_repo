import React, { FC } from 'react';
import { Path } from 'react-native-svg';
import { LINE_DEFAULT_STROKE_WIDTH } from '../../constants';

interface LineProps {
  strokeColor: string;
  strokeWidth?: number;
  pathDefinition: string;
}

const Line: FC<LineProps> = ({
  strokeColor,
  strokeWidth = LINE_DEFAULT_STROKE_WIDTH,
  pathDefinition,
}) => (
  <Path
    fill="none"
    stroke={strokeColor as string}
    d={pathDefinition}
    strokeWidth={strokeWidth}
  />
);
export default Line;
