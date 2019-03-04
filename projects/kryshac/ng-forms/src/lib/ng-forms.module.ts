import { NgModule } from '@angular/core';

import { EqualDirective } from './equal.directive';
import { ErrorMessagePipe } from './error-message.pipe';
import { ERROR_MESSAGES } from './error-messages';
import { ERROR_MESSAGES_TOKEN } from './error-token';
import { ErrorPipe } from './error.pipe';

@NgModule({
  declarations: [ErrorPipe, ErrorMessagePipe, EqualDirective],
  imports: [],
  exports: [ErrorPipe, ErrorMessagePipe, EqualDirective],
  providers: [
    {
      provide: ERROR_MESSAGES_TOKEN,
      useValue: ERROR_MESSAGES,
    },
  ],
})
export class NgFormsModule {}
