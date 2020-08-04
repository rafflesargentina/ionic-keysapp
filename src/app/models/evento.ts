export class Evento{
    public id="";
    public agent_id ="";
    public customer_id="";
    public date ="";
    public property_id ="";

	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Evento>) {
        Object.assign(this, init);
    }
}