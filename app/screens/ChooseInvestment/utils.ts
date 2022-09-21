import { FormikConfig, useFormik } from 'formik';
import { FormValues } from './types';
import { ChooseInvestmentSchema } from './validation';

export const useForm = (config?: FormikConfig<FormValues>) =>
  useFormik<FormValues>({
    initialValues: {
      investmentValue: config.initialValues.investmentValue,
    },
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: ChooseInvestmentSchema,
    ...config,
  });

export const removeStringCommas = (stringText: string): string =>
  stringText.replaceAll(',', '');
