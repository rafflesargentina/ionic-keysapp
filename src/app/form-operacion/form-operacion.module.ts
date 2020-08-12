import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOperacionPageRoutingModule } from './form-operacion-routing.module';

import { FormOperacionPage } from './form-operacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOperacionPageRoutingModule
  ],
  declarations: [FormOperacionPage]
})
export class FormOperacionPageModule {}
