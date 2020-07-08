export class Packege {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', name= '', precio = 0,descripcion='', client= '' ) {
        this._id = _id;
        this.name = name;
        this.precio = precio;
        this.descripcion = descripcion;
        this.client = client;

    }
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    precio: number;
    descripcion: string;
    client: any;
}
