import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from '../Services/clientes.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.page.html',
  styleUrls: ['./detail-cliente.page.scss'],
})
export class DetailClientePage implements OnInit {
  cliente: Usuario = new Usuario();

  constructor(
    private router: Router,							
    private route: ActivatedRoute,								
    private clienteService: ClientesService) { }

  ngOnInit() {
    //this.route.snapshot.params.id
    this.route.paramMap.subscribe(params => {						
      if(params.has("id")){									
        //this.clienteService.get(params.get("id"))				
        //.subscribe(resp => this.cliente = resp);
        switch (params.get("id")){
          case '1':
            this.cliente.asignarValores(
              {'id': '1', 
              'first_name': 'juan', 
              'last_name': 'de los palotes', 
              'email': 'juandelospalotes@hotmail.com', 
              'phone': '3571-554433', 
              'mobile': '3456-34544333'});	
          break;
          case '2':
            this.cliente.asignarValores({
              'id': '2', 
              'first_name': 'pedro', 
              'last_name': 'de los palotes', 
              'email': 'pedrodelospalotes@hotmail.com', 
              'phone': '3572-552233', 
              'mobile': '3476-33244333'});	
          break;
          default:
            this.cliente.asignarValores({
              'id': '1', 
              'first_name': 'juan', 
              'last_name': 'de los palotes', 
              'email': 'juandelospalotes@hotmail.com', 
              'phone': '3571-554433', 
              'mobile': '3456-34544333'});	
            break;
        }
        							
      }else{												
        this.cliente.asignarValores({
          'id': '2', 
          'first_name': 'pedro', 
          'last_name': 'de los palotes', 
          'email': 'juandelospalotes@hotmail.com', 
          'phone': '3571-554433', 
          'mobile': '3456-34544333'});	
      }												
    });
  }

}
