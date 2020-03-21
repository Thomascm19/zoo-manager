export class Employee {

    constructor(id = '', name = '', lastName = '') {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }

    id: string;
    name: string;
    lastName: string;
}
