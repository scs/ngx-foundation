import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RevealModule} from 'ngx-foundation/reveal';

import { AppComponent } from './app.component';
import { ComponentDialog } from './dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RevealModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
