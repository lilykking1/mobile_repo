import type { MutableRefObject } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import type Animated from 'react-native-reanimated';

export type SharedValue = Readonly<Animated.SharedValue<number>>;
export type OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
export type ScrollRef = MutableRefObject<Animated.ScrollView>;

export type ScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>
) => void;
