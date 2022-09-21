export type RegisterAccountRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  state: string;
  name: string;
  isAgreementChecked: boolean;
  emailOptedIn: boolean;
};

export interface RegisterAccountResponse {
  data: {
    id: string;
    email: string;
  };
}
