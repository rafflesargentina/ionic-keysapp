import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo = "";
  @Input() icono = "";

  constructor(
    public router:Router,
    public navCtrl:NavController
  ) { 
  
  }

  ngOnInit() {
    //console.log(this.titulo)
    //console.log(this.icono)
  }

  agregar(){
    //this.router.navigate(['']);
    //console.log('header.agregar');
  }

  atras(){
    this.navCtrl.back();
  }

}
