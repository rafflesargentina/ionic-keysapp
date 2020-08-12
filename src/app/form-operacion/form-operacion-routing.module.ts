import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOperacionPage } from './form-operacion.page';

const routes: Routes = [
  {
    path: '',
    component: FormOperacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOperacionPageRoutingModule {}
