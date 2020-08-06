import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { Usuario } from '../models/usuario';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ParametrosService } from '../Services/global/parametros.service';
import { Evento } from '../models/evento';
import { EventosService } from '../Services/eventos.service';
import { ModalController } from '@ionic/angular';
import { SelectClientePage } from '../select-cliente/select-cliente.page';
import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';
import { ClientesService } from '../Services/clientes.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-form-evento',
  templateUrl: './form-evento.page.html',
  styleUrls: ['./form-evento.page.scss'],
})
export class FormEventoPage implements OnInit {

  public evento:Evento;
  public inmuebleAsignado:Inmueble;
  public clienteAsignado:Usuario;
  public fecha:Date;
  public hora:Date;
  public datosForm: FormGroup;
  public submitted = false;

  public isEditando = false;
  public pendienteConfirmar = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private eventosService:EventosService,
    private modalController:ModalController,
    private route:ActivatedRoute,
    private usuarioService:UsuarioService
  ) {

    this.datosForm = this.formBuilder.group({
      agent_id: ['', Validators.required],
      property_id : ['', Validators.required],
      customer_id: ['', Validators.required],
      date: ['', Validators.required],      
    });
    this.evento = new Evento();

  }


  ngOnInit() {
  }

  ionViewDidEnter(){ 
    
    if(this.route.snapshot.params.id){
      this.isEditando = true;
      this.eventosService.get(this.route.snapshot.params.id).subscribe(resp=>{
        let data:any = resp;
        this.datosForm.patchValue(data);
      })      
    }
  }

  eliminarInmueble(){
    this.inmuebleAsignado = new Inmueble();
    this.evento.property_id ="";

    this.datosForm.patchValue({
      property_id: ""
    })

  }

  eliminarCliente(){
    this.clienteAsignado = new Usuario();
    this.datosForm.patchValue({
      customer_id: ""
    })
  }

  async seleccionarInmueble(){
    const modal = await this.modalController.create({
      component: SelectInmueblePage
    });    

    modal.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      this.inmuebleAsignado.asignarValores(resp);
    });

    modal.present();   
  }

  async seleccionarCliente(){

    const modal = await this.modalController.create({
      component: SelectClientePage
    });    

    modal.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      this.clienteAsignado.asignarValores(resp);
    });

    modal.present();  
    
    
    
  }

  get f() { return this.datosForm.controls; }

  guardar(){

    this.submitted = true;

    if (this.datosForm.invalid) {
      return;
    }

    this.evento.asignarValores(this.datosForm.value);

    if(this.isEditando){
      this.eventosService.update(this.evento).subscribe(resp =>{
        console.log(resp);
      })
    }
    else{
      this.eventosService.create(this.evento).subscribe(resp =>{
        console.log(resp);
      })
    } 

  }

  aceptar(){
    let usuario_id = this.usuarioService.getUID();
    this.eventosService.aceptar(usuario_id,this.evento).subscribe(resp =>{
      this.ionViewDidEnter();
    });
    
  }

  rechazar(){
    let usuario_id = this.usuarioService.getUID();
    this.eventosService.rechazar(usuario_id,this.evento).subscribe(resp =>{
      this.ionViewDidEnter();
    });
  }

}
