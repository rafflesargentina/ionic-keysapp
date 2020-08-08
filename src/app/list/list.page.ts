import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @Input() tipo: string = '';
  titulo: string = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tipo = params['tipo'];
      //console.log('params.tipo', this.tipo);
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
      case 'usuario':
        this.titulo = 'Listado de Usuarios';
        break;
      case 'inmueble':
        this.titulo = 'Listado de Inmuebles';
      break;
      default:
        console.log('tipo no definido');
      break;      
    }
  }

  seleccionar(item){
    //console.log('list-clientes.page.seleccionar(item)', item);
    //solo para prueba esta el if, luego se saca
    console.log('tipo', this.tipo);
    if(item == undefined){
      this.router.navigate(['/detail', this.tipo, '1']);
    }else{
      this.router.navigate(['/detail', this.tipo, item.id]);
    } 
  }

  agregar(){
    if(this.tipo === 'inmueble'){
      this.router.navigate(['/form-registro-propiedad']);
    }else if(this.tipo === 'cliente' || this.tipo === 'propietario' || this.tipo === 'agente' || this.tipo === 'usuario'){
      //redirigir a form-invitacion
      console.log('redirigir a form-invitacion');
      this.router.navigate(['/form-invitacion']);
    }
    
  }
}
