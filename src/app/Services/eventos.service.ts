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
    this.setEndpoint("appointments");
  }

  aceptar(pivot_id){

    return this.httpClient.put(this.getEndpoint()+"/"+pivot_id+"/accept",this.options);    
  }

  rechazar(pivot_id){

    return this.httpClient.put(this.getEndpoint()+"/"+pivot_id+"/reject",this.options);
  }
}
