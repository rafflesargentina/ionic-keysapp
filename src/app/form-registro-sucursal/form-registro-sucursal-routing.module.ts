import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroSucursalPage } from './form-registro-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegistroSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRegistroSucursalPageRoutingModule {}
