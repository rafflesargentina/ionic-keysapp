import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
//import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';
//import { SelectPropietarioPage } from '../select-propietario/select-propietario.page';
import { TiposPropiedadesService } from '../Services/tipos-propiedades.service';
import { TiposOperacionesService } from '../Services/tipos-operaciones.service';
import { Inmueble } from '../models/inmueble';
import { SelectPage } from '../select/select.page';
import { ToastService } from '../Services/toast.service';
import { FormOperacionPage } from '../form-operacion/form-operacion.page';
import { Operacion } from '../models/operacion';
import { InmueblesService } from '../Services/inmuebles.service';
import { UsuarioService } from '../Services/usuario.service';
import { Llave } from '../models/llave';
import { FormLlavePage } from '../form-llave/form-llave.page';

@Component({
  selector: 'app-form-registro-propiedad',
  templateUrl: './form-registro-propiedad.page.html',
  styleUrls: ['./form-registro-propiedad.page.scss'],
})
export class FormRegistroPropiedadPage implements OnInit {
  
  //currencies: string[] = ['Dólares U$S', 'Pesos $'];
  segment: string = 'first';
  public operaciones:Operacion[] = [];
  public llaves:Llave[]=[];
  tipos = [];
  titulo: string = 'Registro de Inmuebles'
  public inmueble:Inmueble;

  public propietarioAsignado:Usuario;
  datosForm: FormGroup;
  submitted = false;
  public userId = "";

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private toast: ToastService,
    private tiposPropiedadesService:TiposPropiedadesService,
    private inmueblesService:InmueblesService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private usuarioService:UsuarioService
  ) { 

    this.inmueble = new Inmueble();
    this.propietarioAsignado = new Usuario();
    this.userId = this.usuarioService.getUID();

    this.datosForm = this.formBuilder.group({
      registrant_id:[this.userId,null],
      name:['', Validators.required],
      owner_id: ['', null],
      address: ['', Validators.required],
      property_type_id:['', Validators.required],
      operations: ['', Validators.required],
      description:['',null]
    });      

    this.tiposPropiedadesService.all(1).subscribe(resp =>{
      let response:any = resp;
      this.tipos = response.data.data;
    })

  }

  ngOnInit() {
    
  }

  get f() { return this.datosForm.controls; }

  registrar(){

    this.submitted = true;
    this.inmueble.asignarValores(this.datosForm.value);
    this.inmueble.operations = this.operaciones;
    console.log(this.inmueble); 

    this.inmueblesService.create(this.inmueble).subscribe(data=>{
      console.log(data);
      this.modalCtrl.dismiss(data);
    });    
  }
  
  eliminarPropietario(){
    this.propietarioAsignado = new Usuario();
    this.datosForm.patchValue({
      customer_id: ""
    })
  }

  async seleccionarPropietario(){

    const modal = await this.modalCtrl.create({
      component: SelectPage,
      componentProps: { 					
        tipo: 'customer'				
      } 
    });    
    
    modal.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      //console.log(resp.data.cliente.id);
      this.propietarioAsignado.asignarValores(resp.data.cliente);
      this.datosForm.patchValue({
        owner_id: resp.data.cliente.id
      })
    });
    modal.present();   
  }
  

  atras(){
    this.modalCtrl.dismiss();
  }

  async agregarLlave(){
    const modalPage = await this.modalCtrl.create({ 	
      component: FormLlavePage, 			
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,			
      },
    });
    await modalPage.present();
    const {data} = await modalPage.onDidDismiss(); 
    if(data !=undefined){
      this.llaves.push(data.llave);
    }
    console.log('Retorno del modal', this.operaciones); 
    
  }

  async eliminarllave(indice){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: '¿Realmente desea <strong>eliminar</strong> esta llave?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.llaves.splice(indice, 1);
            //console.log('Confirm Okay'); 
          }
        }
      ]
    });
    await alert.present();
  }
  
  async seleccionarOperaciones(){
    const modalPage = await this.modalCtrl.create({ 	
      component: FormOperacionPage, 			
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,			
      },
    });
    await modalPage.present();
    const {data} = await modalPage.onDidDismiss(); 
    if(data !=undefined){
      this.operaciones.push(data.operacion);
      this.datosForm.patchValue({
        operations: true
      });
    }
    console.log('Retorno del modal', this.operaciones); 
    
  }

  
  async eliminarOperacion(indice) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia',
      message: '¿Realmente desea <strong>eliminar</strong> esta operación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.operaciones.splice(indice, 1);
            //console.log('Confirm Okay'); 
          }
        }
      ]
    });
    await alert.present();
  }

  setValue(newValue: any){
    console.log(newValue.address)
    this.datosForm.patchValue({
      address:newValue.address
    })
    this.inmueble.address = newValue.address;    
  }

  segmentChanged(ev: any) {
    if(this.segment == 'first'){
      this.segment = 'second';
    }else{
      this.segment = 'first';
    }
  }


}
