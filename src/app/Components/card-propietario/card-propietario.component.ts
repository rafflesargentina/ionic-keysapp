import { Component, OnInit, Input } from '@angular/core';
import { Propietario } from 'src/app/models/propietario';

@Component({
  selector: 'app-card-propietario',
  templateUrl: './card-propietario.component.html',
  styleUrls: ['./card-propietario.component.scss'],
})
export class CardPropietarioComponent implements OnInit {
  @Input() item: Propietario;

  constructor() { }

  ngOnInit() {
    console.log('card-propietario', this.item);
  }

}
