import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewItemquantityComponent } from './pages/view-itemquantity/view-itemquantity.component';

const routes: Routes = [
  {
    path: 'itemquantity',
    component: ViewItemquantityComponent,
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
