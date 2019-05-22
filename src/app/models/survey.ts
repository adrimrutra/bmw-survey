import { Carmodel } from './carmodel';

export class Survey {
    age: number;
    gender: string;
    license: string;
    first_car: string;
    drivetrain: string;
    drifting: string;
    how_many: number;
    models: Carmodel [];
    constructor() {
        this.age = 0;
        this.gender = '';
        this.license = '';
        this.first_car = '';
        this.drivetrain = '';
        this.drifting = '';
        this.how_many = 0;
        this.models =  [];
    }
}
