import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';

@Component({
  selector: 'app-select-cliente',
  templateUrl: './select-cliente.page.html',
  styleUrls: ['./select-cliente.page.scss'],
})
export class SelectClientePage implements OnInit {
  cliente: Usuario;
  
  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
 
  }

  seleccionar(item: Usuario){
    //console.log('select-clientes.page.seleccionar(item)', item);
    this.modalCtrl.dismiss({
      cliente: item
    });
  }

  async agregar(event){
    console.log('agregar');
    this.modalInvitacion();
    if(this.cliente){
      this.modalCtrl.dismiss({
        cliente: this.cliente
      });
    }
  }

  async modalInvitacion(){
    const modalCliente = await this.modalCtrl.create({ 	
      component: FormInvitacionPage, 			
      componentProps: { 				
        //datos que viajan al modal en modo clave: valor,	
        isModal: true				
      } 							
    }); 							
    await modalCliente.present(); 
    const {data} = await modalCliente.onDidDismiss(); 	
    this.cliente = data;
    console.log('Retorno del modal Invitacion', data); 		
  }

  volver(event){
    this.modalCtrl.dismiss();	
  }
  
}
