export class Client {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', lastName = '', age = '', dni = '', email = '') {
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.dni = dni;
        this.email = email;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    lastName: string;
    age: string;
    dni: string;
    email: string;
}
