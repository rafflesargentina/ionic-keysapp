import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailContactoPage } from './detail-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: DetailContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailContactoPageRoutingModule {}
