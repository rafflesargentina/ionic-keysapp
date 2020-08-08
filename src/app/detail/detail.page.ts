import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { InmueblesService } from '../Services/inmuebles.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @Input() tipo: string;
  @Input() item;
  titulo: string;

  constructor(
    private router: Router,							
    private route: ActivatedRoute,								
    private usuarioService: UsuarioService,
    private inmuebleService: InmueblesService
  ) { }

  ngOnInit() {
    console.log('tipo detalle', this.tipo);
    this.route.params.subscribe(params =>{
      this.tipo = params['tipo'];
    });
    switch (this.tipo){
      case 'inmueble':
        this.titulo = 'Detalle de Inmueble';
        break;
      case 'cliente':
        this.titulo = 'Detalle de Cliente';
        break;
      case 'agente':
        this.titulo = 'Detalle de Agente';
        break;
      case 'propietario':
        this.titulo = 'Detalle de Propietario';
        break;
      case 'usuario':
        this.titulo = 'Detalle de Usuario';
        break;
      default:
        this.titulo = '';
        break;
    }
  }

}
