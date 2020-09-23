import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRegistroPropiedadPageRoutingModule } from './form-registro-propiedad-routing.module';

import { FormRegistroPropiedadPage } from './form-registro-propiedad.page';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { ComponentsModule } from '../Components/components.module';
import { ToastService } from '../Services/toast.service';
import { InmueblesService } from '../Services/inmuebles.service';
import { UsuarioService } from '../Services/usuario.service';
import { SelectPage } from '../select/select.page';
import { FormOperacionPage } from '../form-operacion/form-operacion.page';

@NgModule({
  entryComponents: [SelectPage, FormOperacionPage], //para manejar los modales de selección
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    FormRegistroPropiedadPageRoutingModule,
  ],
  declarations: [FormRegistroPropiedadPage, InputUbicacionComponent],
  providers: [ToastService, InmueblesService, UsuarioService]
})
export class FormRegistroPropiedadPageModule {}
