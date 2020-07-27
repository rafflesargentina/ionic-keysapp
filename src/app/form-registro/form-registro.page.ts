import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.page.html',
  styleUrls: ['./form-registro.page.scss'],
})
export class FormRegistroPage implements OnInit {
  tipoRegistro: string = 'cliente';
  // Importar el ViewChild para acceder a un elemento del DOM
  @ViewChild('passwordEyeRegister') passwordEye;
  @ViewChild('passwordEyeConfirmation') passwordEyeConfirm;
  @ViewChild('btnCliente') btnCliente;
  @ViewChild('btnCliente') btnAgente;
  // Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput1  =  'password';
  passwordTypeInput2  =  'password';
  // Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'
  iconpassword1  =  'eye-off';
  iconpassword2  =  'eye-off';
  private colorBtnAgente = 'medium';
  private colorBtnCliente = 'dark';

  datosForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router
  ) { 

    this.datosForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name : ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],      
      password_confirmation:['', Validators.required],
      accepted: [false, Validators.required]    
    });
    
  }

  ngOnInit() {
  }

  get f() { return this.datosForm.controls; }

  registrar(){

    this.submitted = true;
    if(this.f.password.value == ''){
      this.presentToast("Debe ingresar una contraseña");
    }
    if(this.f.password.value != this.f.password_confirmation.value){
      this.presentToast("La contraseña y su confirmación no coinciden");
    }
    if(this.f.accepted.value != true){
      this.presentToast("debe aceptar los términos y condiciones");
    }
    alert('registrado');
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

  cambioRegistro(registro: string){
    this.tipoRegistro = registro;
    if(this.tipoRegistro == 'agente'){
      this.datosForm.addControl('cuit', new FormControl('', Validators.required));
      this.colorBtnAgente = 'dark';
      this.colorBtnCliente = 'medium';
    }else{
      this.datosForm.removeControl('cuit');
      this.colorBtnAgente = 'medium';
      this.colorBtnCliente = 'dark';
    }
  }

  // Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, 
  //además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
    this.passwordTypeInput1  =  this.passwordTypeInput1  ===  'text'  ?  'password'  :  'text';
    this.iconpassword1  =  this.iconpassword1  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
  }

  togglePasswordConfirmMode() {
    this.passwordTypeInput2  =  this.passwordTypeInput2  ===  'text'  ?  'password'  :  'text';
    this.iconpassword2  =  this.iconpassword2  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEyeConfirm.el.setFocus();
  }

  onChange(){
    
  }
}
