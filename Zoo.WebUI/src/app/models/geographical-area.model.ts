export class GeographicalArea {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', firstEmployee = '', secondEmployee = '', thirdEmployee = '', fourthEmployee = '') {
        this._id = _id;
        this.name = name;
        this.firstEmployee = firstEmployee;
        this.secondEmployee = secondEmployee;
        this.thirdEmployee = thirdEmployee;
        this.fourthEmployee = fourthEmployee;
    }
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    firstEmployee: any;
    secondEmployee: any;
    thirdEmployee: any;
    fourthEmployee: any;
}
