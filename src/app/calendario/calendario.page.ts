import { Component, OnInit } from '@angular/core';
import { EventosService } from '../Services/eventos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  private items = [];

  constructor(
    private eventosService:EventosService
  ) { }

  ngOnInit() {
    this.eventosService.all(1).subscribe(resp =>{
      let response:any = resp;     
      this.items = response.data.data;
      console.log(this.items)
    })
  }

  onViewDidEnter(){
   
  }

}
