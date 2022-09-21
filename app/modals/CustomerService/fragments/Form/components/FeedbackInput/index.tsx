/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useContext } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import { observer } from 'mobx-react';

import { TextInputProps } from '@app/components/TextInput/TextInput';
import { TextInput } from '@app/components';
import { translate } from '@app/i18n';
import { RootContext } from '@app/state';

import styles from './styles';
import { getColorStyles } from './utils';

const FeedbackInput: React.ForwardRefRenderFunction<
  NativeTextInput,
  TextInputProps
> = ({ ...props }, ref) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const isDarkTheme = theme === 'dark';

  return (
    <TextInput
      ref={ref}
      style={[styles.input, getColorStyles(isDarkTheme, true)]}
      customContainerStyle={[styles.container, getColorStyles(isDarkTheme)]}
      multiline
      placeholder={translate('modals.customerService.placeholderForm')}
      returnKeyType="send"
      blurOnSubmit
      {...props}
    />
  );
};

export default observer(forwardRef(FeedbackInput));
