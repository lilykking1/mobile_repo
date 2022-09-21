import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';

import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { TextInputPassword } from '@app/components/TextInput/';
import { Icon } from '@app/components/';
import { translate } from '@app/i18n';
import {
  getHelperTextCurrentPassword,
  getHintText,
  isValidPassword,
} from '@app/modals/ChangePassword/utils';
import Button from '@app/components/Buttons/Button';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import { useForm } from '@app/modals/ChangePassword/hooks';
import { passwordKeyboardType } from '@app/utils/keyboard';
import { Header } from './fragments';
import styles from './styles';

interface ChangePasswordProps extends BottomSheetModalProps {
  onChangePassword: (result: boolean) => void;
  onDismiss?: () => void;
}

const ChangePassword: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ChangePasswordProps
> = ({ onChangePassword, onDismiss }, ref) => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    resetForm,
    isValid,
  } = useForm(onChangePassword);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isErrorCurrentPassword, setIsErrorCurrentPassword] = useState(false);
  const refPassword = useRef<NativeTextInput>();
  const refNewPassword = useRef<NativeTextInput>();
  const refRepeatNewPassword = useRef<NativeTextInput>();

  const handleOnChangeCurrentPassword = useCallback(() => {
    setIsErrorCurrentPassword(false);
  }, []);
  const handleOnSubmitEditingPassword = useCallback(() => {
    refNewPassword.current.focus();
  }, []);
  const handleOnSubmitEditingNewPassword = useCallback(() => {
    refRepeatNewPassword.current.focus();
  }, []);
  const handleOnSubmitEditingRepeatNewPassword = useCallback(() => {
    refRepeatNewPassword.current.blur();
  }, []);
  const handleOnPressButton = useCallback(async () => {
    Keyboard.dismiss();
    const currentPasswordIsValid = await isValidPassword(
      values.currentPassword
    );
    setIsErrorCurrentPassword(!currentPasswordIsValid);

    if (currentPasswordIsValid) {
      handleSubmit();
    }
  }, [handleSubmit, values.currentPassword]);

  const handleOnDismiss = useCallback(() => {
    if (onDismiss) {
      onDismiss();
    }
    resetForm();
    setButtonDisabled(true);
  }, [onDismiss, resetForm]);

  useEffect(() => {
    const isButtonDisabled = !isValid || isErrorCurrentPassword;
    setButtonDisabled(isButtonDisabled);
  }, [isErrorCurrentPassword, isValid]);

  return (
    <BottomSheetModal
      contentStyle={styles.containerModal}
      snapToContent
      ref={ref}
      headerComponent={<Header />}
      onDismiss={handleOnDismiss}
    >
      <View style={styles.containerContent}>
        <TextInputPassword
          useBottomSheet
          autoCompleteType="password"
          textContentType="password"
          keyboardType={passwordKeyboardType}
          returnKeyType="next"
          blurOnSubmit={false}
          ref={refPassword}
          onSubmitEditing={handleOnSubmitEditingPassword}
          style={styles.textInput}
          secureTextEntry
          icon={<Icon.Lock />}
          helperText={getHelperTextCurrentPassword(isErrorCurrentPassword)}
          placeholder={translate('modals.changePassword.currentPassword')}
          error={!!errors.currentPassword || isErrorCurrentPassword}
          hintText={getHintText(
            'modals.changePassword.currentPassword',
            values.currentPassword
          )}
          value={values.currentPassword}
          touched={touched.currentPassword}
          onChangeText={handleChange('currentPassword')}
          onChange={handleOnChangeCurrentPassword}
          onBlur={handleBlur('currentPassword')}
        />
      </View>

      <View style={styles.containerContent}>
        <TextInputPassword
          useBottomSheet
          autoCompleteType="password"
          textContentType="newPassword"
          keyboardType={passwordKeyboardType}
          returnKeyType="next"
          blurOnSubmit={false}
          ref={refNewPassword}
          onSubmitEditing={handleOnSubmitEditingNewPassword}
          style={styles.textInput}
          secureTextEntry
          icon={<Icon.Lock />}
          error={!!errors.newPassword}
          helperText={errors.newPassword}
          placeholder={translate('modals.changePassword.newPassword')}
          hintText={getHintText(
            'modals.changePassword.newPassword',
            values.newPassword
          )}
          value={values.newPassword}
          touched={touched.newPassword}
          onChangeText={handleChange('newPassword')}
          onBlur={handleBlur('newPassword')}
        />
      </View>

      <View style={styles.containerContent}>
        <TextInputPassword
          useBottomSheet
          autoCompleteType="password"
          textContentType="newPassword"
          keyboardType={passwordKeyboardType}
          returnKeyType="done"
          blurOnSubmit={false}
          ref={refRepeatNewPassword}
          onSubmitEditing={handleOnSubmitEditingRepeatNewPassword}
          style={styles.textInput}
          secureTextEntry
          icon={<Icon.Lock />}
          error={!!errors.repeatNewPassword}
          helperText={errors.repeatNewPassword}
          placeholder={translate('modals.changePassword.repeatNewPassword')}
          hintText={getHintText(
            'modals.changePassword.repeatNewPassword',
            values.repeatNewPassword
          )}
          value={values.repeatNewPassword}
          touched={touched.repeatNewPassword}
          onChangeText={handleChange('repeatNewPassword')}
          onBlur={handleBlur('repeatNewPassword')}
        />
      </View>

      <Button
        variant="primary"
        block
        disabled={buttonDisabled}
        label={translate('modals.changePassword.changePassword')}
        onPress={handleOnPressButton}
      />
    </BottomSheetModal>
  );
};

export default forwardRef(ChangePassword);
