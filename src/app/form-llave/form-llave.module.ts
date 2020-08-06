import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormLlavePageRoutingModule } from './form-llave-routing.module';

import { FormLlavePage } from './form-llave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormLlavePageRoutingModule
  ],
  declarations: [FormLlavePage]
})
export class FormLlavePageModule {}
