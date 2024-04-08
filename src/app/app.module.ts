// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// APP COMPONENT
import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

// modules


// code

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
