import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmueblesService } from 'src/app/Services/inmuebles.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() tipo;
  @Input() item: any;
  card_titulo: string = 'Prueba';
  card_subtitulo: string = 'prueba';
  p1: string = 'mas pruebas';
  p2: string = 'otra prueba';
  p3: string = '';

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private inmueblseService: InmueblesService,
  ) { }

  ngOnInit() {
    if(this.tipo === 'inmueble'){
      this.inmueblseService.get(this.item).subscribe(resp =>{
        console.log(resp);
      });
      this.card_titulo = 'Algún dato reelevante del inmueble';
      this.card_subtitulo = 'algún otro dato importante del inmueble';
      this.p1 = 'más datos del inmueble';
      this.p2 = 'otro dato del inmueble';
      this.p3 = 'ubicación u otra cosa';
    }else if(this.tipo === 'usuario'){
      const user = this.usuarioService.get(this.item);
      console.log(user);
      this.card_titulo = 'Nombre  y apellido del Usuario';
      this.card_subtitulo = 'email del usuario';
      this.p1 = 'teléfono del usuario';
      this.p2 = ' mobil del usuario';
      this.p3 = '';
    }
  }

}
