import type { MutableRefObject } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import type Animated from 'react-native-reanimated';

export type ScrollRef = MutableRefObject<Animated.ScrollView>;

export type ScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>
) => void;
