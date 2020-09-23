import { Component, OnInit, Input } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { ParametrosService } from '../Services/global/parametros.service';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../Services/contactos.service';
import { InmueblesService } from '../Services/inmuebles.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-inmueble',
  templateUrl: './detail-inmueble.page.html',
  styleUrls: ['./detail-inmueble.page.scss'],
})
export class DetailInmueblePage implements OnInit {

  @Input() id: string;
  inmueble: Inmueble;

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmueblesService,
    private navCtrl:NavController
    ) {
      this.inmueble = new Inmueble();
    }

  ngOnInit() {

    console.log(this.inmueble);
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      console.log('params.id', this.id);
    });
    this.inmuebleService.get(this.id).subscribe(resp => {
      this.inmueble.asignarValores(resp);
      console.log('datail-component', resp);
    });
  }

  atras(){
    this.navCtrl.back();
  }
}
