import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { EventosService } from 'src/app/Services/eventos.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.scss'],
})
export class CardEventoComponent implements OnInit {

  @Input() data:Evento;

  @Output() onSelect = new EventEmitter<any>();
  
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
    });
  }

  select() {
    this.onSelect.emit(this.data.members[this.memberIndex].pivot.id);
  }

  aceptar(){
    this.eventoService.aceptar(this.data.members[this.memberIndex].pivot.id)
  }

}
