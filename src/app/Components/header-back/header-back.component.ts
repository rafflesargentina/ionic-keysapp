import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent implements OnInit {

  @Input() titulo = "";
  
  constructor(
    public router:Router
  ) {
    
   }

  ngOnInit() {
    console.log(this.titulo)
  }
  
  agregar(){
    this.router.navigate(['']);
  }

}
