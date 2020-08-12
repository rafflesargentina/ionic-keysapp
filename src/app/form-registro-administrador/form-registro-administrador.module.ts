import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroAdministradorPageRoutingModule } from './form-registro-administrador-routing.module';

import { FormRegistroAdministradorPage } from './form-registro-administrador.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormRegistroAdministradorPageRoutingModule
  ],
  declarations: [FormRegistroAdministradorPage]
})
export class FormRegistroAdministradorPageModule {}
