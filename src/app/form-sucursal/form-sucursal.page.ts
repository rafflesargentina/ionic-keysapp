import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../models/sucursal';
import { SucursalesService } from '../Services/sucursales.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../Services/toast.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-form-sucursal',
  templateUrl: './form-sucursal.page.html',
  styleUrls: ['./form-sucursal.page.scss'],
})
export class FormSucursalPage implements OnInit {
  titulo: string = 'Registro de Sucursales'
  public sucursal:Sucursal;
  datosForm: FormGroup;
  submitted = false;
  public userId = "";
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private toast: ToastService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private usuarioService:UsuarioService,
    private sucursalesService: SucursalesService,
  ) { 
    this.sucursal = new Sucursal();
    this.userId = this.usuarioService.getUID();

    this.datosForm = this.formBuilder.group({
      id:['',null],
      name:['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  get f() { return this.datosForm.controls; }

  registrar(){

    this.submitted = true;

    this.sucursal.asignarValores(this.datosForm.value);
    console.log('form-sucursal.registrar',this.sucursal); 

    this.sucursalesService.create(this.sucursal).subscribe(data=>{
      console.log(data);
    });
    this.modalCtrl.dismiss();
  }

  atras(){
    this.modalCtrl.dismiss();
  }

  setValue(newValue: any){
    console.log('sucursal', newValue.address);
    this.datosForm.patchValue({
      address:newValue.address
    })
    this.sucursal.address = newValue.address;    
  }
}
