import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';

import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
