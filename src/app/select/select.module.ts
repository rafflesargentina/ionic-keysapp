import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPageRoutingModule } from './select-routing.module';

import { SelectPage } from './select.page';
import { ComponentsModule } from '../Components/components.module';
import { ListBaseComponent } from '../Components/list-base/list-base.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SelectPageRoutingModule
  ],
  declarations: [SelectPage]
})
export class SelectPageModule {}
