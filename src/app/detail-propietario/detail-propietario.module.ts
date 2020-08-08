import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DetailPropietarioPage } from './detail-propietario.page';
import { ComponentsModule } from '../Components/components.module';
import { PropietariosService } from '../Services/propietarios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule
  ],
  declarations: [DetailPropietarioPage],
  providers: [PropietariosService]
})
export class DetailPropietarioPageModule {}
