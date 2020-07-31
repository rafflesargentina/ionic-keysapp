import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';
import { ToastService } from './toast.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseCRUDService {

  public url = "";
  private endpoint = "";

  private httpHeaders:HttpHeaders;

  private options = {
    headers: this.httpHeaders
  };
  
  constructor(
    public httpClient: HttpClient,
    public usuarioService:UsuarioService,
    public toastService:ToastService
  ) {
    this.url = environment.url;
  }
 
  setAuthorizationToken(){
    this.httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.usuarioService.getToken()
    });
  }

  setEndpoint(endpoint){
    this.endpoint = endpoint;
  }

  create(data){
    return this.httpClient.post(this.url+this.endpoint,data, this.options) .pipe(
      retry(0),
      catchError(this.handleError)
    );
  }

  read(){    
    return this.httpClient.get(this.url+this.endpoint, this.options) .pipe(
      retry(0),
      catchError(this.handleError)
    );
  }

  update(data){
    return this.httpClient.put(this.url+'account/change-password', data, this.options);
  }

  delete(id){
    return this.httpClient.delete(this.url+this.endpoint+"/"+id, this.options) .pipe(
      retry(0),
      catchError(this.handleError)
    );
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', JSON.parse(error.error.message));
      alert(error.error.message)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert(error.error)
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
   
    console.log(error);
    let mensaje: string = '';
    Object.keys(error.error.errors).forEach((key,index)=> {
      console.log(error.error.errors[key][0])
      mensaje += error.error.errors[key][0] + '\n';
    });
    this.toastService.mensaje("",mensaje);

    return throwError(mensaje);
  };
}