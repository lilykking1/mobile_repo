import { ReactElement } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export interface ContainerProps {
  stickyHeader: ReactElement;
  regularHeader: ReactElement;
  content: ReactElement;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}
