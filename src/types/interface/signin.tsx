export interface FormDataInputsForSignIn {
  password: string;
  email: string;
}

export interface FormErrorsForSignIn {
  password: string | null;
  email: string | null;
}
