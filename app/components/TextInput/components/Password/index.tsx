import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useMemo,
  useState,
  useContext,
} from 'react';
import { Icon } from '@app/components';
import type { TextInput as NativeTextInput } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import TextInput, { TextInputProps } from '../../TextInput';
import { getInputColorVariant, getPlaceholderColor } from './utils';

type PasswordProps = TextInputProps;

const Password: ForwardRefRenderFunction<NativeTextInput, PasswordProps> = (
  props,
  ref
) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const { style } = props;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const handleOnRightIconPress = useCallback(() => {
    setIsSecureTextEntry(!isSecureTextEntry);
  }, [isSecureTextEntry]);

  const viewEyeIcon = useMemo(
    () => (isSecureTextEntry ? <Icon.EyeClosed /> : <Icon.EyeOpen />),
    [isSecureTextEntry]
  );

  const customStyle = useMemo(() => getInputColorVariant(theme), [theme]);

  const placeholderColor = useMemo(() => getPlaceholderColor(theme), [theme]);

  return (
    <TextInput
      ref={ref}
      {...props}
      style={[style, customStyle]}
      placeholderTextColor={placeholderColor}
      secureTextEntry={isSecureTextEntry}
      rightIcon={viewEyeIcon}
      onRightIconPress={handleOnRightIconPress}
    />
  );
};

export default observer(forwardRef(Password));
