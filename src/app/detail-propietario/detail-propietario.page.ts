import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropietariosService } from '../Services/propietarios.service';

@Component({
  selector: 'app-detail-propietario',
  templateUrl: './detail-propietario.page.html',
  styleUrls: ['./detail-propietario.page.scss'],
})
export class DetailPropietarioPage implements OnInit {

  owner= {
    'id': '1', 
    'first_name': 'juan', 
    'last_name': 'de los palotes', 
    'email': 'juandelospalotes@hotmail.com', 
    'phone': '3571-554433', 
    'mobile': '3456-34544333'};	

  constructor(
    private router: Router,							
    private route: ActivatedRoute,								
    private ownerService: PropietariosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {						
      if(params.has("id")){									
        //this.clienteService.get(params.get("id"))				
        //.subscribe(resp => this.cliente = resp);
        switch (params.get("id")){
          case '1':
            this.owner = {
              'id': '1', 
              'first_name': 'juan', 
              'last_name': 'de los palotes', 
              'email': 'juandelospalotes@hotmail.com', 
              'phone': '3571-554433', 
              'mobile': '3456-34544333'};	
          break;
          case '2':
            this.owner = {
              'id': '2', 
              'first_name': 'pedro', 
              'last_name': 'de los palotes', 
              'email': 'pedrodelospalotes@hotmail.com', 
              'phone': '3572-552233', 
              'mobile': '3476-33244333'};	
          break;
          default:
            this.owner = {
              'id': '3', 
              'first_name': 'américo', 
              'last_name': 'de los palotes', 
              'email': 'juandelospalotes@hotmail.com', 
              'phone': '3571-554433', 
              'mobile': '3456-34544333'};	
            break;
        }
        							
      }else{												
        this.owner = {
          'id': '3', 
          'first_name': 'teresa', 
          'last_name': 'de los palotes', 
          'email': 'juandelospalotes@hotmail.com', 
          'phone': '3571-554433', 
          'mobile': '3456-34544333'};	
      }												
    });
  }

}
