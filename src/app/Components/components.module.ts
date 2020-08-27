import { NgModule } from '@angular/core';
import { SeleccionarImagenComponent } from '../Components/seleccionar-imagen/seleccionar-imagen.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { InputUbicacionComponent } from '../Components/input-ubicacion/input-ubicacion.component';
import { HeaderComponent } from './header/header.component';
import { ItemDirective } from './list-base/item.directive';
import { ListBaseComponent } from './list-base/list-base.component';
import { CardEventoComponent } from './card-evento/card-evento.component';

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
    ListBaseComponent,
    CardEventoComponent,
    ItemDirective
  ],
  exports: [
    SeleccionarImagenComponent,
    HeaderComponent,
    ListBaseComponent,
    CardEventoComponent,
    ItemDirective
  ]
})
export class ComponentsModule {}