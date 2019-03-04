import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[krEqual][formControlName],[krEqual][formControl],[krEqual][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualDirective), multi: true }],
})
export class EqualDirective implements Validator {
  private _error: ValidationErrors = { validate_equal: true };

  constructor(@Attribute('krEqual') public krEqual: string, @Attribute('krRepeat') public retype?: string) {}

  validate(c: AbstractControl): ValidationErrors | null {
    // self value (e.g. password retype)
    const v = c.value;

    // control value (e.g. password)
    const e = c.root.get(this.krEqual);

    // input values are not equal and self input is retype
    if (e && v !== e.value && this._isRetype) return this._error;

    // input values are not equal and self input is not retype
    if (e && v !== e.value && !this._isRetype) e.setErrors({ ...e.errors, ...this._error });

    // input values are equal and self input is not retype
    if (e && v === e.value && !this._isRetype && e.errors) {
      delete e.errors['validate_equal'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    return null;
  }

  private get _isRetype(): boolean {
    if (!this.retype) return false;
    return this.retype === 'true' ? true : false;
  }
}
