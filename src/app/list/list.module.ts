import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { ComponentsModule } from '../Components/components.module';
import { InmueblesService } from '../Services/inmuebles.service';
import { UsuarioService } from '../Services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage],
  providers: [InmueblesService, UsuarioService],
})
export class ListPageModule {}
