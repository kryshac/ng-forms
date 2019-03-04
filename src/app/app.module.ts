import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line: no-implicit-dependencies
import { NgFormsModule } from '@kryshac/ng-forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatButtonModule, NgFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
