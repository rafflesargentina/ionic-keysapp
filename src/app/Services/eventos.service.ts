import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { ToastService } from './toast.service';
import { BaseCRUDService } from './base-crud.service';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService extends BaseCRUDService {

  constructor(
    public httpClient: HttpClient,
    public usuarioService:UsuarioService,
    public toastService:ToastService
  ) { 
    
    super(httpClient,usuarioService,toastService);
    this.setEndpoint("appointment");
  }

  aceptar(user_id,evento:Evento){

    let data = {
      user_id: user_id,
      appointment_id:evento.id
    }

    return this.httpClient.post(this.getEndpoint(), data, this.options);    
  }

  rechazar(user_id,evento:Evento){

    let data = {
      user_id: user_id,
      appointment_id:evento.id
    }
    return this.httpClient.post(this.getEndpoint(), data, this.options);
  }
}
