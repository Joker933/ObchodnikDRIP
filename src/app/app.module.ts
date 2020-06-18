import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktyComponent } from './produkty/produkty.component';
import { DomovComponent } from './domov/domov.component';
import { ProduktInfoComponent } from './produkt-info/produkt-info.component';
import { KosikComponent } from './kosik/kosik.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktyComponent,
    DomovComponent,
    ProduktInfoComponent,
    KosikComponent
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
