import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { FormRegistroPropiedadPage } from '../form-registro-propiedad/form-registro-propiedad.page';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  @Input() tipo: string;
  titulo: string;
  item: any;
  
  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    switch (this.tipo){
      case 'inmueble':
        this.titulo = 'Seleccionar Inmueble';
        break;
      case 'cliente':
        this.titulo = 'Seleccionar Cliente';
        break;
      case 'agente':
        this.titulo = 'Seleccionar Agente';
        break;
      case 'propietario':
        this.titulo = 'Seleccionar Propietario';
        break;
      case 'usuario':
        this.titulo = 'Seleccionar Usuario';
        break;
      default:
        this.titulo = '';
        break;
    }
  }

  seleccionar(item){
    //console.log('select-clientes.page.seleccionar(item)', item);
    this.modalCtrl.dismiss({
      cliente: item
    });
  }

  async agregar(event){
    console.log('agregar');
    this.modalInvitacion();
    if(this.item){
      this.modalCtrl.dismiss({
        data: this.item
      });
    }
  }

  async modalInvitacion(){
    if(this.tipo != 'inmueble'){
      const modalUsuario = await this.modalCtrl.create({ 	
        component: FormInvitacionPage, 			
        componentProps: { 				
          //datos que viajan al modal en modo clave: valor,	
          isModal: true				
        } 							
      }); 							
      await modalUsuario.present(); 
      const {data} = await modalUsuario.onDidDismiss(); 	
      this.item = data;
      console.log('Retorno del modal Invitacion', data); 	
    }else{
      console.log('aqui deberia ir al form-registro-propiedad como modal ');
    }
  }

  volver(event){
    this.modalCtrl.dismiss();	
  }

}
