export class Usuario{
    public id = "";
    public email = "";
    public foto = "";
    public nombre = "";
    public token = "";
    public address = "";
	constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}