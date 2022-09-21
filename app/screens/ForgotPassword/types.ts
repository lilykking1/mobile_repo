export interface FormValues {
  email: string;
}

export interface FormErrors {
  email: {
    message: string;
    isError: boolean;
  };
}
