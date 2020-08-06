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
  
  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
 
  }

  seleccionar(item: Inmueble){
    //console.log('list-inmueble.page.seleccionar(item)', item);
    this.router.navigate(['/detail-cliente', item.id]);
  }

  botonFlotante(){
    //redirigir a agregar cliente
    console.log('redirigir a agregar inmueble');
  }

}
