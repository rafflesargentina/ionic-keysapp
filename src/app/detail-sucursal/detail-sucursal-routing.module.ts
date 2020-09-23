import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSucursalPage } from './detail-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSucursalPageRoutingModule {}
