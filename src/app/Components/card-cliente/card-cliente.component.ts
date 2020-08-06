import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss'],
})
export class CardClienteComponent implements OnInit {
  @Input() item: Cliente;

  constructor() { }

  ngOnInit() {
    //console.log('card-cliente', this.item);
  }

}
