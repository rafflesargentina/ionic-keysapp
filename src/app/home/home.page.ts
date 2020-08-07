import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController, //para manejar los modales de seleccion de clientes e inmuebles
  ) { }

  ngOnInit() {
    
  }

  async modalCliente(){
    const modalCliente = await this.modalCtrl.create({ 	
      component: SelectClientePage, 			
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,					
      } 							
    }); 							
    await modalCliente.present(); 
    const {data} = await modalCliente.onDidDismiss(); 	
    console.log('Retorno del modal Cliente', data); 		
  }

  async modalInmueble(){
    const modalInmueble = await this.modalCtrl.create({ 	
      component: SelectInmueblePage, 			
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,					
      } 							
    }); 							
    await modalInmueble.present();
    const {data} = await modalInmueble.onDidDismiss(); 	
    console.log('Retorno del modal Inmueble', data); 	
  }

}
