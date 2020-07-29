import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroPropiedadPageRoutingModule } from './form-registro-propiedad-routing.module';

import { FormRegistroPropiedadPage } from './form-registro-propiedad.page';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRegistroPropiedadPageRoutingModule,
  ],
  declarations: [FormRegistroPropiedadPage, InputUbicacionComponent]
})
export class FormRegistroPropiedadPageModule {}
