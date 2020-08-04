import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAgentePage } from './detail-agente.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAgentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAgentePageRoutingModule {}
