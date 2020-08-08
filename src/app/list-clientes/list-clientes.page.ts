import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.page.html',
  styleUrls: ['./list-clientes.page.scss'],
})
export class ListClientesPage implements OnInit {
  tipo: string = '';
  titulo: string = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tipo = params['usuario'];
      console.log('params.tipo', this.tipo);
    });
    switch(this.tipo){
      case 'cliente':
        this.titulo = 'Listado de Clientes';
        break;
      case 'propietario':
        this.titulo = 'Listado de Propietarios';
        break;
      case 'agente':
        this.titulo = 'Listado de Agentes';
        break;
      default:
        console.log('tipo no definido');
      break;      
    }
  }

  seleccionar(item: Usuario){
    //console.log('list-clientes.page.seleccionar(item)', item);
    this.router.navigate(['/detail-cliente', item.id]);
  }

  agregar(){
    //redirigir a agregar cliente
    console.log('redirigir a agregar cliente');
    this.router.navigate(['/form-invitacion']);
  }

}
