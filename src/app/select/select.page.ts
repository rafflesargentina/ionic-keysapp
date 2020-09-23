import { Component, OnInit, Input, Type } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { ContactosService } from '../Services/contactos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Inmueble } from '../models/inmueble';
import { FormRegistroPropiedadPage } from '../form-registro-propiedad/form-registro-propiedad.page';
import { LlavesService } from '../Services/llaves.service';
import { CardLlaveComponent } from '../Components/card-llave/card-llave.component';
import { FormLlavePage } from '../form-llave/form-llave.page';
import { CardSucursalComponent } from '../Components/card-sucursal/card-sucursal.component';
import { SucursalesService } from '../Services/sucursales.service';
import { FormSucursalPage } from '../form-sucursal/form-sucursal.page';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  itemComponent:Type<any> = CardInmuebleComponent;
  item:any;
  @Input() tipo: string;
  titulo: string = '';
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService,
    private llavesService:LlavesService,
    private sucursalesService:SucursalesService,
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
    console.log('tipo select', this.tipo);
    switch(this.tipo){
      case 'contact':
        this.titulo = "Selección de Agente";
        this.itemComponent = CardUsuarioComponent;
      break;
      case 'property':
        this.titulo = 'Selección de Inmueble';
        this.itemComponent = CardInmuebleComponent;
      break;
      case 'llaves':
        this.titulo = 'Selección de Llave';
        this.itemComponent = CardLlaveComponent;
      break;
      case 'sucursal':
        this.titulo = 'Selección de Sucursal';
        this.itemComponent = CardSucursalComponent;
      break;
      case 'customer':
        this.titulo = "Selección de Propietario";
        this.itemComponent = CardUsuarioComponent;
      break;
      default:
        console.log('tipo no definido');
      break;      
    }
  }

  getService = ()=>{
    switch(this.tipo){
      case 'contact':
        return this.contactosService;
      case 'property':
        return this.inmuebleService;
      case 'llave':
        return this.llavesService;
      case 'customer':
        return this.contactosService;
      case 'sucursal':
        return this.sucursalesService;
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
    this.add();
    if(this.item){
      this.modalCtrl.dismiss({
        data: this.item
      });
    }
  }

  async add(){

    if(this.tipo == 'contact'){
      const modal = await this.modalCtrl.create({ 	
        component: FormInvitacionPage, 			
        componentProps: { 				
          rol: this.tipo				
        } 							
      }); 							
      await modal.present(); 
      const {data} = await modal.onDidDismiss(); 	
      this.item = data;
      console.log('Retorno del modal Invitacion', data); 	
    }

    if(this.tipo == 'property'){
      const modal = await this.modalCtrl.create({ 	
        component: FormRegistroPropiedadPage,							
      }); 							
      await modal.present(); 
      const {data} = await modal.onDidDismiss(); 	
      this.item = data;
    }

    if(this.tipo == 'llave'){
      const modal = await this.modalCtrl.create({ 	
        component: FormLlavePage,							
      }); 							
      await modal.present(); 
      const {data} = await modal.onDidDismiss(); 	
      this.item = data;
    }

    if(this.tipo == 'sucursal'){
      const modal = await this.modalCtrl.create({ 	
        component: FormSucursalPage,							
      }); 							
      await modal.present(); 
      const {data} = await modal.onDidDismiss(); 	
      this.item = data;
    }
  }

  volver(event){
    this.modalCtrl.dismiss();	
  }

}
