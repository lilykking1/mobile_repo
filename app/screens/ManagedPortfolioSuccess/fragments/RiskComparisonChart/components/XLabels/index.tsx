import React, { memo, FC, ReactElement } from 'react';
import { G, Text } from 'react-native-svg';
import { ScaleLinear } from 'd3-scale';
import { palette } from '@app/theme';
import { getCoordinateFromPoint } from '../../utils';
import { labelStyle } from './styles';
import { LABEL_DEFAULT_PADDING } from './constants';

interface XLabelsProps {
  data: number[];
  padding?: number;
  scaleY: ScaleLinear<number, number, never>;
  width: number;
}

export const XLabels: FC<XLabelsProps> = ({
  data,
  padding = LABEL_DEFAULT_PADDING,
  scaleY,
  width,
}) => {
  const renderLabel = (labelItem: any): ReactElement | null => {
    const y = scaleY(scaleY.domain()[0]) + padding;

    const x = getCoordinateFromPoint(labelItem, width);

    return (
      <Text
        key={`${labelItem}`}
        x={x - 5}
        y={y}
        fontSize={labelStyle.fontSize}
        fill={palette.grey[600]}
        fontFamily={labelStyle.fontFamily}
        fontWeight={labelStyle.fontWeight}
      >
        {labelItem}
      </Text>
    );
  };

  const labels = data.map(renderLabel);

  return <G fill="none">{labels}</G>;
};

export default memo<typeof XLabels>(XLabels);
