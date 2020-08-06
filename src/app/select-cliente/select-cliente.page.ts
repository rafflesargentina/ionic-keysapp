import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-select-cliente',
  templateUrl: './select-cliente.page.html',
  styleUrls: ['./select-cliente.page.scss'],
})
export class SelectClientePage implements OnInit {

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

  botonFlotante(){
    //redirigir a agregar cliente
    this.modalCtrl.dismiss();	
  }
  
}
