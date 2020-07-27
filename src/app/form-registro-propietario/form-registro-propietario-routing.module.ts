import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroPropietarioPage } from './form-registro-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegistroPropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRegistroPropietarioPageRoutingModule {}
