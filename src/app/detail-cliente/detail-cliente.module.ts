import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClientePageRoutingModule } from './detail-cliente-routing.module';

import { DetailClientePage } from './detail-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClientePageRoutingModule
  ],
  declarations: [DetailClientePage]
})
export class DetailClientePageModule {}
