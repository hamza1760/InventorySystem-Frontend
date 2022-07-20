import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemQuantityButtonComponent } from './components/item-quantity-button/item-quantity-button.component';
import { ViewItemquantityComponent } from './components/view-itemquantity/view-itemquantity.component';

const routes: Routes = [
  {
    path: 'itemquantity',
    component: ViewItemquantityComponent,
    pathMatch: 'full'
  },
  {
    path: '',
  component: ItemQuantityButtonComponent,
  pathMatch: 'full'

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
