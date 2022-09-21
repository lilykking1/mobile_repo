import React, { FC, memo, useCallback } from 'react';
import { Line } from 'react-native-svg';

import { palette } from '@app/theme';
import { DEFAULT_GRID_INTERVAL } from './constants';

interface XGridProps {
  data: any[];
  valueKey: string;
  padding: number;
  xGridInterval: number;
  scaleY: any;
  scaleX: any;
}

const XGrid: FC<XGridProps> = ({
  data,
  valueKey,
  padding,
  xGridInterval = DEFAULT_GRID_INTERVAL,
  scaleY,
  scaleX,
}) => {
  const mapper = useCallback(
    (p: Record<string, number>, index: number) => {
      // plus 1 so 0 index is position 1
      if ((index + 1) % xGridInterval === 0) {
        const x = scaleX(p[valueKey]);
        const yStart = scaleY(scaleY.domain()[0]) + padding * 0.5;
        const yEnd = scaleY(scaleY.domain()[1]) - padding;

        return (
          <Line
            key={p[valueKey]}
            stroke={palette.greySmoke}
            strokeWidth={1}
            strokeDasharray={[1, 8]}
            x1={x}
            y1={yStart}
            x2={x}
            y2={yEnd}
          />
        );
      }
      return null;
    },
    [padding, scaleX, scaleY, valueKey, xGridInterval]
  );

  const gridLines = data.map(mapper);

  return <>{gridLines}</>;
};

export default memo<typeof XGrid>(XGrid);
