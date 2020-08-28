import { Component, OnInit } from '@angular/core';
import { EventosService } from '../Services/eventos.service';
import { InmueblesService } from '../Services/inmuebles.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { Evento } from '../models/evento';
import { Inmueble } from '../models/inmueble';
import { Usuario } from '../models/usuario';
import { ContactosService } from '../Services/contactos.service';

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
    private route:ActivatedRoute
  ) { 

  }

  ngOnInit() {
    
  }

  ionViewDidEnter(){

    let usuario_id = this.usuarioService.getUID();
    if(this.route.snapshot.params.id){
      this.eventosService.get(this.route.snapshot.params.id).subscribe(resp=>{               
        this.evento.asignarValores(resp);
        this.inmueblesService.get(this.evento.property_id).subscribe(resp =>{
          this.inmuebleAsignado.asignarValores(resp);
        });

        this.contactosSerivce.get(this.evento.customer_id).subscribe(resp=>{
          this.clienteAsignado.asignarValores(resp);
        });
        this.fecha = this.evento.date;
        if(usuario_id == this.evento.registrant_id){
        //  if(this.evento.pendiente_agente_confirmar){
            this.pendienteConfirmar = true;
          //}
        }
        if(usuario_id == this.evento.customer_id){
          //if(this.evento.pendiente_customer_confirmar){
            this.pendienteConfirmar = true;
         // }
        }
      });      
    }
  }

}
