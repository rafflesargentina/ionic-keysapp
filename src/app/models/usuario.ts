export class Usuario {
    public id= "";
    public first_name= "";
    public last_name= "";
    public email= "";
    public phone= "";
    public mobile= "";
    public owner = false;
    public broker = false;
    public agent = false;
    public customer = false;
    
    constructor(
		
		){
    }
    
    public asignarValores(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}
