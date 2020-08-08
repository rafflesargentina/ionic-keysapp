import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../Services/toast.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-form-invitacion',
  templateUrl: './form-invitacion.page.html',
  styleUrls: ['./form-invitacion.page.scss'],
})
export class FormInvitacionPage implements OnInit {

  public email = "";
  @Input() isModal = false;

  constructor(
    private route:ActivatedRoute,
    private toastService:ToastService,
    private modalCtrl: ModalController
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

  async volver(event){
    if(this.isModal){
      console.log('volver del form invitacion');
    await this.modalCtrl.dismiss();	
    }  
  }

}
