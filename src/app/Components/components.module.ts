import { NgModule } from '@angular/core';
import { SeleccionarImagenComponent } from '../Components/seleccionar-imagen/seleccionar-imagen.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { HeaderComponent } from '../Components/header/header.component';
import { CardInmuebleComponent } from './card-inmueble/card-inmueble.component';
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
    CardInmuebleComponent,
    ListClientesComponent,
    ListInmueblesComponent
  ],
  exports: [
    SeleccionarImagenComponent,
    HeaderComponent,
    CardInmuebleComponent,
    ListClientesComponent,
    ListInmueblesComponent,
  ]
})
export class ComponentsModule {}