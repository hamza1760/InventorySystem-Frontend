import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewItemquantityComponent } from './components/view-itemquantity/view-itemquantity.component';



const routes: Routes = [
  {
    path: 'itemquantity',
    component: ViewItemquantityComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
