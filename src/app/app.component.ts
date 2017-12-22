import { Component } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    cars: Cars[] = [];
    carName: string;
    colors = [
        'red',
        'green',
        'yellow',
        'black',
        'blue',
        'pink'
    ];

    constructor(private carsService: CarsService) {}

    loadCars() {
        this.carsService
            .getCars()
            .subscribe((cars: Cars[]) => {
                this.cars = cars;
            });
    }

    addCar() {
        this.carsService
            .addCar(this.carName)
            .subscribe(car => {
                this.cars.push(car);
            });
        this.carName = '';
    }

    getRandColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }

    setNewColor(car) {
        this.carsService.changeColor(car, this.getRandColor())
            .subscribe(data => console.log(data));
    }

    deleteCar(car) {
        this.carsService.delToCar(car)
            .subscribe(() => {
                this.cars = this.cars.filter(c => c.id !== car.id);
            });
    }
}
