import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import { FormikErrors, FormikTouched } from 'formik';

import { Button, TextInput, Typography } from '@app/components';
import { translate } from '@app/i18n';

import { FormikHandleBlur, FormikHandleChange, FormValues } from '../../types';
import styles from './styles';
import FeedbackInput from './components/FeedbackInput';
import { getHelperText, getHintText, getIsFormInvalid } from './utils';
import { EMAIL_TITLE, NAME_TITLE } from './constants';

interface FormProps {
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleBlur: FormikHandleBlur;
  handleChange: FormikHandleChange;
  handleSubmit: () => void;
}

const Form: React.FC<FormProps> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  const nameRef = useRef<NativeTextInput>();
  const emailRef = useRef<NativeTextInput>();
  const feedbackRef = useRef<NativeTextInput>();

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    const isFormInvalid = getIsFormInvalid(values, errors);
    setIsSubmitButtonDisabled(isFormInvalid);
  }, [errors, values]);

  const handleNameSubmitEditing = useCallback(() => {
    emailRef.current.focus();
  }, [emailRef]);

  const handleEmailSubmitEditing = useCallback(() => {
    feedbackRef.current.focus();
  }, [feedbackRef]);

  const handleFeedbackSubmitEditing = useCallback(() => {
    feedbackRef.current.blur();
    Keyboard.dismiss();
  }, []);

  return (
    <View style={styles.form}>
      <View style={styles.headerContainer}>
        <Typography size="h5" strong>
          {translate('screens.feedback.message')}
        </Typography>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            hintText={getHintText(NAME_TITLE, values.name)}
            placeholder={NAME_TITLE}
            value={values.name}
            defaultValue={values.name}
            error={!!errors.name}
            helperText={getHelperText(errors.name, touched.name)}
            touched={touched.name}
            textContentType="name"
            autoCapitalize="none"
            onBlur={handleBlur('name')}
            onChangeText={handleChange('name')}
            ref={nameRef}
            returnKeyType="next"
            blurOnSubmit
            onSubmitEditing={handleNameSubmitEditing}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            hintText={getHintText(EMAIL_TITLE, values.email)}
            placeholder={EMAIL_TITLE}
            value={values.email}
            defaultValue={values.email}
            error={!!errors.email}
            helperText={getHelperText(errors.email, touched.email)}
            touched={touched.email}
            keyboardType="email-address"
            autoCompleteType="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            onBlur={handleBlur('email')}
            onChangeText={handleChange('email')}
            ref={emailRef}
            returnKeyType="next"
            blurOnSubmit
            onSubmitEditing={handleEmailSubmitEditing}
          />
        </View>

        <FeedbackInput
          value={values.feedback}
          defaultValue={values.feedback}
          error={!!errors.feedback}
          helperText={getHelperText(errors.feedback, touched.feedback)}
          touched={touched.feedback}
          onBlur={handleBlur('feedback')}
          onChangeText={handleChange('feedback')}
          ref={feedbackRef}
          onSubmitEditing={handleFeedbackSubmitEditing}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          variant="green"
          label={translate('screens.feedback.buttonLabel')}
          disabled={isSubmitButtonDisabled}
          onPress={handleSubmit}
          useVariantDisabledColor={false}
        />
      </View>
    </View>
  );
};

export default Form;
