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

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: Inmueble[] = [];
  inmueble: Inmueble;

  constructor(
    private router: Router,
    private clientesService: ClientesService,
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {
    /*this.clientesService.read().subscribe( resp => {
      console.log(resp);
    });*/
    this.items = [];
  }

  doRefresh(event){ 
    //console.log('liselectst-clientes.doRefresh(event)', event.target.value);
    this.items = []; 
    //console.log('items', this.items);
    event.target.complete(); 
  } 

  onChange(event){
    //console.log('select-clientes.onChange(event)', event.target.value);
    this.items= [];
  }

  seleccionar(item: Inmueble){
    //console.log('select-clientes.seleccionar(item)', item);
    this.inmueble = item;
    this.salirConArgumentos();
  }

  loadData(event){
    //console.log('select-clientes.loadData(event)', event.target.value);
    setTimeout(() => { 
      if(this.items.length > 50){ //frenamos en 50 la carga
        event.target.complete(); 
        this.infiniteScroll.disabled = true; 
        return; 
      } 
      const nuevoArr = []; 
      this.items.push(...nuevoArr); 
      event.target.complete(); 
    }, 1000); 
  }

  salirConArgumentos(){
    //console.log('select-cliente.salirConArgumentos', this.cliente);
    this.modalCtrl.dismiss({
      inmueble: this.inmueble
    });
  }

  salirSinArgumentos(){		
    this.modalCtrl.dismiss();		
  }

}
