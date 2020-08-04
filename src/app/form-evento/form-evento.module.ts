import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEventoPageRoutingModule } from './form-evento-routing.module';

import { FormEventoPage } from './form-evento.page';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEventoPageRoutingModule
  ],
  declarations: [FormEventoPage,CardInmuebleComponent]
})
export class FormEventoPageModule {}
