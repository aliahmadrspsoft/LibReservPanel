import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LibReservPanelModule} from 'lib-reserv-panel'
import {environment} from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	LibReservPanelModule,
  LibReservPanelModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
