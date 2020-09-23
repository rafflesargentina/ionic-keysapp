import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailLlavePageRoutingModule } from './detail-llave-routing.module';

import { DetailLlavePage } from './detail-llave.page';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    DetailLlavePageRoutingModule
  ],
  declarations: [DetailLlavePage]
})
export class DetailLlavePageModule {}
