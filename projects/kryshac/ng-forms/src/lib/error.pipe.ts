import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'krError',
  pure: false,
})
export class ErrorPipe implements PipeTransform {
  transform(form: FormGroup, args: string): boolean {
    // get control
    const control: AbstractControl = form.controls[args];

    // check if the control has errors or if it has been changed and touched
    if (!control.errors || (control.pristine && !control.touched)) return false;

    return true;
  }
}
