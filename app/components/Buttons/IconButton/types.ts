import { PressableProps } from 'react-native';
import { AltBackgroundColors } from '@app/interfaces/Colors';
import { ComposedStyle } from '@app/utils/styles';

export type IconButtonSize = 'normal' | 'large' | 'xlarge' | 'small';
export type IconButtonSizeStyle = ComposedStyle<IconButtonSize>;

export type PressablePropsAndColors = PressableProps & AltBackgroundColors;
