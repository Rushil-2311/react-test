export interface FormDataInputs {
  name: string;
  password: string;
  username: string;
  email: string;
  id?: number;
}

export interface FormErrors {
  name: string | null;
  password: string | null;
  username: string | null;
  email: string | null;
}
