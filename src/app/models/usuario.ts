export class Usuario{
    public id ="";
    public email ="";
    public foto ="";
    public nombre ="";
    public token ="";
	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}