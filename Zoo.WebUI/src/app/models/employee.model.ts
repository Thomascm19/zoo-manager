export class Employee {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', lastName = '') {
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    lastName: string;
}
