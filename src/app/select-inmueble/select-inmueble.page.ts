import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Inmueble } from '../models/inmueble';
import { Router } from '@angular/router';
import { ClientesService } from '../Services/clientes.service';

@Component({
  selector: 'app-select-inmueble',
  templateUrl: './select-inmueble.page.html',
  styleUrls: ['./select-inmueble.page.scss'],
})
export class SelectInmueblePage implements OnInit {

  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
 
  }

  seleccionar(item: Inmueble){
    //console.log('select-inmueble.page.seleccionar(item)', item);
    this.modalCtrl.dismiss({
      inmueble: item
    });
  }

  botonFlotante(){
    //redirigir a agregar inmueble
    this.modalCtrl.dismiss();	
  }

}
