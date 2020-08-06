import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';

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

  seleccionar(item: Usuario){
    //console.log('list-clientes.page.seleccionar(item)', item);
    this.router.navigate(['/detail-cliente', item.id]);
  }

  botonFlotante(){
    //redirigir a agregar cliente
    console.log('redirigir a agregar cliente');
  }

}
