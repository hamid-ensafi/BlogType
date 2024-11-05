interface FieldErrors {
  username: string[];
  password: string[];
}
export interface IError {
  message: string;
  errors?: FieldErrors;
}