import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss'],
})
export class CardUsuarioComponent implements OnInit {
  @Input() item: Usuario;

  constructor() { }

  ngOnInit() {
    
  }

}
