export class Operacion{
    public id="";
    public tipo ="";
    public precio="";
    public moneda ="";

	constructor(){ }
    
    public asignarValores(init?: Partial<Operacion>) {
        Object.assign(this, init);
    }
}