export interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
  name: string;
  country: string;
  state: string;
  isAgreementChecked: boolean;
  emailOptedIn: boolean;
}

export type SelectorType = 'country' | 'state';
