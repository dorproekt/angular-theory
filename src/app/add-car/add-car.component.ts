import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
    nameCar: string;
    yearCar: string;
    @Output() car = new EventEmitter<{name: string, year: string}>();

    constructor() { }

    ngOnInit() {
    }

    addCar() {
        this.car.emit({
            name: this.nameCar,
            year: this.yearCar
        });

        this.nameCar = '';
        this.yearCar = '';
    }
}
