import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListInmueblesPageRoutingModule } from './list-inmuebles-routing.module';

import { ListInmueblesPage } from './list-inmuebles.page';
import { InmueblesService } from '../Services/inmuebles.service';
import { ComponentsModule } from '../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListInmueblesPageRoutingModule
  ],
  declarations: [ListInmueblesPage],
  providers: [InmueblesService]
})
export class ListInmueblesPageModule {}
