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
  data: Usuario;
  constructor() { }
  
  ngOnInit() {
    //console.log('card-usuario.item', this.data);
  }

  /*

    {       
       
        "email": "mario@raffles.com.ar",
         phone:"",
        "agent": 1,
        "broker": 0,
        "customer": 0, 
        
        "name": "Mario Patronelli",
        "avatar": {
            "location": "img/placeholder.png",
            "photoable_id": 1,
            "photoable_type": "Raffles\\Modules\\Keysapp\\Models\\User",
            "size": 0,
            "thumbnail": "img/placeholder.png",
            "url": "img/placeholder.png"
        }
    },

  */

}
