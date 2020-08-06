import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-form-invitacion',
  templateUrl: './form-invitacion.page.html',
  styleUrls: ['./form-invitacion.page.scss'],
})
export class FormInvitacionPage implements OnInit {

  public email = "";

  constructor(
    private route:ActivatedRoute,
    private toastService:ToastService
  ) { 


  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    if(this.route.snapshot.params.rol){

    }
  }

  enviar(){

    if(this.email ==""){
      this.toastService.mensaje("","Por favor ingrese un mail");
    }

  }

}
