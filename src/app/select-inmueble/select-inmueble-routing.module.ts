import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectInmueblePage } from './select-inmueble.page';

const routes: Routes = [
  {
    path: '',
    component: SelectInmueblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectInmueblePageRoutingModule {}
