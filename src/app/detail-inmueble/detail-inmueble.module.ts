import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailInmueblePageRoutingModule } from './detail-inmueble-routing.module';

import { DetailInmueblePage } from './detail-inmueble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailInmueblePageRoutingModule
  ],
  declarations: [DetailInmueblePage]
})
export class DetailInmueblePageModule {}
