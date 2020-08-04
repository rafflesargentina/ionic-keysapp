import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAgentePageRoutingModule } from './detail-agente-routing.module';

import { DetailAgentePage } from './detail-agente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAgentePageRoutingModule
  ],
  declarations: [DetailAgentePage]
})
export class DetailAgentePageModule {}
