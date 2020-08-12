import { Component, OnInit, Input, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { ContactosService } from '../Services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  itemComponent:Type<any> = CardInmuebleComponent;
  item: Usuario;
  @Input() tipo: string = '';
  titulo: string = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService,
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
    switch(this.tipo){
      case 'contacto':
        this.titulo = 'Selección de Contactos';
        this.itemComponent = CardUsuarioComponent;
      break;      
      case 'inmueble':
        this.titulo = 'Selección de Inmuebles';
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
