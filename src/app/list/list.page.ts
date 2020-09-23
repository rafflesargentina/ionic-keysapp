import { Component, OnInit, Input, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { ContactosService } from '../Services/contactos.service';
import { FormRegistroPropiedadPage } from '../form-registro-propiedad/form-registro-propiedad.page';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { CardLlaveComponent } from '../Components/card-llave/card-llave.component';
import { LlavesService } from '../Services/llaves.service';
import { FormLlavePage } from '../form-llave/form-llave.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  itemComponent:Type<any> = CardInmuebleComponent;
  
  @Input() tipo: string = '';
  titulo: string = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService,
    private llavesService:LlavesService,
    private modalCtrl:ModalController
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tipo = params['tipo'];
      //console.log('params.tipo', this.tipo);
    });
    switch(this.tipo){
      case 'contacto':
        this.titulo = 'Lista de Contactos';
        this.itemComponent = CardUsuarioComponent;
      break;      
      case 'inmueble':
        this.titulo = 'Listado de Inmuebles';
        this.itemComponent = CardInmuebleComponent;
      break;
      case 'llave':
        this.titulo = 'Listado de Llaves';
        this.itemComponent = CardLlaveComponent;
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
      case 'llave':
        return this.llavesService;
      default:
        console.log('tipo no definido');
      break;      
    }    
  }


  seleccionar(item){
    if(item != undefined){
      this.router.navigate(['/detail-'+this.tipo, item.id]);
    } 
  }

  async agregar(){
    if(this.tipo === 'inmueble'){
      //this.router.navigate(['/form-registro-propiedad']);
      const modalUsuario = await this.modalCtrl.create({ 	
        component: FormRegistroPropiedadPage,							
      }); 							
      await modalUsuario.present(); 
      const {data} = await modalUsuario.onDidDismiss(); 	
    }else if(this.tipo === 'contacto'){
      //redirigir a form-invitacion
      const modalPage = await this.modalCtrl.create({ 	
        component: FormInvitacionPage						
      }); 							
      await modalPage.present(); 
      const {data} = await modalPage.onDidDismiss(); 	
    }    
    else if(this.tipo === 'llave'){
      //redirigir a form-invitacion
      const modalPage = await this.modalCtrl.create({ 	
        component: FormLlavePage						
      }); 							
      await modalPage.present(); 
      const {data} = await modalPage.onDidDismiss(); 	
    }    
  }
}
