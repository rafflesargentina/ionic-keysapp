import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailLlavePage } from './detail-llave.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLlavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailLlavePageRoutingModule {}
