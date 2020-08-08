export class Usuario {
    public id= "";
    public first_name= "";
    public last_name= "";
    public email= "";
    public phone= "";
    public mobile= "";
    
    constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
