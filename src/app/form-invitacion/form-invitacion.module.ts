import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInvitacionPageRoutingModule } from './form-invitacion-routing.module';

import { FormInvitacionPage } from './form-invitacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormInvitacionPageRoutingModule
  ],
  declarations: [FormInvitacionPage]
})
export class FormInvitacionPageModule {}
