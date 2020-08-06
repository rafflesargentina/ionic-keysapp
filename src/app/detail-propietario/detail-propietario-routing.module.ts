import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPropietarioPage } from './detail-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPropietarioPageRoutingModule {}
