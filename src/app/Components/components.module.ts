import { NgModule } from '@angular/core';
import { SeleccionarImagenComponent } from '../Components/seleccionar-imagen/seleccionar-imagen.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { CardInmuebleComponent } from './card-inmueble/card-inmueble.component';
import { CardClienteComponent } from './card-cliente/card-cliente.component';


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
    CardInmuebleComponent,
    CardClienteComponent
  ],
  exports: [
    SeleccionarImagenComponent,
    CardInmuebleComponent,
    CardClienteComponent
  ]
})
export class ComponentsModule {}