import { Component, OnInit } from '@angular/core';
import { EventosService } from '../Services/eventos.service';
import { UsuarioService } from '../Services/usuario.service';
import { Evento } from '../models/evento';
import { Router } from '@angular/router';
import { ParametrosService } from '../Services/global/parametros.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  private items: Evento[] = [];
  
  constructor(
    private eventosService: EventosService,
    private parametrosService: ParametrosService,
    private router: Router,
  ) { }

  ngOnInit(){
    //console.log('nombre usuario:', this.usuarioService.userSubject.value.nombre);
  }

  ionViewDidEnter(){
    this.eventosService.all(1).subscribe(resp =>{
      let response: any = resp;    
      console.log('data', response.data.data); 
      this.items = response.data.data;
    });
  }

  mostrar(evento:Evento, index:number){
    if(index != 0){
      if(evento.date != this.items[index-1].date){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }

  mostrarDetalle(event: Evento){
    this.parametrosService.param = event;
    this.router.navigate(['/detail-evento']);
  } 
}
