export class Sucursal {
    public id= "";
    public name= "";
    public address = {
        country:"",
        locality:"",
        state:"",
        street_name:"",
        street_number:""        
    }
    
    constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Sucursal>) {
        Object.assign(this, init);
    }
}
