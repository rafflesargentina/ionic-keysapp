import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Operacion } from '../models/operacion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiposOperacionesService } from '../Services/tipos-operaciones.service';
import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-form-operacion',
  templateUrl: './form-operacion.page.html',
  styleUrls: ['./form-operacion.page.scss'],
})
export class FormOperacionPage implements OnInit {
  
  @Input() operacion: Operacion = new Operacion();
  tiposOperaciones:any = [];
  currencies: string[] = ['USD','ARS'];
  datosForm: FormGroup;
  submitted = false;
  public userId = "";

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private tiposOperacionesService:TiposOperacionesService,
    private usuarioService:UsuarioService
  ) { 

    this.userId = this.usuarioService.getUID();

    this.datosForm = this.formBuilder.group({
      registrant_id:[this.userId,null],
      operation_type_id: ['', null],
      value: ['', Validators.required],
      currency: ['', Validators.required],
      operation_type_name:['',null]
    });  
  }

  ngOnInit() {
    this.tiposOperacionesService.all(1).subscribe(resp=>{
      let respuesta:any = resp;
      this.tiposOperaciones = respuesta.data.data;
      console.log(this.tiposOperaciones);
    })
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

  seleccionTipo(event){
    console.log(event.target.value);
    this.datosForm.patchValue({
      operation_type_id : event.target.value.id
    })
    this.datosForm.patchValue({
      operation_type_name : event.target.value.name
    })
  }

  submit(){
    this.submitted = true;
    this.operacion.asignarValores(this.datosForm.value);
    this.aceptar();    
    console.log('operacion', this.operacion);
  }

}
