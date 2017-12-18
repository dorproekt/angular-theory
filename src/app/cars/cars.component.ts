import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    cars: [{name: string, year: string}] = [
        {
            name: 'BMW',
            year: '2017'
        },
        {
            name: 'Skoda',
            year: '2006'
        },
        {
            name: 'Mazda',
            year: '2010'
        },
        {
            name: 'Volvo',
            year: '2011'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    updateCarList(car: {name: string, year: string}) {
        this.cars.push(car);
    }
}
