import { Component, OnInit, Input, Type, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { ContactosService } from '../Services/contactos.service';
import { CardSucursalComponent } from '../Components/card-sucursal/card-sucursal.component';
import { SucursalesService } from '../Services/sucursales.service';
import { FormRegistroPropiedadPage } from '../form-registro-propiedad/form-registro-propiedad.page';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { CardLlaveComponent } from '../Components/card-llave/card-llave.component';
import { LlavesService } from '../Services/llaves.service';
import { FormLlavePage } from '../form-llave/form-llave.page';
import { FormSucursalPage } from '../form-sucursal/form-sucursal.page';
import { ListBaseComponent } from '../Components/list-base/list-base.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(ListBaseComponent) listBase:ListBaseComponent;

  itemComponent:Type<any> = CardInmuebleComponent;
  
  @Input() tipo: string = '';
  titulo: string = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService,
    private sucursalesService:SucursalesService,
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
      case 'sucursal':
        this.titulo = 'Lista de Sucursales';
        this.itemComponent = CardSucursalComponent;
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
      case 'sucursal':
        return this.sucursalesService;
      default:
        console.log('tipo no definido');
      break;      
    }    
  }

  atras(){
    this.modalCtrl.dismiss();
  }


  seleccionar(item){
    if(item != undefined){
      this.router.navigate(['/detail-'+this.tipo, item.id]);
    } 
  }

  async agregar(){
    let modal:any;

    if(this.tipo === 'inmueble'){
      modal = await this.modalCtrl.create({ 	
        component: FormRegistroPropiedadPage,							
      }); 						
      	
    }else if(this.tipo === 'contacto'){
      modal = await this.modalCtrl.create({ 	
        component: FormInvitacionPage						
      }); 							
     
    }    
    else if(this.tipo === 'llave'){
      modal = await this.modalCtrl.create({ 	
        component: FormLlavePage						
      }); 	
    }   
    else if(this.tipo === 'sucursal'){
      //redirigir a form-invitacion
      modal = await this.modalCtrl.create({ 	
        component: FormSucursalPage						
      }); 						
    } 
    await modal.present(); 
    await modal.onDidDismiss().then(data=>{
      this.listBase.doRefresh(undefined);
    }); 
  }
}
