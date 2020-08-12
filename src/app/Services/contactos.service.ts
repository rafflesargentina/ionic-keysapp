import { Injectable } from '@angular/core';
import { BaseCRUDService } from './base-crud.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ContactosService extends BaseCRUDService{

  constructor(
    public httpClient: HttpClient,
    public usuarioService:UsuarioService,
    public toastService:ToastService
  ) { 
    
    super(httpClient,usuarioService,toastService);
    this.setEndpoint("contacts");
  }
}

