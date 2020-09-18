import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../Services/contactos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-contacto',
  templateUrl: './detail-contacto.page.html',
  styleUrls: ['./detail-contacto.page.scss'],
})
export class DetailContactoPage implements OnInit {
  @Input() id: string;
  contacto: Usuario;

  constructor(
    private route: ActivatedRoute,
    private contactosService: ContactosService,
    private navCtrl:NavController
    ) { 
      this.contacto = new Usuario();
    }

  ngOnInit() {

    
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      console.log('params.id', this.id);
    });
    console.log("!!!!!")
    this.contactosService.get(this.id).subscribe(resp => {
      this.contacto.asignarValores(resp);
      console.log('datail-component', resp);
    });
  }

  atras(){
    this.navCtrl.back();
  }
}
