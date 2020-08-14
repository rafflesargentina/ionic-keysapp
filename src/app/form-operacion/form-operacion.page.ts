import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Operacion } from '../models/operacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-operacion',
  templateUrl: './form-operacion.page.html',
  styleUrls: ['./form-operacion.page.scss'],
})
export class FormOperacionPage implements OnInit {
  
  @Input() operacion: Operacion = new Operacion();
  tipos: string[] = ['Venta', 'Alquiler', 'Alquiler temporario'];
  currencies: string[] = ['Dólares U$S', 'Pesos $'];
  datosForm: FormGroup;
  submitted = false;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
  ) { 
    this.datosForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      precio: ['', Validators.required],
      moneda: ['', Validators.required]
    });  
  }

  ngOnInit() {
  }

  get f() { return this.datosForm.controls; }

  cancelar(){
    console.log('cancelar');
    this.modalCtrl.dismiss();	
  }

  aceptar(){
    this.modalCtrl.dismiss({
      operacion: this.operacion
    });
  }

  submit(){
    this.submitted = true;
    this.operacion.asignarValores(this.datosForm.value);
    if(this.datosForm.controls.tipo.valid && 
       this.datosForm.controls.precio.valid && 
       this.datosForm.controls.moneda.valid ){
        this.aceptar();
    }
    console.log('operacion', this.operacion);
  }

  cambioOperacion(event){
    console.log('event', event);
    this.operacion.tipo = event.target.value;
  }

}
