export interface InputObject {
  type: string,
  value: string,
  placeholder: string,
  name: string,
  handlerChange: (val: string) => void
}

export interface FormInput {
  firstName: string,
  lastName: string,
  email: string,
}

export interface Errors {
  error: string
}