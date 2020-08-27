export class Evento{
    public id="";
    public registrant_id ="";
    public customer_id="";
    public date ="";
    public property_id ="";
    public comment ="";
    public members= [];
	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Evento>) {
        Object.assign(this, init);
    }
}