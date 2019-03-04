import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { markNestedTouch } from './mark-nested-touch';

type FormType = FormGroup | FormArray | FormControl;

export function markNestedAsUntouched(form: FormType): void {
  markNestedTouch(form, false);
}
