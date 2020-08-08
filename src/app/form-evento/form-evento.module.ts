import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEventoPageRoutingModule } from './form-evento-routing.module';

import { FormEventoPage } from './form-evento.page';
//import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { ComponentsModule } from '../Components/components.module';
import { SelectPage } from '../select/select.page';

@NgModule({
  entryComponents: [SelectPage], //para manejar los modales de seleccion
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    FormEventoPageRoutingModule
  ],
  declarations: [FormEventoPage]
})
export class FormEventoPageModule {}
