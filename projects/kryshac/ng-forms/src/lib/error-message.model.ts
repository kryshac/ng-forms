// tslint:disable-next-line: interface-name
export interface ErrorMessage {
  min: (error: { min: number; actual: number | string }) => string;
  max: (error: { max: number; actual: number | string }) => string;
  required: ((error: any) => string) | string;
  undefined: ((error: any) => string) | string;
  email: ((error: any) => string) | string;
  minlength: (error: { requiredLength: number; actualLength: number }) => string;
  maxlength: (error: { requiredLength: number; actualLength: number }) => string;
  pattern: (error: { requiredPattern: string; actualValue: string }) => string;
  [key: string]: ((error: any) => string) | string;
}
