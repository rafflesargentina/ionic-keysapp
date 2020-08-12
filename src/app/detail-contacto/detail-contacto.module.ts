import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailContactoPageRoutingModule } from './detail-contacto-routing.module';

import { DetailContactoPage } from './detail-contacto.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    DetailContactoPageRoutingModule
  ],
  declarations: [DetailContactoPage]
})
export class DetailContactoPageModule {}
