import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheNavbarComponent } from './shared/the-navbar/the-navbar.component';
import { TheFooterComponent } from './shared/the-footer/the-footer.component';
import { PlatosComponent } from './components/platos/platos.component';

@NgModule({
  declarations: [
    AppComponent,
    TheNavbarComponent,
    TheFooterComponent,
    PlatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
