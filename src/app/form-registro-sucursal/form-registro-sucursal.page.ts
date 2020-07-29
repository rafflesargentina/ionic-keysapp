import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro-sucursal',
  templateUrl: './form-registro-sucursal.page.html',
  styleUrls: ['./form-registro-sucursal.page.scss'],
})
export class FormRegistroSucursalPage implements OnInit {

  datosForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    //private authService: AuthenticationRafflesService,
    private toastCtrl:ToastController,
    private router:Router
  ) { 

    this.datosForm = this.formBuilder.group({

      identificacion: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required]  
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

}
