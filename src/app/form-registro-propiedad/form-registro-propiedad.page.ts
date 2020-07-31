import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
  owners: Propietario[] = [
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
    } ];
  currencies: string[] = ['Dólares U$S', 'Pesos $'];
  segment: string = 'first';
  operations: string[] = ['Venta', 'Alquiler', 'Alquiler temporario'];
  included_operations: string[] = [];
  sale_operation: boolean = false;
  rental_operation: boolean = false;
  temp_rental_operation: boolean = false;

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
      owner: ['', Validators.required],
      address: ['', Validators.required],
      operations: ['', Validators.required],
      description: ['', Validators.required]
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
    //console.log(this.user.address);
  }

  segmentChanged(ev: any) {
    if(this.segment == 'first'){
      this.segment = 'second';
    }else{
      this.segment = 'first';
    }
  }

  cambioOperacion(event){
    this.operations = ['Venta', 'Alquiler', 'Alquiler temporario'];
    console.log('cambioOperacion', event.target.value);
    this.included_operations.push(event.target.value);
    console.log('operaciones incluidas', this.included_operations);
    if(event.target.value.includes(' Venta ')){
      console.log('operacion_venta', this.sale_operation);
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
    console.log('datosForm', this.datosForm);
  }

  op_inc(event){
    console.log('op_inc', event.target.value);
    if(this.included_operations.includes('Venta')){
      this.sale_operation = true;
    }
    if(this.included_operations.includes('Alquiler')){
      this.rental_operation = true;
    }
    if(this.included_operations.includes('Alquiler Temporario')){
      this.temp_rental_operation = true;
    }
  }

}
