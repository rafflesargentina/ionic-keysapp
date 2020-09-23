import { Component, OnInit, Input } from '@angular/core';
import { Sucursal } from 'src/app/models/sucursal';

@Component({
  selector: 'app-card-sucursal',
  templateUrl: './card-sucursal.component.html',
  styleUrls: ['./card-sucursal.component.scss'],
})
export class CardSucursalComponent implements OnInit {
  //@Input() item: Sucursal;
  @Input() data: Sucursal;
  constructor() { }
  
  ngOnInit() {
    console.log('card-sucrusal.data', this.data);
  }

}
