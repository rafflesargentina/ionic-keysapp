import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelectPage } from '../select/select.page';
import { FormInvitacionPage } from '../form-invitacion/form-invitacion.page';

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

  async modalPage(tipo: string){
    //console.log('home tipo', tipo);
    const modalPage = await this.modalCtrl.create({ 	
      component: SelectPage, 			
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,	
        tipo: tipo,				
      } 							
    }); 							
    await modalPage.present(); 
    const {data} = await modalPage.onDidDismiss(); 	
    //console.log('Retorno del modal', data); 		
  }

  async openInvitacion(){
    const modalPage = await this.modalCtrl.create({ 	
      component: FormInvitacionPage						
    }); 							
    await modalPage.present(); 
    const {data} = await modalPage.onDidDismiss(); 	
  }

  /*
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
  */
}
