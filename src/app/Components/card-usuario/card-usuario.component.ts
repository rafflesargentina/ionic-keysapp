import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ItemComponent } from '../list-base/item.component';
import { ParametrosService } from 'src/app/Services/global/parametros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.scss'],
})
export class CardUsuarioComponent implements OnInit, ItemComponent {
  //@Input() item: Usuario;
  @Input() data: Usuario;
  constructor(
    private parametrosServices:ParametrosService,
    private router:Router
  ) { }
  
  ngOnInit() {
    console.log('card-usuario.item', this.data);
  }
  

}
