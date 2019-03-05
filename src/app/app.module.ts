import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ERROR_MESSAGES_TOKEN, ErrorMessage, NgFormsModule } from '@kryshac/ng-forms';

import { AppComponent } from './app.component';

export const errorMessages: Partial<ErrorMessage> = {
  required: 'test error message',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatButtonModule, NgFormsModule],
  providers: [
    {
      provide: ERROR_MESSAGES_TOKEN,
      useValue: errorMessages,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
