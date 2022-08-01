import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddWarehouseComponent } from './components/add-warehouse/add-warehouse.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
  },
  {
        path: 'addItem',
        component: AddItemComponent
      },
      {
        path: 'addWarehouse',
        component: AddWarehouseComponent
      },
      {
        path: 'addInventory',
        component: AddInventoryComponent
      },
  {
    path: 'welcome',
    component: DashboardComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
