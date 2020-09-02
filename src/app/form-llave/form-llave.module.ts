import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLlavePageRoutingModule } from './form-llave-routing.module';

import { FormLlavePage } from './form-llave.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormLlavePageRoutingModule
  ],
  declarations: [FormLlavePage]
})
export class FormLlavePageModule {}
