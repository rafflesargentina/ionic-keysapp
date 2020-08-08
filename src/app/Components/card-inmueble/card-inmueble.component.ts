import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-inmueble',
  templateUrl: './card-inmueble.component.html',
  styleUrls: ['./card-inmueble.component.scss'],
})
export class CardInmuebleComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit() {}

}
