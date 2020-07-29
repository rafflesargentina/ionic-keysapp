import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroSucursalPageRoutingModule } from './form-registro-sucursal-routing.module';

import { FormRegistroSucursalPage } from './form-registro-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRegistroSucursalPageRoutingModule
  ],
  declarations: [FormRegistroSucursalPage]
})
export class FormRegistroSucursalPageModule {}
