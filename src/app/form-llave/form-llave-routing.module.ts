import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormLlavePage } from './form-llave.page';

const routes: Routes = [
  {
    path: '',
    component: FormLlavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormLlavePageRoutingModule {}
