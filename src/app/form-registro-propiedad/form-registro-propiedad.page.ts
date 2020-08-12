import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
//import { SelectInmueblePage } from '../select-inmueble/select-inmueble.page';
//import { SelectPropietarioPage } from '../select-propietario/select-propietario.page';
import { TiposPropiedadesService } from '../Services/tipos-propiedades.service';
import { TiposOperacionesService } from '../Services/tipos-operaciones.service';
import { Inmueble } from '../models/inmueble';
import { SelectPage } from '../select/select.page';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-form-registro-propiedad',
  templateUrl: './form-registro-propiedad.page.html',
  styleUrls: ['./form-registro-propiedad.page.scss'],
})
export class FormRegistroPropiedadPage implements OnInit {
  
  currencies: string[] = ['Dólares U$S', 'Pesos $'];
  segment: string = 'first';
  operaciones = [];
  tipos = [];
  titulo: string = 'Registro de Inmuebles'
  public inmueble:Inmueble;
  sale_operation: boolean = false;
  rental_operation: boolean = false;
  temp_rental_operation: boolean = false;

  public propietarioAsignado:Usuario;
  datosForm: FormGroup;
  submitted = false;
  public user: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private toast: ToastService,
    private modalController:ModalController,
    private tiposPropiedadesService:TiposPropiedadesService,
    private tiposOperacionesService:TiposOperacionesService
  ) { 

    this.inmueble = new Inmueble();

    this.propietarioAsignado = new Usuario();

    this.user = new Usuario();
    this.datosForm = this.formBuilder.group({
      name:['', Validators.required],
      customer_id: ['', Validators.required],
      address: ['', Validators.required],
      type:['', Validators.required],
    //  operation_id:['', Validators.required],
    /*  description: ['', Validators.required],
      sale_price:['', Validators.required],
      sale_currency:['', Validators.required],
      rental_price:['', Validators.required],
      rental_currency:['', Validators.required],
      temp_rental_price:['', Validators.required],
      temp_rental_currency:['', Validators.required],*/
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

    console.log(this.inmueble);
    
  }
  
  eliminarPropietario(){
    this.propietarioAsignado = new Usuario();
    this.datosForm.patchValue({
      owner_id: ""
    })
  }

  async seleccionarPropietario(){

    const modal = await this.modalController.create({
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

  cambioOperacion(event){
    
    if(event.target.value.includes(' Venta ')){      
      this.sale_operation = true;
      this.datosForm.addControl('sale_price', new FormControl('', Validators.required));
      this.datosForm.addControl('sale_currency', new FormControl('', Validators.required));
    }else{
      this.sale_operation = false;
      this.datosForm.removeControl('sale_price');
      this.datosForm.removeControl('sale_currency');
    }
    if(event.target.value.includes(' Alquiler ')){
      this.rental_operation = true;
      this.datosForm.addControl('rental_price', new FormControl('', Validators.required));
      this.datosForm.addControl('rental_currency', new FormControl('', Validators.required));
    }else{
      this.rental_operation = false;
      this.datosForm.removeControl('rental_price');
      this.datosForm.removeControl('rental_currency');
    }
    if(event.target.value.includes(' Alquiler temporario ')){
      this.temp_rental_operation = true;
      this.datosForm.addControl('temp_rental_price', new FormControl('', Validators.required));
      this.datosForm.addControl('temp_rental_currency', new FormControl('', Validators.required));
    }else{
      this.temp_rental_operation = false;
      this.datosForm.removeControl('temp_rental_price');
      this.datosForm.removeControl('temp_rental_currency');
    }
  }


}
