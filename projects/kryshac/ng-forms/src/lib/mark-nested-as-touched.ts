import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { markNestedTouch } from './mark-nested-touch';

type FormType = FormGroup | FormArray | FormControl;

export function markNestedAsTouched(form: FormType): void {
  markNestedTouch(form, true);
}
