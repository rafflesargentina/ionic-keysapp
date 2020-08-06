import { NgModule } from '@angular/core';
import { SeleccionarImagenComponent } from '../Components/seleccionar-imagen/seleccionar-imagen.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { HeaderComponent } from '../Components/header/header.component';
import { CardClienteComponent } from '../Components/card-cliente/card-cliente.component';
import { CardInmuebleComponent } from './card-inmueble/card-inmueble.component';
import { CardAgenteComponent } from './card-agente/card-agente.component';
import { CardPropietarioComponent } from './card-propietario/card-propietario.component';
import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { ListInmueblesComponent } from './list-inmuebles/list-inmuebles.component';
import { ListPropietariosPage } from '../list-propietarios/list-propietarios.page';

@NgModule({
imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ImageCropperModule,
    ],
  declarations: [
    SeleccionarImagenComponent,
    HeaderComponent,
    CardClienteComponent,
    CardInmuebleComponent,
    CardAgenteComponent,
    CardPropietarioComponent,
    ListClientesComponent,
    ListInmueblesComponent
  ],
  exports: [
    SeleccionarImagenComponent,
    HeaderComponent,
    CardClienteComponent,
    CardInmuebleComponent,
    CardAgenteComponent,
    CardPropietarioComponent,
    ListClientesComponent,
    ListInmueblesComponent,
  ]
})
export class ComponentsModule {}