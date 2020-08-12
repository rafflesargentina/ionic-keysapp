import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRegistroAdministradorPage } from './form-registro-administrador.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegistroAdministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRegistroAdministradorPageRoutingModule {}
