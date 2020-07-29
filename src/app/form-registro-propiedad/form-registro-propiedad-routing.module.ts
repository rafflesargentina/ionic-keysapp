import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroPropiedadPage } from './form-registro-propiedad.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegistroPropiedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRegistroPropiedadPageRoutingModule {}
