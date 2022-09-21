/* eslint-disable react-native/no-inline-styles */
import React, { FC, useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { NavigationContainer } from '@react-navigation/native';

import { Background, Icon, TextInputCopy, Typography } from '@app/components';
import { COINS } from '@app/models';
import { palette } from '@app/theme';

import { CopyProps } from '@app/components/TextInput/components/Copy';
import TextInput, { TextInputProps } from '../TextInput';
import { Password, WalletAddress } from '../components';
import styles from './styles';

declare let module;

const TextInputCopyExample: FC<CopyProps> = ({
  disabled,
  readonly,
  placeholder,
  touched,
  error,
  value,
}) => {
  const [clipboard, setClipboard] = useState('');
  const [inputValue, setInputValue] = useState(value);

  const handleOnCopyValue = async () => {
    setClipboard(inputValue);
  };

  return (
    <Background altLight={palette.white} style={styles.container}>
      <TextInputCopy
        disabled={disabled}
        readonly={readonly}
        placeholder={placeholder}
        touched={touched}
        error={error}
        hintText="Your input"
        value={inputValue}
        onChangeText={setInputValue}
        onCopyValue={handleOnCopyValue}
      />

      <Typography size="h6">{`Clipboard value: ${clipboard}`}</Typography>
    </Background>
  );
};

const WalletAddressInputExample: FC<TextInputProps> = ({
  disabled,
  readonly,
  placeholder,
  touched,
  error,
  hintText,
}) => {
  const [value, setValue] = useState('');

  return (
    <NavigationContainer>
      <Background altLight={palette.white} style={styles.container}>
        <WalletAddress
          coinSymbol={COINS.ETH}
          disabled={disabled}
          readonly={readonly}
          placeholder={placeholder}
          touched={touched}
          error={error}
          hintText={hintText}
          value={value}
          onChangeText={setValue}
        />
      </Background>
    </NavigationContainer>
  );
};

const TextInputExample: FC<TextInputProps> = ({
  disabled,
  readonly,
  touched,
  helperText,
  icon,
  error,
  rightIcon,
  actionText,
  hintText,
  label,
  placeholder,
}) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const onChangeText1 = useCallback((e) => {
    setText1(e.nativeEvent.text);
  }, []);
  const onChangeText2 = useCallback((e) => {
    setText2(e.nativeEvent.text);
  }, []);
  return (
    <>
      <TextInput
        disabled={disabled}
        readonly={readonly}
        touched={touched}
        helperText={helperText}
        icon={icon}
        error={error}
        rightIcon={rightIcon}
        actionText={actionText}
        hintText={hintText}
        label={label}
        placeholder={placeholder}
        value={text1}
        onChange={onChangeText1}
      />
      <TextInput
        disabled={disabled}
        readonly={readonly}
        touched={touched}
        helperText={helperText}
        icon={icon}
        error={error}
        rightIcon={rightIcon}
        actionText={actionText}
        hintText={hintText}
        label={label}
        placeholder={placeholder}
        value={text2}
        onChange={onChangeText2}
      />
    </>
  );
};

storiesOf('Inputs.TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const disabled = boolean('Disabled', false);
    const readonly = boolean('Read-only', false);
    const touched = boolean('Touched', false);
    const error = boolean('Error', false);
    const label = text('Label', 'Email');
    const placeholder = text('Placeholder', 'Enter your e-mail');
    const hasIcon = boolean('Icon', false);
    const hasRightIcon = boolean('Right Icon', true);
    const actionText = text('Action Text', 'Action');
    const helperText = text('Helper Text', 'Helper text');
    const hint = text('Hint', 'Email');

    const icon = hasIcon ? <Icon.Magnifier /> : undefined;
    const rightIcon = hasRightIcon ? <Icon.Close /> : undefined;

    return (
      <Background altLight={palette.white} style={styles.container}>
        <TextInputExample
          disabled={disabled}
          readonly={readonly}
          touched={touched}
          helperText={helperText}
          icon={icon}
          error={error}
          rightIcon={rightIcon}
          actionText={actionText}
          hintText={hint}
          label={label}
          placeholder={placeholder}
        />
      </Background>
    );
  })

  .add('Password', () => {
    const disabled = boolean('Disabled', false);
    const readonly = boolean('Read-only', false);
    const placeholder = text('Placeholder', 'Wallet Address');
    const error = boolean('Error', false);
    const touched = boolean('Touched', false);

    return (
      <Background altLight={palette.white} style={styles.container}>
        <Password
          disabled={disabled}
          readonly={readonly}
          placeholder={placeholder}
          touched={touched}
          error={error}
          hintText="Password"
        />
      </Background>
    );
  })

  .add('Copy', () => {
    const disabled = boolean('Disabled', false);
    const readonly = boolean('Read-only', false);
    const placeholder = text('Placeholder', 'Enter your value here');
    const error = boolean('Error', false);
    const touched = boolean('Touched', false);
    const value = text('Value', 'Hello World');

    return (
      <TextInputCopyExample
        disabled={disabled}
        readonly={readonly}
        placeholder={placeholder}
        error={error}
        touched={touched}
        value={value}
      />
    );
  })

  .add('WalletAddress', () => {
    const disabled = boolean('Disabled', false);
    const readonly = boolean('Read-only', false);
    const walletPlaceholder = text('Placeholder', 'Wallet Address');
    const hintText = text('Hint Text', 'Wallet Address');
    const error = boolean('Error', false);
    const touched = boolean('Touched', false);

    return (
      <WalletAddressInputExample
        disabled={disabled}
        readonly={readonly}
        placeholder={walletPlaceholder}
        hintText={hintText}
        error={error}
        touched={touched}
      />
    );
  });
