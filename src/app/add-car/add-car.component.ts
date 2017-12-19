import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

    carName = '';

    constructor(private carsService: CarsService) { }

    ngOnInit() {
    }

    addCar() {
        this.carsService.cars.push({
            name: this.carName,
            isSold: false
        });
        this.carName = '';
    }
}
