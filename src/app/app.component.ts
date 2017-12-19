import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    cars = [
        {
            name: 'Ford',
            isSold: true
        },
        {
            name: 'Skoda',
            isSold: false
        },
        {
            name: 'Lada',
            isSold: false
        },
    ];

    ngOnInit() { }

    addCarToList(carName: string) {
        this.cars.push({
            name: carName,
            isSold: false
        });
    }
}
