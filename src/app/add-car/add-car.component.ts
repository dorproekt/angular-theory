import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
    @Output() car = new EventEmitter<string>();
    carName = '';

    constructor() { }

    ngOnInit() {
    }

    addCar() {
        this.car.emit(this.carName);
        this.carName = '';
    }
}
