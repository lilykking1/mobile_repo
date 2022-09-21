import React, { ReactNode, useMemo } from 'react';
import { View } from 'react-native';
import { Palette } from '@app/theme';
import { getBorderColors } from './utils';
import styles from './styles';

interface SlideContainerProps {
  isSelected: boolean;
  item: ReactNode;
  width: number;
  height: number | string;
  selectedBorderColor?: Palette;
}

const Slide: React.FC<SlideContainerProps> = ({
  isSelected,
  item,
  width,
  height,
  selectedBorderColor,
}) => {
  const isBorderSelectedStyles = useMemo(
    () => getBorderColors(isSelected, selectedBorderColor),
    [isSelected, selectedBorderColor]
  );
  const slideStyles = useMemo(
    () => [{ width, height }, styles.container, isBorderSelectedStyles],
    [height, isBorderSelectedStyles, width]
  );

  const content = useMemo(() => <View style={slideStyles}>{item}</View>, [
    slideStyles,
    item,
  ]);

  return content;
};

export default Slide;
