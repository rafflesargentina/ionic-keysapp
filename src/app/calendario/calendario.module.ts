import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { ComponentsModule } from '../Components/components.module';

//para el manejo de la fecha
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CalendarioPageRoutingModule
  ],
  declarations: [CalendarioPage, ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"}
  ]
})
export class CalendarioPageModule {}
