import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/Services/eventos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss'],
})
export class CardEventoComponent implements OnInit {
  

  @Input() data: Evento;

  @Output() onSelect = new EventEmitter<Evento>();
  
  estado: string = '';
  mostrar: boolean = true;

  private user_id = "";
  private memberIndex = 0;

  constructor(
    private eventoService:EventosService,
    private userService:UsuarioService
  ) { }

  ngOnInit() {
    this.user_id = this.userService.getUID();
    this.data.members.forEach((member,index) => {
      if(member.id == this.user_id){
        this.memberIndex = index;
      }
      //determinamos el nombre de la clase scss que usará la tarjeta
      if(member.pivot.accepted === 0 && member.pivot.rejected === 0){
        this.estado = 'esperando';
      }
      if(member.pivot.accepted === 1){
        this.estado = 'Aceptado';
      }
      if(member.pivot.rejected === 1){
        this.estado = 'Rechazado';
      }
    });
  }

  mostrarBotones(){
    if(this.estado == 'waiting'){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
  }

  select() {
    this.onSelect.emit(this.data);//.members[this.memberIndex].pivot.id);
  }

  aceptar(event){
    event.stopPropagation();
    this.eventoService.aceptar(this.data.members[this.memberIndex].pivot.id);
    this.data.members[this.memberIndex].pivot.accepted = 1;
    //console.log('aceptado', this.data.members[this.memberIndex].pivot.accepted);
    this.estado = 'Aceptado';
    this.mostrarBotones();
  }

  cancelar(event){
    event.stopPropagation();
    this.eventoService.rechazar(this.data.members[this.memberIndex].pivot.id);
    this.data.members[this.memberIndex].pivot.rejected = 1;
    //console.log('rechazado', this.data.members[this.memberIndex].pivot.rejected);
    this.estado = 'Rechazado';
    this.mostrarBotones();
  }

}
