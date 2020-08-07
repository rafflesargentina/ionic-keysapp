import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//lo quitamos porque es modal y no se puede navegar desde la barra
//import { SelectClientePageRoutingModule } from './select-cliente-routing.module'; 

import { SelectClientePage } from './select-cliente.page';
import { ComponentsModule } from '../Components/components.module';
import { ClientesService } from '../Services/clientes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
  ],
  declarations: [SelectClientePage],
  providers: [ClientesService]
})
export class SelectClientePageModule {}
