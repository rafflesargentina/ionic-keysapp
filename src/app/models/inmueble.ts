export class Inmueble{
    id: string;
    constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Inmueble>) {
        Object.assign(this, init);
    }
}