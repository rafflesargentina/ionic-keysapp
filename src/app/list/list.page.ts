import { Component, OnInit, Input, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardInmuebleComponent } from '../Components/card-inmueble/card-inmueble.component';
import { InmueblesService } from '../Services/inmuebles.service';
import { CardUsuarioComponent } from '../Components/card-usuario/card-usuario.component';
import { ContactosService } from '../Services/contactos.service';

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
    private contactosService:ContactosService,
    private inmuebleService:InmueblesService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.tipo = params['tipo'];
      //console.log('params.tipo', this.tipo);
    });
    switch(this.tipo){
      case 'contacto':
        this.titulo = 'Lista de Contactos';
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
      case 'contacto':
        return this.contactosService;
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
