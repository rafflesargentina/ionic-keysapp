import { Component, OnInit, Input } from '@angular/core';
import { Inmueble } from '../../models/inmueble';
import { ItemComponent } from '../list-base/item.component';
import { ParametrosService } from 'src/app/Services/global/parametros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-inmueble',
  templateUrl: './card-inmueble.component.html',
  styleUrls: ['./card-inmueble.component.scss'],
})
export class CardInmuebleComponent implements OnInit, ItemComponent {

  @Input() data: Inmueble;
  
  constructor(
    private parametrosService:ParametrosService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log('data inmueble', this.data);
  }

}
