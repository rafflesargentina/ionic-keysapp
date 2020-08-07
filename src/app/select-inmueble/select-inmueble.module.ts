import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//lo quitamos porque es modal y no se puede navegar desde la barra
//import { SelectInmueblePageRoutingModule } from './select-inmueble-routing.module';

import { SelectInmueblePage } from './select-inmueble.page';
import { ComponentsModule } from '../Components/components.module';
import { InmueblesService } from '../Services/inmuebles.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
  ],
  declarations: [SelectInmueblePage],
  providers: [InmueblesService]
})
export class SelectInmueblePageModule {}
