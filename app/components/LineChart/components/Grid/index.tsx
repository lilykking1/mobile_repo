import React, { FC, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { Line } from 'react-native-svg';

import { palette } from '@app/theme';
import { GRID_DEFAULT_VERTICAL_PADDING } from '../../constants';
import { getGridDotsColor, getGridPosition } from './utils';

const dimensions = Dimensions.get('window');

interface GridProps {
  width?: number;
  height: number;
  isDarkTheme?: boolean;
  horizontalPadding?: number;
  verticalPadding?: number;
  dotColor?: string;
}

const Grid: FC<GridProps> = ({
  height,
  width = dimensions.width,
  isDarkTheme = false,
  dotColor = palette.grey[500],
  verticalPadding = GRID_DEFAULT_VERTICAL_PADDING,
}) => {
  const renderLines = useCallback(() => {
    const lines = [];
    const linesGrid = getGridPosition(width);
    const yStart = 0;
    const yEnd = height - verticalPadding;
    const strokeColor = getGridDotsColor(isDarkTheme, dotColor);

    linesGrid.forEach((lineHorizontalPosition) => {
      lines.push(
        <Line
          key={`${lineHorizontalPosition}`}
          stroke={strokeColor}
          strokeWidth={1}
          strokeDasharray={[1, 6]}
          x1={lineHorizontalPosition}
          y1={yStart}
          x2={lineHorizontalPosition}
          y2={yEnd}
        />
      );
    });

    return lines;
  }, [width, height, dotColor, verticalPadding, isDarkTheme]);

  const gridLines = renderLines();

  return <>{gridLines}</>;
};

export default Grid;
