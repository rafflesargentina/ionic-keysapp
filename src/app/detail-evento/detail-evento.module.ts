import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEventoPageRoutingModule } from './detail-evento-routing.module';

import { DetailEventoPage } from './detail-evento.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    DetailEventoPageRoutingModule
  ],
  declarations: [DetailEventoPage]
})
export class DetailEventoPageModule {}
