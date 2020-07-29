import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { Propietario } from '../models/propietario';

@Component({
  selector: 'app-form-registro-propiedad',
  templateUrl: './form-registro-propiedad.page.html',
  styleUrls: ['./form-registro-propiedad.page.scss'],
})
export class FormRegistroPropiedadPage implements OnInit {
  propietarios: Propietario[] = [
    { first_name: 'Juan José ',
      last_name: 'Paso', 
      email: '',
      phone: '',
      mobile: ''
    },
    { first_name: 'Manuel ',
      last_name: 'Belgrano', 
      email: '',
      phone: '',
      mobile: ''
    },
    { first_name: 'Miguel ',
      last_name: 'de Azcuénaga', 
      email: '',
      phone: '',
      mobile: ''
    },
    { first_name: 'Rosarito ',
      last_name: 'Vega de la Cruz', 
      email: '',
      phone: '',
      mobile: ''
    }];
  segmento: string = 'primero';
  operaciones: string[] = ['Venta', 'Alquiler', 'Alquiler temporario'];
  operaciones_incluidas: string[] = [];
  operacion_venta: boolean = false;
  operacion_alquiler: boolean = false;
  operacion_alquiler_temp: boolean = false;

  datosForm: FormGroup;
  submitted = false;
  public user: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    //private authService: AuthenticationRafflesService,
    private toastCtrl:ToastController,
    private router:Router
  ) { 
    this.user = new Usuario();
    this.datosForm = this.formBuilder.group({
      propietario: ['', Validators.required],
      direccion : ['', Validators.required],
      address: ['', Validators.required],
      precio_venta: ['', Validators.required],
      moneda_venta: ['', Validators.required],
      precio_alquiler: ['', Validators.required],
      moneda_alquiler: ['', Validators.required],
      precio_alquiler_temp: ['', Validators.required],
      moneda_alquiler_temp: ['', Validators.required],
      operaciones: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    
  }

  ngOnInit() {
    
  }

  get f() { return this.datosForm.controls; }

  registrar(){

    this.submitted = true;
    /*
    this.authService.registrar(this.datosForm.value).subscribe(response =>{
      var resp:any = response;
      console.log(resp.data.data);
      localStorage.setItem('token',resp.data.token);
      localStorage.setItem('user',JSON.stringify(resp.data.user));
      this.authService.authenticationState.next(true);
      this.router.navigate(['/tabs/home']);
    },err=>{
      if(err.status == 0){
        //this.presentAlert("No fue posible conectarnos a nuestros servidores, por favor verifica tu conexión");
        this.presentToast("No fue posible conectarnos a nuestros servidores, por favor verifica tu conexión");
      }
      //email: test_user_53751378@testuser.com
      //password: Yobs2020
      console.log(err);
      let mensaje: string = '';
      Object.keys(err.error.errors).forEach((key,index)=> {
        // key: the name of the object key
        // index: the ordinal position of the key within the object 
        //this.authService.authenticationState.next(false);
        console.log(err.error.errors[key][0])
        mensaje += err.error.errors[key][0] + '\n';
        //this.presentToast(err.error.errors[key][0]);
        //this.presentAlert(err.error.errors[key][0]);
      });
      this.presentToast(mensaje);
    })*/
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }

  setValue(newValue : any){
    
    this.user.address = newValue.address;
    console.log(this.user.address);
  }

  segmentChanged(ev: any) {
    if(this.segmento == 'primero'){
      this.segmento = 'segundo';
    }else{
      this.segmento = 'primero';
    }
  }

  cambioOperacion(event){
    this. operaciones = ['Venta', 'Alquiler', 'Alquiler temporario'];
    console.log('cambioOperacion', event.target.value);
    this.operaciones_incluidas.push(event.target.value);
    console.log('operaciones incluidas', this.operaciones_incluidas);
    if(event.target.value.includes(' Venta ')){
      console.log('operacion_venta', this.operacion_venta);
      this.operacion_venta = true;
    }else{
      this.operacion_venta = false;
    }
    if(event.target.value.includes(' Alquiler ')){
      this.operacion_alquiler = true;
    }else{
      this.operacion_alquiler = false;
    }
    if(event.target.value.includes(' Alquiler temporario ')){
      this.operacion_alquiler_temp = true;
    }else{
      this.operacion_alquiler_temp = false;
    }
  }

  op_inc(event){
    console.log('op_inc', event.target.value);
    if(this.operaciones_incluidas.includes('Venta')){
      this.operacion_venta = true;
    }
    if(this.operaciones_incluidas.includes('Alquiler')){
      this.operacion_alquiler = true;
    }
    if(this.operaciones_incluidas.includes('Alquiler Temporario')){
      this.operacion_alquiler_temp = true;
    }
  }
}
