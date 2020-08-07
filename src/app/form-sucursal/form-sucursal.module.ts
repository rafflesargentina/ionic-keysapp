import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSucursalPageRoutingModule } from './form-sucursal-routing.module';

import { FormSucursalPage } from './form-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormSucursalPageRoutingModule
  ],
  declarations: [FormSucursalPage]
})
export class FormSucursalPageModule {}
