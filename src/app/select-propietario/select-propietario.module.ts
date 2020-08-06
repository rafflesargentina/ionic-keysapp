import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPropietarioPageRoutingModule } from './select-propietario-routing.module';

import { SelectPropietarioPage } from './select-propietario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPropietarioPageRoutingModule
  ],
  declarations: [SelectPropietarioPage]
})
export class SelectPropietarioPageModule {}
