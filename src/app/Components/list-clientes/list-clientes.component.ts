import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ClientesService } from 'src/app/Services/clientes.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.scss'],
})
export class ListClientesComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items:any[] = [];
  cliente: Usuario;  //creo que este atributo no es necesario
  @Output() seleccionarCliente: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor(
    private clientesService: ClientesService
    ) { }

  ngOnInit() {
    /*this.clientesService.read().subscribe( resp => {
      console.log(resp);
    });*/


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
    ];
  }

  doRefresh(event){ 
    //console.log('list-clientes.component.doRefresh(event)', event.target.value);

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
    //console.log('items', this.items);
    event.target.complete(); 
  } 

  onChange(event){
    //console.log('list-clientes.component.onChange(event)', event.target.value);
    this.items= [];
  }

  seleccionar(item: Usuario){
    //console.log('list-clientes.component.seleccionar(item)', item);
    this.cliente = item;
    //emitir al padre
    this.seleccionarCliente.emit(this.cliente);
  }




  loadData(event){
    //console.log('list-clientes.component.loadData(event)', event.target.value);
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
