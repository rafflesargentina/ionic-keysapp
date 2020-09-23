import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Sucursal } from '../models/sucursal';
import { SucursalesService } from '../Services/sucursales.service';

@Component({
  selector: 'app-detail-sucursal',
  templateUrl: './detail-sucursal.page.html',
  styleUrls: ['./detail-sucursal.page.scss'],
})
export class DetailSucursalPage implements OnInit {

  @Input() id: string;
  sucursal: Sucursal;

  constructor(
    private route: ActivatedRoute,
    private sucursalesService: SucursalesService,
    private navCtrl:NavController
  ) { 
    this.sucursal = new Sucursal();
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this.sucursalesService.get(this.id).subscribe(resp => {
      this.sucursal.asignarValores(resp);
      console.log(this.sucursal);
    });
  }

  atras(){
    this.navCtrl.back();
  }

}
