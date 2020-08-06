import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.page.html',
  styleUrls: ['./list-clientes.page.scss'],
})
export class ListClientesPage implements OnInit {
  
  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
 
  }

  seleccionar(item: Cliente){
    //console.log('list-clientes.page.seleccionar(item)', item);
    this.router.navigate(['/detail-cliente', item.id]);
  }

  botonFlotante(){
    //redirigir a agregar cliente
    console.log('redirigir a agregar cliente');
  }

}
