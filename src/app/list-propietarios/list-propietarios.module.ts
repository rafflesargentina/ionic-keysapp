import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPropietariosPageRoutingModule } from './list-propietarios-routing.module';

import { ListPropietariosPage } from './list-propietarios.page';
import { ComponentsModule } from '../Components/components.module';
import { PropietariosService } from '../Services/propietarios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListPropietariosPageRoutingModule
  ],
  declarations: [ListPropietariosPage],
  providers: [PropietariosService]
})
export class ListPropietariosPageModule {}
