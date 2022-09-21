import * as yup from 'yup';

export const TwoFactorConfigurationRecoverySchema = yup.object().shape({
  safelyRecorded: yup.boolean().isTrue('This field is required'),
});
