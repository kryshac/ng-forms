import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// tslint:disable-next-line: no-implicit-dependencies
import { markNestedAsTouched } from '@kryshac/ng-forms';

@Component({
  selector: 'kr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password_retype: ['', Validators.required],
    });
  }

  submit(): void {
    markNestedAsTouched(this.form);
    this.form.valid ? console.log('is valid') : console.log('is not valid');
  }
}
