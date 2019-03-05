import { InjectionToken } from '@angular/core';

import { ErrorMessage } from './error-message.model';

export const ERROR_MESSAGES_TOKEN = new InjectionToken<Partial<ErrorMessage>>('Form-Error-Messages');
