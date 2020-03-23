export class GeographicalArea {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', name= '', employee= '') {
        this._id = _id;
        this.name = name;
        this.employee = employee;
    }
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    employee: any;
}
