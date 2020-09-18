import { Component, OnInit } from '@angular/core';
import { EventosService } from '../Services/eventos.service';
import { InmueblesService } from '../Services/inmuebles.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { Evento } from '../models/evento';
import { Inmueble } from '../models/inmueble';
import { Usuario } from '../models/usuario';
import { ContactosService } from '../Services/contactos.service';
import { ParametrosService } from '../Services/global/parametros.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-evento',
  templateUrl: './detail-evento.page.html',
  styleUrls: ['./detail-evento.page.scss'],
})
export class DetailEventoPage implements OnInit {

  public fecha = "";
  public hora = "";
  public clienteAsignado: Usuario;
  public inmuebleAsignado: Inmueble;
  public evento: Evento;

  public pendienteConfirmar = true;

  constructor(
    private eventosService:EventosService,
    private inmueblesService:InmueblesService,
    private usuarioService:UsuarioService,
    private contactosSerivce:ContactosService,
    private route:ActivatedRoute,
    private parametrosService:ParametrosService,
    private navCtrl:NavController
  ) { 

  }

  ngOnInit() {
    this.evento = new Evento();
    this.clienteAsignado = new Usuario();
    this.inmuebleAsignado = new Inmueble();
  }

  atras(){
    this.navCtrl.back();
  }

  ionViewDidEnter(){
    this.evento = this.parametrosService.param;
    let usuario_id = this.usuarioService.getUID();

    console.log(this.evento);
    this.inmueblesService.get(this.evento.property_id).subscribe(resp =>{
      this.inmuebleAsignado.asignarValores(resp);
    });

    this.contactosSerivce.get(this.evento.customer_id).subscribe(resp=>{
      this.clienteAsignado.asignarValores(resp);
    });
    
    if(usuario_id == this.evento.registrant_id){
      this.pendienteConfirmar = true;
    }
    if(usuario_id == this.evento.customer_id){
      this.pendienteConfirmar = true;
    }
    
  }

}
