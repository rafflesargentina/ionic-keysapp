import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroPropietarioPageRoutingModule } from './form-registro-propietario-routing.module';

import { FormRegistroPropietarioPage } from './form-registro-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRegistroPropietarioPageRoutingModule
  ],
  declarations: [FormRegistroPropietarioPage]
})
export class FormRegistroPropietarioPageModule {}
