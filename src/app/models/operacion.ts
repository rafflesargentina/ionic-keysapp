export class Operacion{
    public id="";
    public operation_type_id ="";
    public value="";
    public currency ="";

	constructor(){ }
    
    public asignarValores(init?: Partial<Operacion>) {
        Object.assign(this, init);
    }
} 