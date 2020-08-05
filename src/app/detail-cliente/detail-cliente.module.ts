import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailClientePageRoutingModule } from './detail-cliente-routing.module';

import { DetailClientePage } from './detail-cliente.page';
import { ClientesService } from '../Services/clientes.service';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetailClientePageRoutingModule
  ],
  declarations: [DetailClientePage],
  providers: [ClientesService]
})
export class DetailClientePageModule {}
