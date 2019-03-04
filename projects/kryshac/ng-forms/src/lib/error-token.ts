import { InjectionToken } from '@angular/core';
import { ErrorMessage } from './error-message.model';

export const ERROR_MESSAGES_TOKEN = new InjectionToken<ErrorMessage>('Form-Error-Messages');
