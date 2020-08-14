import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async mensaje(titulo,mensaje) {

    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      color: "primary",
      duration: 5000,
      buttons: [
       {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async alert(titulo,mensaje){  
    
    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      color: "danger",
      duration: 5000,
      buttons: [
       {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();

  }

  async mensajeVerde(titulo,mensaje){
   
    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      color: "success",
      duration: 5000,
      buttons: [
       {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();

  }

  async mensajeRojo(titulo, mensaje){
   
    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      color: "danger",
      duration: 3000,
      buttons: [
       {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();

  }

  async advertencia(titulo, mensaje) {
    let resp: boolean;
    const toast = await this.toastController.create({
      header: titulo,
      message: mensaje,
      position: 'top',
      color: "warning",
      buttons: [
       {
          side: 'start',
          icon: 'close-circle',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            resp = false;
          }
        },
        {
          side: 'end',
          icon: 'checkmark-circle',
          role: 'acept',
          handler: () =>{
            console.log('ok clicked');
            resp = true;
          }
        }
      ]
    });
    toast.present();
    return resp;
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
       {
          text: 'X',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    
  }
  


}
