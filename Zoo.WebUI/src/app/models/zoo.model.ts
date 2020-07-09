export class Zoo {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', nit = '', email = '', description = '') {
        this._id = _id;
        this.name = name;
        this.nit = nit;
        this.email = email;
        this.description = description;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    description: string;
    nit: string;
    email: string;
}
