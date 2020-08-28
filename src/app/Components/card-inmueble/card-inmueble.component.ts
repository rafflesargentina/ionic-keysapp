import { Component, OnInit, Input } from '@angular/core';
import { Inmueble } from '../../models/inmueble';
import { ItemComponent } from '../list-base/item.component';

@Component({
  selector: 'app-card-inmueble',
  templateUrl: './card-inmueble.component.html',
  styleUrls: ['./card-inmueble.component.scss'],
})
export class CardInmuebleComponent implements OnInit, ItemComponent {

  @Input() data: Inmueble;
  
  constructor() { }

  ngOnInit() {
    console.log('data inmueble', this.data);
  }

}
