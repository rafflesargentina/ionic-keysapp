import { Component, OnInit } from '@angular/core';
import { LlavesService } from '../Services/llaves.service';
import { Llave } from '../models/llave';
import { Inmueble } from '../models/inmueble';
import { Usuario } from '../models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { ModalController } from '@ionic/angular';
import { SelectPage } from '../select/select.page';

@Component({
  selector: 'app-form-llave',
  templateUrl: './form-llave.page.html',
  styleUrls: ['./form-llave.page.scss'],
})
export class FormLlavePage implements OnInit {
  
  public llave: Llave;
  public inmuebleAsignado: Inmueble;
  public agente: Usuario;
  public datosForm: FormGroup;
  public submitted = false;
  public isEditando = false;
  public userId ="";
  
  constructor(
      private llavesService: LlavesService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private usuarioService: UsuarioService,
      private router: Router,
      private modalCtrl: ModalController
    ) { 
    this.userId = this.usuarioService.getUID();
    console.log('registrant_id', this.userId);
    this.datosForm = this.formBuilder.group({
      registrant_id: [this.userId, null],
      branch_office_id: [1, Validators.required],
      property_id : ['', Validators.required],
      agent_id: ['', null],
      number: [1, Validators.required],       
    });
    this.llave = new Llave();
    this.inmuebleAsignado = new Inmueble();
    this.agente = new Usuario();
  }

  ngOnInit() {
    
  }

  async selectInmueble(){
    const modalPage = await this.modalCtrl.create({ 	
      component: SelectPage, 			
      componentProps: { 					
        tipo: 'property',				
      } 							
    });
    await modalPage.present(); 
    modalPage.onDidDismiss()
    .then((data) => {
      let resp: any = data;
      console.log('selectInmueble', resp.data.cliente);
      this.inmuebleAsignado.asignarValores(resp.data.cliente);
      this.datosForm.patchValue({
        property_id: this.inmuebleAsignado.id
      })
    });
  }

  async selectContact(){
    const modalPage = await this.modalCtrl.create({ 	
      component: SelectPage, 			
      componentProps: { 					
        tipo: 'contact',				
      } 							
    }); 							
    await modalPage.present(); 
    modalPage.onDidDismiss()
    .then((data) => {
      let resp: any = data;
      console.log('selectContact', resp.data);
      this.agente.asignarValores(resp.data.cliente);
      this.datosForm.patchValue({
        agent_id: this.agente.id
      });
    });
  }

  ionViewDidEnter(){ 
    if(this.route.snapshot.params.id){
      this.isEditando = true;
      this.llavesService.get(this.route.snapshot.params.id).subscribe(resp=>{
        let data:any = resp;
        this.datosForm.patchValue(data);
      });   
    }
  }

  eliminarInmueble(){
    this.inmuebleAsignado = new Inmueble();
    this.llave.property_id ="";
    this.datosForm.patchValue({
      property_id: ""
    });
  }

  eliminarCliente(){
    this.agente = new Usuario();
    this.datosForm.patchValue({
      agente_id: ""
    });
  }

  get f() { return this.datosForm.controls; }

  guardar(){
    console.log('guardar', this.datosForm.value);
    this.submitted = true;
    if (this.datosForm.invalid) {
      return;
    }
    this.llave.asignarValores(this.datosForm.value);
    if(this.isEditando){
      this.llavesService.update(this.llave).subscribe(resp =>{
        console.log('llavesService.update', resp);
      });
    }else{
      this.llavesService.create(this.llave).subscribe(resp =>{
        console.log('llavesService.create', resp);
      })
    } 
    
  }

}
