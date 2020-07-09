export class Package {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', price = '', description = '', client = '') {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.client = client;
        this.description = description;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    price: string;
    description: string;
    client: any;
}
