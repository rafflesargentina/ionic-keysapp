import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ItemComponent } from '../list-base/item.component';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss'],
})
export class CardUsuarioComponent implements OnInit, ItemComponent {
  //@Input() item: Usuario;
  @Input() data: Usuario;
  constructor() { }
  
  ngOnInit() {
    console.log('card-usuario.item', this.data);
  }

  

}
