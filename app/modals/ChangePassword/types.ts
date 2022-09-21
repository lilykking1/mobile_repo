export enum ErrorTypeNewPassword {
  MISSING_SPECIAL_CHAR = 'missingSpecialChar',
  MISSING_CAPITAL_CHAR = 'missingCapitalChar',
}

export interface FormValues {
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}
