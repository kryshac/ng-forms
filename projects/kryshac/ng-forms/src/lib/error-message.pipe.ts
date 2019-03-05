import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import { ErrorMessage } from './error-message.model';
import { ERROR_MESSAGES } from './error-messages';
import { ERROR_MESSAGES_TOKEN } from './error-token';

@Pipe({
  name: 'krErrorMessage',
  pure: false,
})
export class ErrorMessagePipe implements PipeTransform {
  private _errors: ErrorMessage = ERROR_MESSAGES;

  constructor(@Optional() @Inject(ERROR_MESSAGES_TOKEN) errors: ErrorMessage | null) {
    this._errors = { ...this._errors, ...errors };
  }

  transform(form: FormGroup, args: string): boolean | string {
    // get control
    const control: AbstractControl = form.controls[args];

    // check if the control has errors or if it has been changed and touched
    if (!control.errors || (control.pristine && !control.touched)) return false;

    // get the key of error
    const [keyError]: string[] = Object.keys(control.errors);
    const error = control.errors[keyError];

    // get the error message
    return this._errors[keyError]
      ? typeof this._errors[keyError] === 'function'
        ? (this._errors[keyError] as any)(error)
        : this._errors[keyError]
      : this._errors['undefined'];
  }
}
