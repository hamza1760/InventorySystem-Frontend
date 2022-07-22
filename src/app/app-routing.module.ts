import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewItemquantityComponent } from './components/view-itemquantity/view-itemquantity.component';



const routes: Routes = [
  {
    path: 'itemquantity',
    component: ViewItemquantityComponent,
    pathMatch: 'full'
  },
  {
    path: '',
  component: ButtonComponent,
  pathMatch: 'full'
  },
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
