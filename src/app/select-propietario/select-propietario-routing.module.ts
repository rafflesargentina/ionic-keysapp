import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPropietarioPage } from './select-propietario.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPropietarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPropietarioPageRoutingModule {}
