export interface FormDataInputs {
  name: string;
  password: string;
  username: string;
  email: string;
}

export interface FormErrors {
  name: string | null;
  password: string | null;
  username: string | null;
  email: string | null;
}
