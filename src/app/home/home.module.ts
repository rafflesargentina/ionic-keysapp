import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
//import { SelectClientePage } from '../select-cliente/select-cliente.page';
//import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';
import { ComponentsModule } from '../Components/components.module';
import { SelectPage } from '../select/select.page';
import { SelectPageModule } from '../select/select.module';
//import { SelectClientePageModule } from '../select-cliente/select-cliente.module';
//import { SelectInmueblePageModule } from '../select-inmueble/select-inmueble.module';

@NgModule({
  entryComponents: [SelectPage], //para manejar los modales de seleccion
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    SelectPageModule,//para manejar modal de seleccion
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
