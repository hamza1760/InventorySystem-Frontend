import {
  Component,
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  AddInventoryComponent
} from './components/add-inventory/add-inventory.component';
import {
  AddItemComponent
} from './components/add-item/add-item.component';
import {
  AddWarehouseComponent
} from './components/add-warehouse/add-warehouse.component';
import {
  DashboardComponent
} from './components/dashboard/dashboard.component';
import {
  LoginComponent
} from './components/login/login.component';
import {
  RegisterComponent
} from './components/register/register.component';
import { SetItemquantityComponent } from './components/set-itemquantity/set-itemquantity.component';
import {
  ViewInventoryComponent
} from './components/view-inventory/view-inventory.component';
import {
  ViewItemquantityComponent
} from './components/view-itemquantity/view-itemquantity.component';
import {
  ViewItemsComponent
} from './components/view-items/view-items.component';
import {
  ViewWarehousesComponent
} from './components/view-warehouses/view-warehouses.component';
import { AdminGuard } from './services/admin.guard';
import { DashboardGuard } from './services/dashboard.guard';



const routes: Routes = [{
    path: '',
    component: LoginComponent,
  },
  {
    path: 'warehouse/item',
    component: ViewItemquantityComponent,
    pathMatch: 'full'
  },
  {
    path: 'warehouse/:warehouseId/item/quantity/:inventoryId',
    component: SetItemquantityComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'signup',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'item',
    component: AddItemComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'warehouse',
    component: AddWarehouseComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'inventory',
    component: AddInventoryComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard]
  },
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate: [DashboardGuard]
  },
  {
    path: 'items',
    component: ViewItemsComponent,
    pathMatch: 'full',
    canActivate: [DashboardGuard]
  },
  {
    path: 'warehouses',
    component: ViewWarehousesComponent,
    pathMatch: 'full',
    canActivate: [DashboardGuard]
  },
  {
    path: 'inventories',
    component: ViewInventoryComponent,
    pathMatch: 'full',
    canActivate: [DashboardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
