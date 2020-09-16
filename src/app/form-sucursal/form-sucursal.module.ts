import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormSucursalPageRoutingModule } from './form-sucursal-routing.module';

import { FormSucursalPage } from './form-sucursal.page';
import { ComponentsModule } from '../Components/components.module';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { ToastService } from '../Services/toast.service';
import { SucursalesService } from '../Services/sucursales.service';
import { UsuarioService } from '../Services/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    FormSucursalPageRoutingModule
  ],
  declarations: [FormSucursalPage, InputUbicacionComponent],
  providers: [ToastService, SucursalesService, UsuarioService]
})
export class FormSucursalPageModule {}
