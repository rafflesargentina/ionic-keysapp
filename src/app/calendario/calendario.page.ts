import { Component, OnInit } from '@angular/core';
import { EventosService } from '../Services/eventos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(
    private eventosService:EventosService
  ) { }

  ngOnInit() {
    
  }

  onViewDidEnter(){
    this.eventosService.all().subscribe(resp =>{
      console.log(resp);
    })
  }

}
