import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import { useQuery } from '@apollo/client';

import { Button, LoadingModal, SafeArea, StickyHeader } from '@app/components';
import { translate } from '@app/i18n';
import { useNavigation } from '@react-navigation/core';
import { THREE_SECONDS_IN_MS } from '@app/screens/Profile/constants';
import { Modal } from '@app/modals';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { keyboardVerticalOffset } from '@app/screens/Profile/utils';
import { palette } from '@app/theme';

import styles from './styles';
import { useForm } from './hooks';
import Form from './fragments/Form';
import Actions from './fragments/Actions';
import { GET_CURRENT_USER } from './queries';

const Profile: FC = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetCloseAccountRef = useRef<BottomSheetModal>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isSuccessMessageDisplaying, setIsSuccessMessageDisplaying] = useState(
    false
  );

  const { loading, data } = useQuery(GET_CURRENT_USER);

  useEffect(() => {
    const keyboardDidShow = (event) =>
      setKeyboardHeight(event.endCoordinates.height);

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    );

    return keyboardDidShowListener.remove;
  }, []);

  const {
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    resetForm,
    setValues,
  } = useForm();

  useEffect(() => {
    if (data) {
      setValues({
        email: data.currentUser.email,
        fullName: data.currentUser.nickname,
      });
    }
  }, [data, setValues]);

  const navigation = useNavigation();

  const handleBackPress = useCallback(
    () => (isEditing ? setIsEditing(false) : navigation.goBack()),
    [isEditing, navigation]
  );

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleCancelEdit = useCallback(() => {
    resetForm();
    setIsEditing(false);
  }, [resetForm]);

  const handleSaveEdit = useCallback(() => {
    handleSubmit();
    setIsEditing(false);

    setIsSuccessMessageDisplaying(true);
    setTimeout(() => setIsSuccessMessageDisplaying(false), THREE_SECONDS_IN_MS);
  }, [handleSubmit]);

  const handleActionsOnPressChangePassword = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleActionsOnPressCloseAccount = useCallback(() => {
    bottomSheetCloseAccountRef.current?.present();
  }, []);

  const handleOnChangePassword = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const handleOnCloseAccount = useCallback(() => {
    bottomSheetCloseAccountRef.current?.dismiss();
  }, []);

  const renderBottomWhenEditing = useCallback(
    () =>
      isEditing && (
        <View style={styles.actionButtonsContainer}>
          <Button
            label={translate('screens.profile.action.cancel')}
            variant="secondary"
            style={styles.actionButton}
            onPress={handleCancelEdit}
          />
          <Button
            label={translate('screens.profile.action.save')}
            variant="green"
            style={styles.actionButton}
            onPress={handleSaveEdit}
            disabled={!isValid}
            useVariantDisabledColor={false}
          />
        </View>
      ),
    [handleCancelEdit, handleSaveEdit, isEditing, isValid]
  );

  return (
    <>
      <SafeArea altLight={palette.white}>
        <StickyHeader
          handleBackPress={handleBackPress}
          BottomTitle={translate('screens.profile.title')}
          altLight={palette.white}
        />
        {/* // loading state */}
        {loading ? (
          <LoadingModal />
        ) : (
          <View style={styles.content}>
            <KeyboardAvoidingView
              keyboardVerticalOffset={keyboardVerticalOffset(
                keyboardHeight,
                Platform.OS
              )}
              style={styles.keyboardView}
              behavior="padding"
            >
              <Form
                handleEdit={handleEdit}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                isEditing={isEditing}
                isSavedSuccessfully={isSuccessMessageDisplaying}
              />
              <Actions
                onPressCloseAccount={handleActionsOnPressCloseAccount}
                onPressChangePassword={handleActionsOnPressChangePassword}
              />
            </KeyboardAvoidingView>
            {renderBottomWhenEditing()}
          </View>
        )}
      </SafeArea>
      <Modal.ChangePassword
        ref={bottomSheetModalRef}
        onChangePassword={handleOnChangePassword}
      />
      <Modal.CloseAccount
        ref={bottomSheetCloseAccountRef}
        onCloseAccount={handleOnCloseAccount}
        onGoBack={handleOnCloseAccount}
      />
    </>
  );
};

export default Profile;
