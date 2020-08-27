import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../models/inmueble';
import { Usuario } from '../models/usuario';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ParametrosService } from '../Services/global/parametros.service';
import { Evento } from '../models/evento';
import { EventosService } from '../Services/eventos.service';
import { ModalController } from '@ionic/angular';
//import { SelectClientePage } from '../select-cliente/select-cliente.page';
//import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';

import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { SelectPage } from '../select/select.page';

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
  public userId ="";

  constructor(
    private formBuilder: FormBuilder,
    private eventosService:EventosService,
    private modalController:ModalController,
    private route:ActivatedRoute,
    private usuarioService:UsuarioService,
    private router:Router,
    private modalCtrl:ModalController
  ) {

    this.userId = this.usuarioService.getUID();

    this.datosForm = this.formBuilder.group({
      registrant_id: [this.userId, null],
      property_id : ['', Validators.required],
      customer_id: ['', Validators.required],
      date: ['', Validators.required],     
      hour: ['', Validators.required],
      comment:['',Validators.required]     
    });

    this.evento = new Evento();
    this.inmuebleAsignado = new Inmueble();
    this.clienteAsignado = new Usuario();

  }


  ngOnInit() {

  }

  async selectInmueble(){
    //console.log('home tipo', tipo);
    const modalPage = await this.modalCtrl.create({ 	
      component: SelectPage, 			
      componentProps: { 					
        tipo: 'property',				
      } 							
    }); 							
    await modalPage.present(); 
    modalPage.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      console.log(resp.data)
      this.inmuebleAsignado.asignarValores(resp.data.cliente);
      this.datosForm.patchValue({
        property_id:this.inmuebleAsignado.id
      })
    });
  }

  async selectContact(){
    //console.log('home tipo', tipo);
    const modalPage = await this.modalCtrl.create({ 	
      component: SelectPage, 			
      componentProps: { 					
        tipo: 'contact',				
      } 							
    }); 							
    await modalPage.present(); 
    modalPage.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      console.log(resp.data)
      this.clienteAsignado.asignarValores(resp.data.cliente);
      this.datosForm.patchValue({
        customer_id:this.clienteAsignado.id
      })
    });
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

  get f() { return this.datosForm.controls; }

  guardar(){

    console.log(this.datosForm.value)
    this.submitted = true;

    if (this.datosForm.invalid) {
      return;
    }

    this.evento.asignarValores(this.datosForm.value);

    //!!!!

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
   
  }

  rechazar(){ 
   
  }

}
