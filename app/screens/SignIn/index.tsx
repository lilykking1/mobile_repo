import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { observer } from 'mobx-react';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

import {
  AuthBackground,
  Background,
  BottomSheet,
  Button,
  Icon,
  Link,
  TextInput,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { Routes } from '@app/navigation/types';
import { passwordKeyboardType } from '@app/utils/keyboard';
import { RootContext } from '@app/state';
import {
  AmplitudeAuthEvents,
  AmplitudeAuthProps,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import { CredentialsError } from './fragments';
import { interpolateMargin, withTimingFromBoolean } from './animations';

import {
  getErrors,
  getInputHintValue,
  getPasswordEyeIcon,
  useForm,
} from './utils';
import {
  CONTAINER_MAX_MARGIN,
  CONTAINER_MAX_MARGIN_WITH_ERROR,
  CONTAINER_MIN_MARGIN,
  FOOTER_MAX_MARGIN,
  FOOTER_MIN_MARGIN,
  FORGOT_PASS_MAX_MARGIN,
  FORGOT_PASS_MIN_MARGIN,
} from './constants';
import styles from './styles';

const SignIn: FC = () => {
  const [credentialsValid, setCredentialsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { updateBrazeUser, logBrazeCustomEvent } = useBraze();
  const {
    authStore: { signInUser },
  } = useContext(RootContext);

  const { isValid, errors, values, handleChange, handleSubmit } = useForm({
    setCredentialsValid,
    signInUser,
    updateBrazeUser,
    setIsLoading,
  });

  const navigation = useNavigation<NavigationProp<Routes>>();

  const envelopeIcon = <Icon.Envelope />;
  const lockIcon = <Icon.Lock />;

  const emailRef = useRef<NativeTextInput>();
  const passwordRef = useRef<NativeTextInput>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // Define timing for animation when open/close keyboard
  const timing = useDerivedValue(() =>
    withTimingFromBoolean(isKeyboardVisible)
  );

  const mainContainer = useAnimatedStyle(() => ({
    marginTop: interpolateMargin(
      timing.value,
      !credentialsValid
        ? CONTAINER_MAX_MARGIN_WITH_ERROR
        : CONTAINER_MAX_MARGIN,
      CONTAINER_MIN_MARGIN
    ),
  }));

  const forgotPasswordContainer = useAnimatedStyle(() => ({
    marginBottom: interpolateMargin(
      timing.value,
      FORGOT_PASS_MIN_MARGIN,
      FORGOT_PASS_MAX_MARGIN
    ),
  }));

  const footerContainer = useAnimatedStyle(() => ({
    marginBottom: interpolateMargin(
      timing.value,
      FOOTER_MIN_MARGIN,
      FOOTER_MAX_MARGIN
    ),
  }));

  const handleSignInPress = useCallback(async () => {
    Keyboard.dismiss();
    handleSubmit();
  }, [handleSubmit]);

  const handleSignUpPress = useCallback(() => {
    Keyboard.dismiss();
    logBrazeCustomEvent(BrazeAuthenticationEvents.CLICK_SIGNUP);
    navigation.navigate('SignUp');
    logAmplitudeEvent(AmplitudeAuthEvents.CLICK_SIGNUP, {
      location: AmplitudeAuthProps.LOGIN_PAGE,
    });
  }, [navigation, logBrazeCustomEvent]);

  const handleEmailSubmitEditing = useCallback(() => {
    passwordRef.current.focus();
  }, [passwordRef]);

  const handlePasswordSubmitEditing = useCallback(() => {
    passwordRef.current.blur();
  }, [passwordRef]);

  const handleForgotPasswordPress = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  const passwordActionIcon = getPasswordEyeIcon(isPasswordHidden);
  const hintTextValue = getInputHintValue(
    isEmailFocused,
    isPasswordFocused,
    values
  );
  const errorHandler = getErrors(errors, values, isEmailFocused);

  return (
    <AuthBackground>
      <BottomSheet>
        <Background altLight={palette.white}>
          <Animated.View style={[styles.container, mainContainer]}>
            <Typography size="h6" strong style={styles.title}>
              {translate('screens.signIn.title')}
            </Typography>
            {!credentialsValid && <CredentialsError />}
            <View style={styles.emailInput}>
              <TextInput
                testID="SignIn.Email"
                icon={envelopeIcon}
                touched
                error={errorHandler.email.isError || !credentialsValid}
                value={values.email}
                onBlur={() => setIsEmailFocused(false)}
                onFocus={() => setIsEmailFocused(true)}
                keyboardType="email-address"
                outline
                autoCapitalize="none"
                hintText={hintTextValue.email}
                placeholder={translate('fields.email.title')}
                ref={emailRef}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={handleEmailSubmitEditing}
                useBottomSheet
                onChangeText={handleChange('email')}
              />
            </View>
            <TextInput
              testID="SignIn.Password"
              icon={lockIcon}
              touched
              onRightIconPress={() => setIsPasswordHidden(!isPasswordHidden)}
              error={!credentialsValid}
              rightIcon={passwordActionIcon}
              onChangeText={handleChange('password')}
              outline
              onBlur={() => setIsPasswordFocused(false)}
              onFocus={() => setIsPasswordFocused(true)}
              hintText={hintTextValue.password}
              secureTextEntry={isPasswordHidden}
              keyboardType={passwordKeyboardType}
              placeholder={translate('fields.password.title')}
              useBottomSheet
              returnKeyType="done"
              ref={passwordRef}
              blurOnSubmit={false}
              onSubmitEditing={handlePasswordSubmitEditing}
              value={values.password}
            />
            <Animated.View
              style={[styles.forgotPasswordLink, forgotPasswordContainer]}
            >
              <Link
                variant="transparent"
                label={translate('screens.signIn.action.forgotPassword')}
                onPress={handleForgotPasswordPress}
                style={styles.forgotPasswordLink}
              />
            </Animated.View>
            <Button
              testID="SignIn.SignInButton"
              variant="primary"
              label={translate('screens.signIn.title')}
              block
              isLoading={isLoading}
              disabled={!isValid}
              onPress={handleSignInPress}
            />
            <Animated.View style={[styles.footer, footerContainer]}>
              <Typography variant="grey.600">
                {translate('screens.signIn.text.noAccount')}
              </Typography>
              <View style={styles.linkContainer}>
                <Link
                  variant="primary"
                  underlined
                  label={translate('screens.signIn.action.signUp')}
                  onPress={handleSignUpPress}
                />
              </View>
            </Animated.View>
          </Animated.View>
        </Background>
      </BottomSheet>
    </AuthBackground>
  );
};

export default observer(SignIn);
