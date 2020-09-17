import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from '../Services/contactos.service';

@Component({
  selector: 'app-detail-contacto',
  templateUrl: './detail-contacto.page.html',
  styleUrls: ['./detail-contacto.page.scss'],
})
export class DetailContactoPage implements OnInit {
  @Input() id: string;
  contacto: Usuario;

  constructor(
    private route: ActivatedRoute,
    private contactosService: ContactosService
    ) { }

  ngOnInit() {

      this.id = params['id'];
      console.log('params.id', this.id);
    });
    this.contactosService.get(this.id).subscribe(resp => {
      console.log('datail-component', resp);
    });
  }

}
