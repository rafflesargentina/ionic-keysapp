import { Component, OnInit, Input } from '@angular/core';
import { Agente } from '../../models/agente';

@Component({
  selector: 'app-card-agente',
  templateUrl: './card-agente.component.html',
  styleUrls: ['./card-agente.component.scss'],
})
export class CardAgenteComponent implements OnInit {
  @Input() item: Agente;

  constructor() { }

  ngOnInit() {
    console.log('card-agente', this.item);
  }

}
