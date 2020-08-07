export class Inmueble{

    public id="";
    public owner_id ="";
    public property_type_id ="";
    public name ="";
    
    public sale_price ="";
    public sale_currency ="";

    public rental_price ="";
    public rental_currency ="";

    public temp_rental_price="";
    public temp_rental_currency="";


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