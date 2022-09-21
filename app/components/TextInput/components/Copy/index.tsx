import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
} from 'react';
import type { TextInput as NativeTextInput } from 'react-native';

import { Icon } from '@app/components';

import Clipboard from '@react-native-clipboard/clipboard';
import { noop } from 'lodash';
import TextInput, { TextInputProps } from '../../TextInput';

export type CopyProps = TextInputProps & {
  value: string;
  onCopyValue?: () => void;
};

const Copy: ForwardRefRenderFunction<NativeTextInput, CopyProps> = (
  { value, onCopyValue = noop, ...rest },
  ref
) => {
  const handleOnRightIconPress = useCallback(() => {
    Clipboard.setString(value);
    onCopyValue();
  }, [onCopyValue, value]);

  return (
    <TextInput
      ref={ref}
      {...rest}
      value={value}
      rightIcon={<Icon.Copy />}
      onRightIconPress={handleOnRightIconPress}
    />
  );
};

export default forwardRef(Copy);
