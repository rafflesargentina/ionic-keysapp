import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Llave } from 'src/app/models/llave';
import { ParametrosService } from 'src/app/Services/global/parametros.service';

@Component({
  selector: 'app-card-llave',
  templateUrl: './card-llave.component.html',
  styleUrls: ['./card-llave.component.scss'],
})
export class CardLlaveComponent implements OnInit {

  @Input() data: Llave;
  
  constructor(
    private parametrosService:ParametrosService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log('data llave', this.data);
  }

}
