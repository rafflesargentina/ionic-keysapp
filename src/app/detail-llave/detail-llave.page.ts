import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Llave } from '../models/llave';
import { InmueblesService } from '../Services/inmuebles.service';
import { LlavesService } from '../Services/llaves.service';

@Component({
  selector: 'app-detail-llave',
  templateUrl: './detail-llave.page.html',
  styleUrls: ['./detail-llave.page.scss'],
})
export class DetailLlavePage implements OnInit {

  @Input() id: string;
  llave:Llave;

  constructor(
    private route: ActivatedRoute,
    private llavesService: LlavesService,
    private navCtrl:NavController
  ) {
    this.llave = new Llave();
   }

  ngOnInit() { 

    console.log(this.llave);
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      console.log('params.id', this.id);
    });
    this.llavesService.get(this.id).subscribe(resp => {
      this.llave.asignarValores(resp);
      console.log(this.llave);
    });
  }

  atras(){
    this.navCtrl.back();
  }

}
