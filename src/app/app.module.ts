import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ViewItemquantityComponent } from './pages/view-itemquantity/view-itemquantity.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import{HttpClientModule} from  '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ItemQuantityButtonComponent } from './pages/item-quantity-button/item-quantity-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemquantityComponent,
    ItemQuantityButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule ,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
