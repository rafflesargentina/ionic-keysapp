export class Inmueble{
	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Inmueble>) {
        Object.assign(this, init);
    }
}