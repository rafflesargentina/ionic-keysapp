import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSucursalPageRoutingModule } from './detail-sucursal-routing.module';

import { DetailSucursalPage } from './detail-sucursal.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    DetailSucursalPageRoutingModule
  ],
  declarations: [DetailSucursalPage]
})
export class DetailSucursalPageModule {}
