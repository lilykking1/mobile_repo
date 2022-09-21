import React, {
  memo,
  FC,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Text, G } from 'react-native-svg';
// TODO: does not work correctly, maybe affected by M1 mac project changes or iphone13
// import rnTextSize, { TSMeasureResult } from 'react-native-text-size';
import { isEmpty, isNumber } from 'lodash';

import getIntervalArray from '../utils';
import { labelStyle } from './styles';

interface XLabelsProps {
  data: any[];
  valueKey: string;
  padding: number;
  labelSpacing?: number;
  xLabelTransform?: (label: any) => string;
  scaleY: any;
  scaleX: any;
  width: number;
  firstLabel?: string;
  lastLabel?: string;
  noMiddleLabels?: boolean;
}

export const XLabels: FC<XLabelsProps> = ({
  data,
  valueKey,
  padding = 0,
  labelSpacing = 5,
  xLabelTransform,
  scaleY,
  scaleX,
  width,
  firstLabel,
  lastLabel,
  noMiddleLabels = false,
}) => {
  const [labelWidth, setLabelWidth] = useState<number>();
  const [labelsArray, setLabelsArray] = useState<number[]>([]);
  // const [firstLabelWidth, setFirstLabelWidth] = useState<number>();
  const [lastLabelWidth, setlastLabelWidth] = useState<number>();

  // data points width based on last index value
  // assuming it's the largest
  useEffect(() => {
    const getWidth = async (_text: string) => {
      // const size: TSMeasureResult = await rnTextSize.measure({
      //   text, // text to measure, can include symbols
      //   fontSize: labelStyle.fontSize,
      // });

      // TODO: size.width relplaced with 30 until react-native-text-size is fixed
      setLabelWidth(30 + labelSpacing);
    };
    // transformed labels
    const label = xLabelTransform
      ? xLabelTransform(data[data.length - 1][valueKey])
      : data[data.length - 1][valueKey];
    // get the width
    getWidth(label);
  }, [data, valueKey, xLabelTransform, width, labelSpacing, labelWidth]);

  // lastlabel width to adjust correctly on render
  useEffect(() => {
    const getWidth = async (_text: string) => {
      // const size: TSMeasureResult = await rnTextSize.measure({
      //   text, // text to measure, can include symbols
      //   fontSize: labelStyle.fontSize,
      // });
      // TODO: size.width relplaced with 30 until react-native-text-size is fixed
      setlastLabelWidth(30);
    };

    if (lastLabel) {
      getWidth(lastLabel);
    }
  }, [lastLabel]);

  useMemo(() => {
    const arr = getIntervalArray(width, data.length, labelWidth);
    setLabelsArray(arr);
  }, [width, data, labelWidth]);

  const mapper = useCallback(
    (p, index) => {
      if (labelsArray.includes(index)) {
        const y = scaleY(scaleY.domain()[0]) + padding;

        if (firstLabel && labelsArray[0] === index) {
          return (
            <Text
              key={`${p[valueKey]}`}
              x={labelSpacing} // center label, defaults to right of point
              y={y}
              fontSize={labelStyle.fontSize}
              fill={labelStyle.color as string}
              fontFamily={labelStyle.fontFamily}
              fontWeight={labelStyle.fontWeight}
            >
              {firstLabel}
            </Text>
          );
        }

        if (
          lastLabel &&
          labelsArray[labelsArray.length - 1] === index &&
          isNumber(lastLabelWidth)
        ) {
          return (
            <Text
              key={`${p[valueKey]}`}
              x={width - lastLabelWidth - labelSpacing} // center label, defaults to right of point
              y={y}
              fontSize={labelStyle.fontSize}
              fill={labelStyle.color as string}
              fontFamily={labelStyle.fontFamily}
              fontWeight={labelStyle.fontWeight}
            >
              {lastLabel}
            </Text>
          );
        }

        if (noMiddleLabels) {
          return null;
        }

        const x = scaleX(p[valueKey]);

        const label = xLabelTransform
          ? xLabelTransform(p[valueKey])
          : p[valueKey];

        return (
          <Text
            key={`${p[valueKey]}`}
            x={x - labelWidth / 2} // center label, defaults to right of point
            y={y}
            fontSize={labelStyle.fontSize}
            fill={labelStyle.color as string}
            fontFamily={labelStyle.fontFamily}
            fontWeight={labelStyle.fontWeight}
          >
            {label}
          </Text>
        );
      }
      return null;
    },
    [
      firstLabel,
      labelWidth,
      labelsArray,
      lastLabel,
      lastLabelWidth,
      noMiddleLabels,
      padding,
      scaleX,
      scaleY,
      labelSpacing,
      valueKey,
      width,
      xLabelTransform,
    ]
  );

  const labels = data.map(mapper);

  if (!isEmpty(labelsArray)) {
    return <G fill="none">{labels}</G>;
  }

  // return nothing if no data
  return null;
};

export default memo<typeof XLabels>(XLabels);
