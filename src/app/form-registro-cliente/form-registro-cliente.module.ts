import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroClientePageRoutingModule } from './form-registro-cliente-routing.module';

import { FormRegistroClientePage } from './form-registro-cliente.page';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRegistroClientePageRoutingModule
  ],
  declarations: [FormRegistroClientePage]
})
export class FormRegistroClientePageModule {}
