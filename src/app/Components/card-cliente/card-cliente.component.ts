import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styleUrls: ['./card-cliente.component.scss'],
})
export class CardClienteComponent implements OnInit {

  @Input() cliente:any;

  constructor() { }

  ngOnInit() {}

}
