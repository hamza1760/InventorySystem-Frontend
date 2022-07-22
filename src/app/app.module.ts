import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import{HttpClientModule} from  '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { ButtonComponent } from './components/button/button.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewItemquantityComponent } from './components/view-itemquantity/view-itemquantity.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    ViewItemquantityComponent,
    RegisterComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule ,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
