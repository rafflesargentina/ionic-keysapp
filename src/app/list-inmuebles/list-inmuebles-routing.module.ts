import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListInmueblesPage } from './list-inmuebles.page';

const routes: Routes = [
  {
    path: '',
    component: ListInmueblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListInmueblesPageRoutingModule {}
