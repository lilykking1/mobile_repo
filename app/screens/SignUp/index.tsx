import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';
import {
  AuthBackground,
  Background,
  BottomSheet,
  Button,
  Checkbox,
  Link,
  Select,
  TextInput,
  Typography,
} from '@app/components';
import { RootContext } from '@app/state';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Modal } from '@app/modals';
import { Routes } from '@app/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { passwordKeyboardType } from '@app/utils/keyboard';
import {
  AmplitudeAuthEvents,
  AmplitudeAuthProps,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import { CredentialsError } from './fragments';

import {
  CONFIRM_EMAIL_SUBTITLE,
  CONFIRM_EMAIL_TITLE,
  CONFIRM_PASSWORD_TITLE,
  FORM_EMAIL_TITLE,
  FORM_NAME_TITLE,
  FORM_PASSWORD_TITLE,
  SIGNUP_BUTTON_TITLE,
  TERMS_BUTTON_TEXT,
  TERMS_TEXT,
  TITLE_MARGIN_LEFT,
  TITLE_MARGIN_TOP,
  NEWSLETTER_TEXT,
  TITLE_OPEN_KEYBOARD_MARGIN_LEFT,
} from './constants';
import {
  countryHasStates,
  getErrors,
  getFormHasValue,
  getOpenKeyboardStyle,
  getPasswordConfirmationEyeIcon,
  getPasswordEyeIcon,
  getSelectedValue,
  getSpaceBehavior,
  getTitleMarginTop,
  useForm,
  getLocationLabelStyle,
} from './utils';
import { interpolateMargin, withTimingFromBoolean } from './animations';
import { SelectorType } from './types';
import styles from './styles';
import { isCountryOrStateValid } from '../../utils/validateLocation';
import { BottomSheetKeyboardBehavior } from '../../components/BottomSheet/types';

const SignUp: FC = () => {
  const {
    authStore: { signInUser },
    settingsStore: { theme },
  } = useContext(RootContext);
  const { logBrazeCustomEvent } = useBraze();
  const scrollViewRef = useRef();
  const inputSelected = useRef('');

  const [isCredentialsValid, setIsCredentialsValid] = useState(true);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [
    keyboardBehavior,
    setKeyBoardBehavior,
  ] = useState<BottomSheetKeyboardBehavior>('restore');
  const [
    isPasswordConfirmationHidden,
    setIsPasswordConfirmationHidden,
  ] = useState(true);
  const [selectorType, setSelectorType] = useState<SelectorType>('country');

  const navigation = useNavigation<NavigationProp<Routes>>();
  const locationBottomSheetFilterRef = useRef<BottomSheetModal>(null);

  const emailRef = useRef<NativeTextInput>();
  const passwordRef = useRef<NativeTextInput>();
  const passwordConfirmation = useRef<NativeTextInput>();
  const nameRef = useRef<NativeTextInput>();

  const handleEmailConfirmation = useCallback(() => {
    Keyboard.dismiss();
    navigation.navigate('EmailConfirmation', {
      title: translate(CONFIRM_EMAIL_TITLE),
      subtitle: translate(CONFIRM_EMAIL_SUBTITLE),
    });
  }, [navigation]);

  const {
    isValid,
    errors,
    values,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useForm({
    setIsCredentialsValid,
    signInUser,
    handleEmailConfirmation,
  });

  const countryHasStateList = countryHasStates(values.country);
  const isInvalidLocation = isCountryOrStateValid(values.country, values.state);
  const shouldShowStateInput = values.country && countryHasStateList;

  const isFormValid = !shouldShowStateInput ? isValid : isValid && values.state;
  const marginTitle = getTitleMarginTop(inputSelected.current);
  const formHasValue = getFormHasValue(values);
  const keyboardClosedAndFormHasValue = !isKeyboardVisible && formHasValue;
  const spaceStyle = getSpaceBehavior(
    values.country,
    keyboardClosedAndFormHasValue
  );

  useEffect(() => {
    if (formHasValue) {
      setKeyBoardBehavior('none');
    } else {
      setKeyBoardBehavior('restore');
    }
  }, [isKeyboardVisible, formHasValue]);

  const handleOnKeyboardOpen = useCallback(
    (inputFocused) => {
      setKeyboardVisible(true);
      inputSelected.current = inputFocused;
    },
    [setKeyboardVisible, inputSelected]
  );

  const handleOnKeyboardClose = useCallback(() => {
    setKeyboardVisible(false);
  }, [setKeyboardVisible]);

  const handleSignUpPress = useCallback(() => {
    Keyboard.dismiss();
    handleSubmit();
  }, [handleSubmit]);

  const handleEmailSubmitEditing = useCallback(() => {
    passwordRef.current.focus();
  }, [passwordRef]);

  const handlePasswordSubmitEditing = useCallback(() => {
    passwordConfirmation.current.focus();
  }, [passwordConfirmation]);

  const handlePasswordConfirmationSubmitEditing = useCallback(() => {
    nameRef.current.focus();
  }, [nameRef]);

  const handleNameSubitEditing = useCallback(() => {
    setTimeout(() => {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }, 1000);
  }, []);

  const handleSignInPress = useCallback(() => {
    logAmplitudeEvent(AmplitudeAuthEvents.CLICK_LOGIN, {
      location: AmplitudeAuthProps.SIGNUP_SCREEN,
    });
    navigation.navigate('SignIn');
  }, [navigation]);

  const handleUserAgreement = useCallback(() => {
    Keyboard.dismiss();
    logBrazeCustomEvent(BrazeAuthenticationEvents.CLICK_VIEW_AGREEMENT);
    logAmplitudeEvent(AmplitudeAuthEvents.SIGNUP_CLICK_VIEW_USER_AGREEMENT);
    navigation.navigate('UserAgreement');
  }, [navigation, logBrazeCustomEvent]);

  const validateLocationSelected = useCallback(() => {
    Keyboard.dismiss();
    if (isInvalidLocation) {
      navigation.navigate('NotAvailableLocationModal', {
        location: isInvalidLocation,
      });
    } else {
      handleSignUpPress();
    }
  }, [navigation, isInvalidLocation, handleSignUpPress]);

  const handleCloseLocationSelector = useCallback(
    () => locationBottomSheetFilterRef.current?.close(),
    []
  );

  const handleSelectLocation = useCallback(
    (location, type) => {
      setTimeout(() => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }, 500);

      setFieldValue(type, location);

      if (type === 'country') {
        setFieldValue('state', '');
      }

      handleCloseLocationSelector();
    },
    [handleCloseLocationSelector, setFieldValue]
  );

  const handleOpenLocationSelector = useCallback((locationType) => {
    locationBottomSheetFilterRef.current?.present();
    setSelectorType(locationType);
  }, []);

  const handleCheckboxChange = useCallback(
    (value) => {
      setFieldValue('isAgreementChecked', value);
      if (value) {
        logBrazeCustomEvent(BrazeAuthenticationEvents.CLICK_AGREE_AGREEMENT);
        logAmplitudeEvent(
          AmplitudeAuthEvents.SIGNUP_CLICK_AGREE_USER_AGREEMENT
        );
      }
    },
    [setFieldValue, logBrazeCustomEvent]
  );

  const timing = useDerivedValue(() =>
    withTimingFromBoolean(isKeyboardVisible || keyboardClosedAndFormHasValue)
  );

  const titleContainer = useAnimatedStyle(() => ({
    marginLeft: interpolateMargin(
      timing.value,
      TITLE_OPEN_KEYBOARD_MARGIN_LEFT,
      TITLE_MARGIN_LEFT
    ),
    marginTop: interpolateMargin(timing.value, marginTitle, TITLE_MARGIN_TOP),
  }));

  const passwordActionIcon = getPasswordEyeIcon(isPasswordHidden);
  const passwordConfirmationActionIcon = getPasswordConfirmationEyeIcon(
    isPasswordConfirmationHidden
  );

  const errorHandler = getErrors(errors, values);
  const selectedValue = getSelectedValue(selectorType, values);
  const openKeyboardStyle = getOpenKeyboardStyle(isKeyboardVisible);
  const locationLabelStyle = getLocationLabelStyle(theme);

  return (
    <AuthBackground>
      <BottomSheet keyboardBehavior={keyboardBehavior}>
        <Background altLight={palette.white} testID="SignUp.Background">
          <View style={styles.container}>
            <Animated.View style={[styles.title, titleContainer]}>
              <Typography size="h6" strong>
                {translate('screens.signUp.title')}
              </Typography>
            </Animated.View>
            {!isCredentialsValid && <CredentialsError />}
            <View style={spaceStyle} />
            <ScrollView
              ref={scrollViewRef}
              style={openKeyboardStyle.scrollView}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.inputStyle}>
                <TextInput
                  testID="SignUp.Email"
                  touched
                  error={!isCredentialsValid || errorHandler.email.isError}
                  onFocus={() => handleOnKeyboardOpen('email')}
                  onBlur={handleOnKeyboardClose}
                  value={values.email}
                  keyboardType="email-address"
                  outline
                  autoCapitalize="none"
                  hintText={translate(FORM_EMAIL_TITLE)}
                  helperText={errorHandler.email.message}
                  placeholder={translate(FORM_EMAIL_TITLE)}
                  ref={emailRef}
                  useBottomSheet
                  returnKeyType="next"
                  blurOnSubmit={false}
                  onSubmitEditing={handleEmailSubmitEditing}
                  onChangeText={handleChange('email')}
                />
              </View>
              <View style={styles.inputStyle}>
                <TextInput
                  testID="SignUp.Password"
                  touched
                  error={!isCredentialsValid || errorHandler.password.isError}
                  onFocus={() => handleOnKeyboardOpen('password')}
                  onBlur={handleOnKeyboardClose}
                  onRightIconPress={() =>
                    setIsPasswordHidden(!isPasswordHidden)}
                  rightIcon={passwordActionIcon}
                  onChangeText={handleChange('password')}
                  outline
                  returnKeyType="next"
                  useBottomSheet
                  autoCapitalize="none"
                  secureTextEntry={isPasswordHidden}
                  keyboardType={passwordKeyboardType}
                  hintText={translate(FORM_PASSWORD_TITLE)}
                  helperText={errorHandler.password.message}
                  placeholder={translate(FORM_PASSWORD_TITLE)}
                  ref={passwordRef}
                  blurOnSubmit={false}
                  onSubmitEditing={handlePasswordSubmitEditing}
                  value={values.password}
                />
              </View>
              <View style={styles.inputStyle}>
                <TextInput
                  testID="SignUp.ConfirmPassword"
                  touched
                  error={
                    !isCredentialsValid || errorHandler.confirmPassword.isError
                  }
                  onFocus={() => handleOnKeyboardOpen('passwordConfirmation')}
                  onBlur={handleOnKeyboardClose}
                  onRightIconPress={() =>
                    setIsPasswordConfirmationHidden(
                      !isPasswordConfirmationHidden
                    )}
                  rightIcon={passwordConfirmationActionIcon}
                  onChangeText={handleChange('confirmPassword')}
                  outline
                  useBottomSheet
                  secureTextEntry={isPasswordConfirmationHidden}
                  keyboardType={passwordKeyboardType}
                  hintText={translate(CONFIRM_PASSWORD_TITLE)}
                  helperText={errorHandler.confirmPassword.message}
                  placeholder={translate(CONFIRM_PASSWORD_TITLE)}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  ref={passwordConfirmation}
                  onSubmitEditing={handlePasswordConfirmationSubmitEditing}
                  value={values.confirmPassword}
                />
              </View>
              <View style={styles.inputStyle}>
                <TextInput
                  testID="SignUp.FullName"
                  touched
                  onChangeText={handleChange('name')}
                  onFocus={() => handleOnKeyboardOpen('name')}
                  onBlur={handleOnKeyboardClose}
                  error={!isCredentialsValid || errorHandler.name.isError}
                  helperText={errorHandler.name.message}
                  hintText={translate(FORM_NAME_TITLE)}
                  outline
                  useBottomSheet
                  placeholder={translate(FORM_NAME_TITLE)}
                  returnKeyType="done"
                  blurOnSubmit
                  ref={nameRef}
                  onSubmitEditing={handleNameSubitEditing}
                  value={values.name}
                />
              </View>
              <View style={styles.selectCountryContainer}>
                <Select
                  testID="SignUp.Country"
                  title={translate('modals.locationSelector.country')}
                  onPress={() => handleOpenLocationSelector('country')}
                  style={locationLabelStyle}
                  placeholder={translate('modals.locationSelector.country')}
                  value={values.country}
                />
              </View>
              {shouldShowStateInput ? (
                <View style={styles.selectStateContainer}>
                  <Select
                    testID="SignUp.State"
                    title={translate('modals.locationSelector.state')}
                    placeholder={translate('modals.locationSelector.state')}
                    style={locationLabelStyle}
                    onPress={() => handleOpenLocationSelector('state')}
                    value={values.state}
                  />
                </View>
              ) : null}
            </ScrollView>
            <View style={openKeyboardStyle.footer}>
              {!isKeyboardVisible && (
                <Checkbox
                  testID="SignUp.NewsletterCheckbox"
                  checked={values.emailOptedIn}
                  onChange={(value) => setFieldValue('emailOptedIn', value)}
                  style={styles.checkBoxStyle}
                  label={translate(NEWSLETTER_TEXT)}
                />
              )}

              {!isKeyboardVisible && (
                <View style={styles.terms}>
                  <Checkbox
                    testID="SignUp.AgreementCheckbox"
                    checked={values.isAgreementChecked}
                    onChange={handleCheckboxChange}
                    style={styles.checkBoxStyle}
                  />

                  <Typography
                    style={styles.textTerms}
                    strong
                    size="body2"
                    variant="grey.600"
                  >
                    {translate(TERMS_TEXT)}

                    <Link
                      variant="primary"
                      size="small"
                      label={translate(TERMS_BUTTON_TEXT)}
                      onPress={handleUserAgreement}
                      style={styles.linkStyle}
                    />
                  </Typography>
                </View>
              )}

              <Button
                testID="SignUp.SignUpButton"
                variant="primary"
                label={translate(SIGNUP_BUTTON_TITLE)}
                block
                disabled={!isFormValid}
                onPress={validateLocationSelected}
              />
            </View>

            {!isKeyboardVisible && (
              <View style={styles.dontHaveAccount}>
                <Typography strong>
                  {translate('screens.signUp.text.haveAccount')}
                </Typography>
                <View style={styles.linkContainer}>
                  <Link
                    variant="primary"
                    underlined
                    label={translate('screens.signUp.action.signIn')}
                    onPress={handleSignInPress}
                  />
                </View>
              </View>
            )}
          </View>

          <Modal.LocationSelector
            ref={locationBottomSheetFilterRef}
            selectorType={selectorType}
            countrySelected={values.country}
            selected={selectedValue}
            onSelect={(value) => handleSelectLocation(value, selectorType)}
          />
        </Background>
      </BottomSheet>
    </AuthBackground>
  );
};

export default observer(SignUp);
