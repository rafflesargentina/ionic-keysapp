import { Component, OnInit } from '@angular/core';
import { InmueblesService } from '../Services/inmuebles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private inmuebleService:InmueblesService
  ) { }

  ngOnInit() {
    this.inmuebleService.read().subscribe(data=>{
      
    })
  }

}
