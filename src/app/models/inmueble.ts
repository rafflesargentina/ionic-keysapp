export class Inmueble{

    public id="";
    public owner_id ="";
    public property_type_id ="";
    public name = "";
    public operations = [];
    public description ="";

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
    
    public asignarValores(init?: Partial<Inmueble>) {
        Object.assign(this, init);
    }
}