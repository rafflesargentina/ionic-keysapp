import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Inmueble } from 'src/app/models/inmueble';
import { InmueblesService } from 'src/app/Services/inmuebles.service';
import { TiposPropiedadesService } from 'src/app/Services/tipos-propiedades.service';

@Component({
  selector: 'list-inmuebles',
  templateUrl: './list-inmuebles.component.html',
  styleUrls: ['./list-inmuebles.component.scss'],
})
export class ListInmueblesComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: Inmueble[] = [];
  @Output() seleccionarInmueble: EventEmitter<Inmueble> = new EventEmitter<Inmueble>();

  constructor(
    private inmuebleService: InmueblesService,
    private tiposPropiedadesService: TiposPropiedadesService
    ) { }

  ngOnInit() {
    /*this.clientesService.read().subscribe( resp => {
      console.log(resp);
    });*/
  }

  doRefresh(event){ 
    //console.log('list-inmuebles.component.doRefresh(event)', event.target.value);
    this.items = []; 
    //console.log('items', this.items);
    event.target.complete(); 
  } 

  onChange(event){
    //console.log('list-inmuebles.component.onChange(event)', event.target.value);
    this.items= [];
  }

  seleccionar(item: Inmueble){
    //console.log('list-inmueble,component.seleccionar(item)', item);
    //emitir al padre
    this.seleccionarInmueble.emit(item);
  }

  loadData(event){
    //console.log('list-inmueble.component.loadData(event)', event.target.value);
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
