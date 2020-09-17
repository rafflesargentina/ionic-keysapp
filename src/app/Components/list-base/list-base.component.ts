import { Component, OnInit, ComponentFactoryResolver, Input, ViewChild, Type, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { ItemDirective } from './item.directive';
import { ItemComponent } from './item.component';
import { CardInmuebleComponent } from '../card-inmueble/card-inmueble.component';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss'],
})
export class ListBaseComponent implements OnInit {

  @Input() itemComponent:Type<any>;
  @Input() service: any;
  @ViewChildren(ItemDirective) itemHost: QueryList<ItemDirective>;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Output() select: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  public page = 1;
  
  public items =[];

  private isLoading= false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public loadingController: LoadingController,
  ) {
   
  }

  ngOnInit() {
    this.actualizar();
  }

  actualizar(){
    var service = this.service();
    service.all(this.page).subscribe(response=>{
      //console.log(response.data.data);
      var elementos = response.data.data; 
    });  
    service.all(this.page).subscribe(response=>{   
      var resp:any = response;
      var elementos = resp.data.data;
      elementos.forEach(element => {
        this.items.push(element);        
      });
      setTimeout(
        ()=>{this.loadComponent()},
      100);
      //this.loadComponent();
      this.infiniteScroll.disabled = false;
      if (elementos.length < 5) {        
        this.infiniteScroll.disabled = true;
      }
    }, error=>{
      console.log('list-base.component.actualizar.error', error);
    }); 
  }

  verMas(){
    this.page++;   
    this.actualizar(); 
  }

  ngAfterViewInit(){
   
  }
  
  loadComponent() {
   
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.itemComponent);
    //console.log('item.Host', this.itemHost)
    this.itemHost.forEach((element, index) => {
      //console.log('element', element);
      const viewContainerRef = element.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<ItemComponent>componentRef.instance).data = this.items[index];
      //console.log('this.items[index]', this.items[index]);
    });   
  }


  doRefresh(event){ 
    this.items = [];
    this.page = 1;
    this.actualizar();
    setTimeout(() => {
      event.target.complete();
    }, 500);
    
  }

  loadData(event){

  }

  onChange(event){

  }
  
  agregar(){
    this.add.emit();
  }

  public seleccionar(item){
    this.select.emit(item);
  }

  async presentLoading() {
    if(this.isLoading = false){
      this.isLoading = true;
      return await this.loadingController.create({
        message: 'Cargando',
      }).then(a => {
        a.present().then(() => {
         
        });
      });
    }
   

  }
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
