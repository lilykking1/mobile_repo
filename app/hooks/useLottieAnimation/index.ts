/* eslint-disable import/no-duplicates */
import { useRef, useCallback, MutableRefObject } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

/**
 * Handles lottie animations
 */
const useLottieAnimation = (): MutableRefObject<AnimatedLottieView> => {
  const animation = useRef<AnimatedLottieView>(null);

  useFocusEffect(
    useCallback(() => {
      if (animation.current) {
        animation.current.play();
      }

      const reset = () => animation.current && animation.current.reset();

      return reset;
    }, [])
  );

  return animation;
};

export default useLottieAnimation;
