import React, { memo, FC, useMemo, ReactElement } from 'react';
import { G, Text } from 'react-native-svg';
import { isEmpty } from 'lodash';
import { ScaleLinear } from 'd3-scale';
import { getIntervalArray, getLabelTextColor } from './utils';
import { labelStyle } from './styles';
import { LABEL_DEFAULT_PADDING, LABEL_DEFAULT_SPACING } from '../../constants';

interface XLabelsProps {
  data: any[];
  isDarkTheme?: boolean;
  valueKey: string;
  padding: number;
  labelSpacing?: number;
  xLabelTransform?: (label: any) => string;
  scaleY: ScaleLinear<number, number, never>;
  width: number;
}

export const XLabels: FC<XLabelsProps> = ({
  data,
  isDarkTheme = false,
  valueKey,
  padding = LABEL_DEFAULT_PADDING,
  labelSpacing = LABEL_DEFAULT_SPACING,
  xLabelTransform,
  scaleY,
  width,
}) => {
  const labelWidth = useMemo(() => 30 + labelSpacing, [labelSpacing]);

  const labelsArray = useMemo(
    () => getIntervalArray(width, data.length, labelWidth),
    [width, data, labelWidth]
  );

  const renderLabel = (labelItem: any, index: number): ReactElement | null => {
    const currentLabel = labelsArray.find((label) => label.index === index);
    if (currentLabel) {
      const y = scaleY(scaleY.domain()[0]) + padding;

      const labelColor = getLabelTextColor(isDarkTheme);

      const label = xLabelTransform
        ? xLabelTransform(labelItem[valueKey])
        : labelItem[valueKey];

      return (
        <Text
          key={`${labelItem[valueKey]}`}
          x={currentLabel.xValue}
          y={y}
          fontSize={labelStyle.fontSize}
          fill={labelColor}
          fontFamily={labelStyle.fontFamily}
          fontWeight={labelStyle.fontWeight}
        >
          {label}
        </Text>
      );
    }
    return null;
  };

  const labels = data.map(renderLabel);

  if (isEmpty(labelsArray)) {
    return null;
  }

  return <G fill="none">{labels}</G>;
};

export default memo<typeof XLabels>(XLabels);
