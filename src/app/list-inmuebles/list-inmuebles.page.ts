import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { InmueblesService } from '../Services/inmuebles.service';

@Component({
  selector: 'app-list-inmuebles',
  templateUrl: './list-inmuebles.page.html',
  styleUrls: ['./list-inmuebles.page.scss'],
})
export class ListInmueblesPage implements OnInit {
  items: Inmueble[];

  constructor(private inmueblesService: InmueblesService) { }

  ngOnInit() {
    this.inmueblesService.read().subscribe(resp => {
      console.log(resp);
    });
  }

  doRefresh(event){
    console.log('eventRefresher', event.target.value);
  }

  onChange(event){
    console.log('onChange-searchbar', event.target.value);
  }

  seleccionar(item){
    console.log('seleccionar item', item);
  }

  buscar(event){
    console.log('buscar', event.target.value);
  }
  


}
