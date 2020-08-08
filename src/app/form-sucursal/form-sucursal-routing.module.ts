import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormSucursalPage } from './form-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: FormSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormSucursalPageRoutingModule {}
