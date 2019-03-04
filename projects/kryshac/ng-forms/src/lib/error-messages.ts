import { ErrorMessage } from './error-message.model';

export const ERROR_MESSAGES: ErrorMessage = {
  min: (error: { min: number; actual: number | string }): string => `Field value must be at least ${error.min}, it is now ${error.actual}`,
  max: (error: { max: number; actual: number | string }): string =>
    `The field value must be at most ${error.max}, it is now ${error.actual}`,
  validate_equal: 'This password is don\'t match',
  required: 'This field is required',
  email: 'This field is not an email',
  minlength: (error: { requiredLength: number; actualLength: number }): string =>
    `The field must contain at least ${error.requiredLength} characters, it now has ${error.actualLength} characters`,
  maxlength: (error: { requiredLength: number; actualLength: number }): string =>
    `The field must contain a maximum of ${error.requiredLength} characters, now it has ${error.actualLength} characters`,
  pattern: (error: { requiredPattern: string; actualValue: string }): string =>
    `The field must coincide with the \"${error.requiredPattern}\" pattern, now it is \"${error.actualValue}\"`,
  undefined: 'This field contains an unknown error',
};
