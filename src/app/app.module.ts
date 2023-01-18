import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CatComponent} from './cat/cat.component';
import {DogComponent} from './dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
