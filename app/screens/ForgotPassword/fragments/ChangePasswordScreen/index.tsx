import React, { FC, useCallback, useRef } from 'react';
import {
  Keyboard,
  TextInput as NativeTextInput,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';

import {
  Button,
  Icon,
  Typography,
  StickyHeader,
  SafeArea,
} from '@app/components';
import { TextInputPassword } from '@app/components/TextInput/';
import { passwordKeyboardType } from '@app/utils/keyboard';
import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';

import { palette } from '@app/theme';
import { getHintText, useForm } from './utils';
import styles from './styles';

const ChangePassword: FC = () => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const refNewPassword = useRef<NativeTextInput>();
  const refRepeatNewPassword = useRef<NativeTextInput>();

  const onSubmitChangePassword = () => {
    // call change password endpoint
    Alert.alert('ChangePassword Submitted');
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    isValid,
  } = useForm(onSubmitChangePassword);

  const handleOnSubmitEditingNewPassword = useCallback(() => {
    refRepeatNewPassword.current.focus();
  }, []);

  const handleOnSubmitEditingRepeatNewPassword = useCallback(() => {
    refRepeatNewPassword.current.blur();
  }, []);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onContinueChangePassword = useCallback(() => {
    handleSubmit();
    navigation.navigate('SignIn');
    Keyboard.dismiss();
  }, [handleSubmit, navigation]);

  return (
    <SafeArea altLight={palette.white}>
      <StickyHeader
        Title={(
          <Typography style={styles.titleHeader} strong size="h6">
            {translate('screens.forgotPassword.changePassword.title')}
          </Typography>
        )}
        handleBackPress={handleBackPress}
        arrowLeft
        altLight={palette.white}
      />
      <View style={styles.container}>
        <Typography strong style={styles.titleScreen}>
          {translate('screens.forgotPassword.changePassword.text.instructions')}
        </Typography>
        <TextInputPassword
          autoCompleteType="password"
          textContentType="newPassword"
          keyboardType={passwordKeyboardType}
          returnKeyType="next"
          blurOnSubmit={false}
          ref={refNewPassword}
          onSubmitEditing={handleOnSubmitEditingNewPassword}
          secureTextEntry
          icon={<Icon.Lock />}
          error={!!errors.newPassword}
          helperText={errors.newPassword}
          placeholder={translate(
            'screens.forgotPassword.changePassword.newPassword'
          )}
          hintText={getHintText(
            'screens.forgotPassword.changePassword.newPassword',
            values.newPassword
          )}
          value={values.newPassword}
          touched={touched.newPassword}
          onChangeText={handleChange('newPassword')}
          onBlur={handleBlur('newPassword')}
        />
        <TextInputPassword
          autoCompleteType="password"
          textContentType="newPassword"
          keyboardType={passwordKeyboardType}
          returnKeyType="done"
          blurOnSubmit={false}
          ref={refRepeatNewPassword}
          onSubmitEditing={handleOnSubmitEditingRepeatNewPassword}
          secureTextEntry
          icon={<Icon.Lock />}
          error={!!errors.repeatNewPassword}
          helperText={errors.repeatNewPassword}
          placeholder={translate(
            'screens.forgotPassword.changePassword.repeatNewPassword'
          )}
          hintText={getHintText(
            'screens.forgotPassword.changePassword.repeatNewPassword',
            values.repeatNewPassword
          )}
          value={values.repeatNewPassword}
          touched={touched.repeatNewPassword}
          onChangeText={handleChange('repeatNewPassword')}
          onBlur={handleBlur('repeatNewPassword')}
        />
      </View>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <Button
            size="large"
            variant="primary"
            label={translate('screens.forgotPassword.action.continue')}
            style={styles.buttonStyle}
            onPress={onContinueChangePassword}
            disabled={!isValid}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeArea>
  );
};

export default ChangePassword;
