import { NgModule } from '@angular/core';

import { EqualDirective } from './equal.directive';
import { ErrorMessagePipe } from './error-message.pipe';
import { ErrorPipe } from './error.pipe';

@NgModule({
  declarations: [ErrorPipe, ErrorMessagePipe, EqualDirective],
  exports: [ErrorPipe, ErrorMessagePipe, EqualDirective],
})
export class NgFormsModule {}
