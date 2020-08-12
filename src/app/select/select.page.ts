import { Component, OnInit, Input, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { FormRegistroPropiedadPage } from '../form-registro-propiedad/form-registro-propiedad.page';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { ContactosService } from '../Services/contactos.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  @Input() tipo: string;
  titulo: string;
  item: any;
  
  itemComponent:Type<any> = CardInmuebleComponent;
  
  constructor(
    private modalCtrl: ModalController,
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService
    ) { }

  ngOnInit() {
    switch (this.tipo){
      case 'cliente':
        this.titulo = 'Listado de Clientes';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'propietario':
        this.titulo = 'Listado de Propietarios';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'agente':
        this.titulo = 'Listado de Agentes';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'usuario':
        this.titulo = 'Listado de Usuarios';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'inmueble':
        this.titulo = 'Listado de Inmuebles';
        this.itemComponent = CardInmuebleComponent;
      break;
      default:
        console.log('tipo no definido');
      break;  
    }
  }

  getService = ()=>{
    switch(this.tipo){
      case 'contacto':
        return this.contactosService;
      case 'inmueble':
        return this.inmuebleService;
      default:
        console.log('tipo no definido');
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
