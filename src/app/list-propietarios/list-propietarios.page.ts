import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Propietario } from '../models/propietario';
import { Router } from '@angular/router';
import { PropietariosService } from '../Services/propietarios.service';

@Component({
  selector: 'app-list-propietarios',
  templateUrl: './list-propietarios.page.html',
  styleUrls: ['./list-propietarios.page.scss'],
})
export class ListPropietariosPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: Propietario[] = [];
  constructor(
    private router: Router,
    private propietariosService: PropietariosService
    ) { }

  ngOnInit() {
    /*this.clientesService.read().subscribe( resp => {
      console.log(resp);
    });*/
  }

  doRefresh(event){ 
    console.log('list-propietarios.doRefresh(event)', event.target.value);
    this.items = [
      {'id': '1', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '2', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '3', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '4', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '5', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '6', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '7', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '8', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '9', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '10', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '11', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '12', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '13', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '14', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '15', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '16', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '17', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '18', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '19', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      {'id': '20', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      ]; 
    console.log('items', this.items);
    event.target.complete(); 
  } 

  onChange(event){
    console.log('list-propietarios.onChange(event)', event.target.value);
    this.items= [];
  }

  seleccionar(item: Propietario){
    console.log('list-propietarios.seleccionar(item)', item);
    this.router.navigate(['/detail-propietario', item.id]);
  }

  loadData(event){
    console.log('list-propietarios.loadData(event)', event.target.value);
    setTimeout(() => { 
      if(this.items.length > 50){ //frenamos en 50 la carga
        event.target.complete(); 
        this.infiniteScroll.disabled = true; 
        return; 
      } 
      const nuevoArr = [
        {'id': '1', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '2', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '3', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '4', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '5', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '6', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '7', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '8', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '9', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '10', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '11', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '12', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '13', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '14', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '15', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '16', 'first_name': 'juan', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '17', 'first_name': 'pedro', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '18', 'first_name': 'marcos', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '19', 'first_name': 'cecilia', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
        {'id': '20', 'first_name': 'francisca', 'last_name': 'de los palotes', 'email': '', 'phone': '', 'mobile': ''},
      ]; 
      this.items.push(...nuevoArr); 
      event.target.complete(); 
    }, 1000); 
  }

}
