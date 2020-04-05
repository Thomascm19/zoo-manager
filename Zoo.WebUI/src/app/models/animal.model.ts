export class Animal {

    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', type = '', category = '', weight = 0.0, height = 0.0) {
        this._id = _id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.weight = weight;
        this.height = height;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    type: string;
    category: string;
    weight: number;
    height: number;
}
