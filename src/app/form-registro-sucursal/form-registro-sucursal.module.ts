import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroSucursalPageRoutingModule } from './form-registro-sucursal-routing.module';

import { FormRegistroSucursalPage } from './form-registro-sucursal.page';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    FormRegistroSucursalPageRoutingModule
  ],
  declarations: [FormRegistroSucursalPage, InputUbicacionComponent]
})
export class FormRegistroSucursalPageModule {}
