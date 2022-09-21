import { ComposedStyle } from '@app/utils/styles';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export type containerVariant = 'default' | 'active' | 'filled' | 'error';

export type ContainerStyleVarient = ComposedStyle<containerVariant>;

export type FocusEventHandler = (
  event: NativeSyntheticEvent<TextInputFocusEventData>
) => void;
