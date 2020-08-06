import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListClientesPageRoutingModule } from './list-clientes-routing.module';

import { ListClientesPage } from './list-clientes.page';
import { ClientesService } from '../Services/clientes.service';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListClientesPageRoutingModule,
  ],
  declarations: [ListClientesPage],
  providers: [ClientesService],
})
export class ListClientesPageModule {}
