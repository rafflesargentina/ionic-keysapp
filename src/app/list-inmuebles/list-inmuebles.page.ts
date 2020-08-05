import { Component, OnInit, ViewChild } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { InmueblesService } from '../Services/inmuebles.service';
import { TiposPropiedadesService } from '../Services/tipos-propiedades.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-inmuebles',
  templateUrl: './list-inmuebles.page.html',
  styleUrls: ['./list-inmuebles.page.scss'],
})
export class ListInmueblesPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: Inmueble[] = [];
  constructor(
    private router: Router,
    private inmuebleService: InmueblesService,
    private tiposPropiedadesService: TiposPropiedadesService
    ) { }

  ngOnInit() {
    /*this.clientesService.read().subscribe( resp => {
      console.log(resp);
    });*/
  }

  doRefresh(event){ 
    console.log('list-inmuebles.doRefresh(event)', event.target.value);
    this.items = []; 
    console.log('items', this.items);
    event.target.complete(); 
  } 

  onChange(event){
    console.log('list-inmuebles.onChange(event)', event.target.value);
    this.items= [];
  }

  seleccionar(item: Inmueble){
    console.log('list-inmueble.seleccionar(item)', item);
    this.router.navigate(['/detail-inmueble', item.id]);
  }

  loadData(event){
    console.log('list-inmueble.loadData(event)', event.target.value);
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
  


}
