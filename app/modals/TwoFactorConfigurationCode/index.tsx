import React, { FC, useCallback, useRef } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput as NativeTextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Lockpads } from '@app/assets/images';
import { translate } from '@app/i18n';
import {
  Button,
  Logo,
  SafeArea,
  TextInput,
  Typography,
  StickyHeader,
} from '@app/components';
import { Routes } from '@app/navigation/types';

import { FROM_ALT_COLOR, TO_ALT_COLOR } from './constants';
import { getHintText, useForm } from './hooks';
import styles from './styles';

type TwoFactorConfigurationCodeProps = NativeStackNavigationProp<
  Routes,
  'TwoFactorConfigurationCode'
>;

const TwoFactorConfigurationCode: FC<TwoFactorConfigurationCodeProps> = () => {
  const {
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
  } = useForm();
  const navigation = useNavigation<NavigationProp<Routes>>();

  const oneTimeCodeRef = useRef<NativeTextInput>();

  const logo = <Logo style={styles.logo} />;

  const handleOneTimeCodeEditing = useCallback(() => {
    oneTimeCodeRef.current.blur();
  }, [oneTimeCodeRef]);

  const handleContinuePress = useCallback(() => {
    handleSubmit();
    Keyboard.dismiss();
    navigation.navigate('TwoFactorConfigurationRecovery');
  }, [handleSubmit, navigation]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeArea altLight={FROM_ALT_COLOR} altDark={TO_ALT_COLOR}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior="position"
            style={styles.content}
            contentContainerStyle={styles.content}
          >
            <View style={styles.header}>
              <StickyHeader
                altLight={FROM_ALT_COLOR}
                altDark={TO_ALT_COLOR}
                handleBackPress={handleBackPress}
                Title={logo}
              />
            </View>
            <View style={styles.subContent}>
              <Image
                accessibilityIgnoresInvertColors
                source={Lockpads}
                style={styles.icon}
              />
              <Typography
                size="h2"
                strong
                altLight="main.500"
                altDark="white"
                style={styles.title}
              >
                {translate('modals.twoFactorConfigurationCode.title')}
              </Typography>
              <Typography size="body1" style={styles.instructions}>
                {translate(
                  'modals.twoFactorConfigurationCode.text.instructions'
                )}
              </Typography>
              <View style={styles.form}>
                <TextInput
                  placeholder={translate('fields.oneTimeCode.placeholder')}
                  value={values.oneTimeCode}
                  error={!!errors.oneTimeCode}
                  touched={touched.oneTimeCode}
                  maxLength={6}
                  autoCompleteType="off"
                  textContentType="oneTimeCode"
                  keyboardType="number-pad"
                  onBlur={handleBlur('oneTimeCode')}
                  onChangeText={handleChange('oneTimeCode')}
                  hintText={getHintText(
                    'fields.oneTimeCode.placeholder',
                    values.oneTimeCode
                  )}
                  helperText={translate('fields.oneTimeCode.helper')}
                  // Props for closing keyboard when pressing the done button on the keyboard
                  ref={oneTimeCodeRef}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  onSubmitEditing={handleOneTimeCodeEditing}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <Button
              variant="primary"
              block
              label={translate(
                'modals.twoFactorConfigurationCode.action.continue'
              )}
              onPress={handleContinuePress}
              disabled={!isValid}
            />
          </View>
        </View>
      </SafeArea>
    </TouchableWithoutFeedback>
  );
};

export default TwoFactorConfigurationCode;
