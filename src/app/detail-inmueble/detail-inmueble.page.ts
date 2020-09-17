import { Component, OnInit, Input } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { ParametrosService } from '../Services/global/parametros.service';

@Component({
  selector: 'app-detail-inmueble',
  templateUrl: './detail-inmueble.page.html',
  styleUrls: ['./detail-inmueble.page.scss'],
})
export class DetailInmueblePage implements OnInit {

  @Input() id: string;
  inmueble: Inmueble;

  constructor(
    private parametrosService:ParametrosService
    ) {
      this.inmueble = new Inmueble();
     }

  ngOnInit() {

    this.inmueble.asignarValores(this.parametrosService.param)
    console.log(this.inmueble);
   
  }

}
