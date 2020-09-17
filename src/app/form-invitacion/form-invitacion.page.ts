import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../Services/toast.service';
import { ModalController, NavParams } from '@ionic/angular';
import { InvitacionesService } from '../Services/invitaciones.service';

@Component({
  selector: 'app-form-invitacion',
  templateUrl: './form-invitacion.page.html',
  styleUrls: ['./form-invitacion.page.scss'],
})
export class FormInvitacionPage implements OnInit {

  public data = {
    email:"",
    broker:false,
    agent:false,
    customer:false
  };

  @Input() isModal = false;

  constructor(
    private route:ActivatedRoute,
    private toastService:ToastService,
    private modalCtrl: ModalController,
    private invitacionesService:InvitacionesService
  ) { 
   

  }

  ngOnInit() {
  }

  ionViewDidEnter(){
  /*  if(this.navParams.get('rol') == "agent"){
      this.data.agent = true;
    }
    if(this.navParams.get('rol') == "customer"){
      this.data.customer = true;
    }*/
  }

  enviar(){
    console.log("!!!!")
    if(this.data.email ==""){
      this.toastService.mensaje("","Por favor ingrese un mail");
    }

   
    this.invitacionesService.create(this.data).subscribe(data=>{
      console.log(data);
    });

  }

  async volver(event){
    if(this.isModal){
      console.log('volver del form invitacion');
    await this.modalCtrl.dismiss();	
    }  
  }

}
