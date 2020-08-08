import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { InmueblesService } from '../Services/inmuebles.service';
import { UsuarioService } from '../Services/usuario.service';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage],
  providers: [UsuarioService, InmueblesService]
})
export class DetailPageModule {}
