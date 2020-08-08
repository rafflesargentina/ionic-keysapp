import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { InmueblesService } from 'src/app/Services/inmuebles.service';
import { Inmueble } from 'src/app/models/inmueble';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() tipo: string;
  @Output() select: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  items: any[] = [];
  item;
  cliente: Usuario;  
  inmueble: Inmueble;
  
  constructor(
    private usuariosService: UsuarioService,
    private inmuebleService: InmueblesService,
  ) { 
    if(this.tipo === 'inmueble'){
      this.item = new Inmueble();
    }else if(this.tipo === 'usuario'){
      this.item = new Usuario();
    }
  }

  ngOnInit() {
    /*
    if(this.tipo === 'inmueble'){
      this.usuariosService.read().subscribe( resp => {
        console.log(resp);
      });
    }else if(this.tipo === 'usuario'){
      this.inmueblesService.read().subscribe( resp => {
        console.log(resp);
      });
    }*/
  }

  doRefresh(event){ 
    console.log('list.component.doRefresh(event)', event.target.value);
    if(this.tipo === 'inmueble'){
      console.log('refresh inmueble');
    }else if(this.tipo === 'usuario'){
      console.log('refresh usuario');
    }
    event.target.complete(); 
  } 

  onChange(event){
    console.log('list.component.onChange(event)', event.target.value);
    if(this.tipo === 'inmueble'){
      console.log('change inmueble');
    }else if(this.tipo === 'usuario'){
      console.log('change usuario');
    }
    this.items = [];
  }

  seleccionar(item){
    console.log('list.component.seleccionar(item)', item);
    //emitir al padre
    this.select.emit(item);
  }

  seleccionarPrueba(){
    console.log('list.component.seleccionarPrueba()');
    //emitir al padre
    this.select.emit(this.item);
  }
  

  loadData(event){
    console.log('list.component.loadData(event)', event.target.value);
    setTimeout(() => { 
      if(this.items.length > 50){ //frenamos en 50 la carga
        event.target.complete(); 
        this.infiniteScroll.disabled = true; 
        return; 
      } 
      const nuevoArr = []; 
      this.items.push(...nuevoArr); 
      event.target.complete(); 
    }, 1000); 
  }

  agregar(){
    //emitir al padre
    this.add.emit();
  }
}
