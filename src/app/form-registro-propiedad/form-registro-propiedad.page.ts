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

@Component({
  selector: 'app-form-registro-propiedad',
  templateUrl: './form-registro-propiedad.page.html',
  styleUrls: ['./form-registro-propiedad.page.scss'],
})
export class FormRegistroPropiedadPage implements OnInit {
  
  //currencies: string[] = ['Dólares U$S', 'Pesos $'];
  segment: string = 'first';
  public operaciones: Operacion[] = [];
  tipos = [];
  titulo: string = 'Registro de Inmuebles'
  public inmueble:Inmueble;
  //sale_operation: boolean = false;
  //rental_operation: boolean = false;
  //temp_rental_operation: boolean = false;

  public propietarioAsignado:Usuario;
  datosForm: FormGroup;
  submitted = false;
  public user: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private toast: ToastService,
    private tiposPropiedadesService:TiposPropiedadesService,
    private tiposOperacionesService:TiposOperacionesService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { 

    this.inmueble = new Inmueble();

    this.propietarioAsignado = new Usuario();

    this.user = new Usuario();
    this.datosForm = this.formBuilder.group({
      name:['', Validators.required],
      customer_id: ['', Validators.required],
      address: ['', Validators.required],
      type:['', Validators.required],
      operaciones: ['', Validators.required]
    });    

    this.tiposOperacionesService.all(1).subscribe(resp =>{
      let response:any = resp;
      this.operaciones = response.data.data;
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

    //console.log(this.inmueble);
    
  }
  
  eliminarPropietario(){
    this.propietarioAsignado = new Usuario();
    this.datosForm.patchValue({
      owner_id: ""
    })
  }

  async seleccionarPropietario(){

    const modal = await this.modalCtrl.create({
      component: SelectPage,
      componentProps: { 					
        //datos que viajan al modal en modo clave: valor,	
        tipo: 'propietario'				
      } 
    });    
    /*
    modal.onDidDismiss()
    .then((data) => {
      let resp:any = data;
      this.propietarioAsignado.asignarValores(resp);
      this.datosForm.patchValue({
        owner_id: resp.id
      })
    });*/
    modal.present();
    await modal.onDidDismiss()
    .then((data) => {
      let resp: any = data;
      if(data != undefined){
        this.propietarioAsignado.asignarValores(resp);
        this.datosForm.patchValue({
          owner_id: resp.id
        });
      }else{
        this.toast.mensaje('Error', 'Debe seleccionar un propietario');
      }
    }); 
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
        operaciones: true
      });
    }else{
      this.toast.mensajeRojo('Error', 'Debe seleccionar al menos un tipo de operación');
    }
    console.log('Retorno del modal', this.operaciones); 
    
  }

  /* async eliminarOperacion(indice){
    alert('¿Realmente desea eliminar esta operación?');
    this.operaciones.splice(indice, 1);

    console.log('eliminarOperacion', indice);
    const toast = await this.toastCtrl.create({
      header: 'Advertencia',
      message: '¿Realmente desea eliminar esta operación?',
      position: 'top',
      color: "warning",
      buttons: [
       {
          side: 'end',
          icon: 'close-circle',
          text: 'cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked')
          }
        },
        {
          side: 'end',
          icon: 'checkmark-circle',
          text: 'ok',
          role: 'acept',
          handler: () =>{
            //console.log('ok clicked');
            this.operaciones.splice(indice, 1);
            //console.log('operaciones', this.operaciones);
          }
        }
      ]
    });
    toast.present();
  }*/
  
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
