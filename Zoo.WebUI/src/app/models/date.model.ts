export class Date {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', description = '', animal = '', vet = '') {
        this._id = _id;
        this.animal = animal;
        this.vet = vet;
        this.description = description;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    animal: any;
    vet: any;
    description: string;
}
