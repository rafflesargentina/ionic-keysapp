import { NgModule } from '@angular/core';
import { SeleccionarImagenComponent } from '../Components/seleccionar-imagen/seleccionar-imagen.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
//import { ListClientesComponent } from './list-clientes/list-clientes.component';
import { HeaderComponent } from './header/header.component';
//import { CardUsuarioComponent } from './card-usuario/card-usuario.component';
//import { ListInmueblesComponent } from './list-inmuebles/list-inmuebles.component';
//import { ListAgentesComponent } from './list-agentes/list-agentes.component';
//import { CardInmuebleComponent } from './card-inmueble/card-inmueble.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


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
    ListComponent,
    DetailComponent,
    CardComponent
  ],
  exports: [
    SeleccionarImagenComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent,
    CardComponent
  ]
})
export class ComponentsModule {}