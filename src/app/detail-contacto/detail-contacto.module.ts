import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailContactoPageRoutingModule } from './detail-contacto-routing.module';

import { DetailContactoPage } from './detail-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailContactoPageRoutingModule
  ],
  declarations: [DetailContactoPage]
})
export class DetailContactoPageModule {}
