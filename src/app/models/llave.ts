export class Llave{
    public branch_office_id = 1;
    public property_id = "";
    public agent_id= "";
    public number = 1;
	constructor(){ }
    
    public asignarValores(init?: Partial<Llave>) {
        Object.assign(this, init);
    }
}