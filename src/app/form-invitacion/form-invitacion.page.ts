import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-invitacion',
  templateUrl: './form-invitacion.page.html',
  styleUrls: ['./form-invitacion.page.scss'],
})
export class FormInvitacionPage implements OnInit {

  constructor(
    private route:ActivatedRoute,
  ) { 


  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    if(this.route.snapshot.params.rol){

    }
  }

}
