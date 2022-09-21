import React, { useCallback, useEffect, useRef } from 'react';
import { Keyboard, TextInput as NativeTextInput, View } from 'react-native';
import { TextButton, TextInput, Tooltip, Typography } from '@app/components';

import { translate } from '@app/i18n';
import { FormikErrors, FormikTouched } from 'formik';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { TooltipVariant } from '@app/components/Tooltip/types';
import {
  FormikHandleBlur,
  FormikHandleChange,
} from '@app/screens/Feedback/types';
import { FormValues } from '../../types';
import styles from './styles';
import { interpolateOpacity, interpolateTranslateY } from './animations';
import { ANIMATION_Y_OFFSET } from './constants';

interface FormProps {
  isEditing: boolean;
  isSavedSuccessfully: boolean;
  handleEdit: () => void;
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleBlur: FormikHandleBlur;
  handleChange: FormikHandleChange;
}

const Form: React.FC<FormProps> = ({
  isEditing,
  isSavedSuccessfully,
  handleEdit,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  const emailRef = useRef<NativeTextInput>();
  const fullNameRef = useRef<NativeTextInput>();
  const opacityEditButton = useSharedValue(1);
  const yOffsetEditButton = useSharedValue(0);

  useEffect(() => {
    if (isSavedSuccessfully) {
      opacityEditButton.value = 0;
      yOffsetEditButton.value = ANIMATION_Y_OFFSET;
    } else {
      opacityEditButton.value = 1;
      yOffsetEditButton.value = 0;
    }
  }, [isSavedSuccessfully, opacityEditButton, yOffsetEditButton]);

  const editButtonStyleAnimated = useAnimatedStyle(() => ({
    opacity: interpolateOpacity(opacityEditButton),
    transform: [interpolateTranslateY(yOffsetEditButton)],
  }));

  const handleEmailSubmitEditing = useCallback(() => {
    fullNameRef.current.focus();
  }, [fullNameRef]);

  const handleFullNameSubmitEditing = useCallback(() => {
    fullNameRef.current.blur();
    Keyboard.dismiss();
  }, [fullNameRef]);

  return (
    <View style={styles.form}>
      <View style={styles.formHeader}>
        <Typography size="h5" strong>
          {translate('screens.profile.details')}
        </Typography>

        {!isEditing && !isSavedSuccessfully && (
          <Animated.View style={editButtonStyleAnimated}>
            <TextButton
              customStyle={styles.buttonEdit}
              onPress={handleEdit}
              label={translate('screens.profile.action.edit')}
            />
          </Animated.View>
        )}
        <Tooltip
          text={translate('screens.profile.tooltip.saved')}
          style={styles.tooltip}
          showTooltip={isSavedSuccessfully}
          variant={TooltipVariant.SUCCESS}
          isAnimated
        />
      </View>
      <View>
        {/* TODO deal with error : email already exists */}
        <TextInput
          customContainerStyle={styles.textInput}
          hintText={translate('fields.email.title')}
          value={values.email}
          defaultValue={values.email}
          error={!!errors.email}
          helperText={errors.email}
          touched={touched.email}
          disabled={!isEditing}
          keyboardType="email-address"
          autoCompleteType="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          onBlur={handleBlur('email')}
          onChangeText={handleChange('email')}
          ref={emailRef}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={handleEmailSubmitEditing}
        />
        <TextInput
          customContainerStyle={styles.textInput}
          hintText={translate('fields.fullName.title')}
          value={values.fullName}
          defaultValue={values.fullName}
          error={!!errors.fullName}
          helperText={errors.fullName}
          touched={touched.fullName}
          disabled={!isEditing}
          textContentType="name"
          autoCapitalize="none"
          onBlur={handleBlur('fullName')}
          onChangeText={handleChange('fullName')}
          ref={fullNameRef}
          returnKeyType="done"
          blurOnSubmit={false}
          onSubmitEditing={handleFullNameSubmitEditing}
        />
      </View>
    </View>
  );
};

export default Form;
