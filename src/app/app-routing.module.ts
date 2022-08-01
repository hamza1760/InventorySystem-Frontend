import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
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
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children:[
      {
        path: 'addItem',
        component: AddItemComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
