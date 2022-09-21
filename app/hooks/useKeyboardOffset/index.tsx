import { useState, useRef, useEffect } from 'react';
import { EmitterSubscription, Keyboard, Platform } from 'react-native';
import { ContextValue } from './types';

const useKeyboardOffset = (): ContextValue => {
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  const keyboardDidShowListener = useRef<EmitterSubscription>();
  const keyboardDidHideListener = useRef<EmitterSubscription>();

  const onKeyboardShow = (event) => {
    setKeyboardOffset(event.endCoordinates.height);
  };
  const onKeyboardHide = () => setKeyboardOffset(0);

  useEffect(() => {
    // keyboardWillShow and keyboardWillHide events are not available on Android
    if (Platform.OS === 'android') {
      keyboardDidShowListener.current = Keyboard.addListener(
        'keyboardDidShow',
        onKeyboardShow
      );
      keyboardDidHideListener.current = Keyboard.addListener(
        'keyboardDidHide',
        onKeyboardHide
      );
    } else {
      keyboardDidShowListener.current = Keyboard.addListener(
        'keyboardWillShow',
        onKeyboardShow
      );
      keyboardDidHideListener.current = Keyboard.addListener(
        'keyboardWillHide',
        onKeyboardHide
      );
    }

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  return {
    keyboardOffset,
  };
};

export default useKeyboardOffset;
