import { Component, OnInit, Input, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { ClientesService } from '../Services/clientes.service';
import { PropietariosService } from '../Services/propietarios.service';
import { InmueblesService } from '../Services/inmuebles.service';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { AgentesService } from '../Services/agentes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  itemComponent:Type<any> = CardInmuebleComponent;
  
  @Input() tipo: string = '';
  titulo: string = '';

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private clienteService:ClientesService,
    private agentesService:AgentesService,
    private propietarioService:PropietariosService,
    private inmuebleService:InmueblesService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tipo = params['tipo'];
      //console.log('params.tipo', this.tipo);
    });
    switch(this.tipo){
      case 'cliente':
        this.titulo = 'Listado de Clientes';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'propietario':
        this.titulo = 'Listado de Propietarios';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'agente':
        this.titulo = 'Listado de Agentes';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'usuario':
        this.titulo = 'Listado de Usuarios';
        this.itemComponent = CardUsuarioComponent;
        break;
      case 'inmueble':
        this.titulo = 'Listado de Inmuebles';
        this.itemComponent = CardInmuebleComponent;
      break;
      default:
        console.log('tipo no definido');
      break;      
    }
  }

  getService = ()=>{
    switch(this.tipo){
      case 'cliente':
        return this.clienteService;
      case 'propietario':
        return this.propietarioService;
      case 'agente':
        return this.agentesService;
      case 'inmueble':
        return this.inmuebleService;
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
