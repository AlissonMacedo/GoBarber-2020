import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}



export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((teste, index) => {
    const teste2 = teste.path?.length ? teste.path : ''
    validationErrors[teste2] = teste.message;
  })
  return validationErrors;
}