import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectInmueblePageRoutingModule } from './select-inmueble-routing.module';

import { SelectInmueblePage } from './select-inmueble.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SelectInmueblePageRoutingModule
  ],
  declarations: [SelectInmueblePage]
})
export class SelectInmueblePageModule {}
