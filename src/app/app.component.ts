import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="row">
                <!--<h1>{{ hederText | uppercase }}</h1>
                <h1>{{ hederText | lowercase }}</h1>
                <h1>{{ hederText | slice:0:3 }}</h1>
                <hr>
                <h2>{{ pi }}</h2>
                <h2>{{ pi | number }}</h2>
                <h2>{{ pi | number:'1.3-5' }}</h2>
                <hr>
                <h3>{{ money | currency:USD }}</h3>
                <hr>
                <h4>{{ date | date }}</h4>
                <h4>{{ date | date:'fullDate' }}</h4>
                <h4>{{ date | date:'shortDate' }}</h4>
                <h4>{{ date | date:'shortTime' }}</h4>
                <pre>{{ obj | json }}</pre>
                <h2>{{ num | appPow: 4: 'text ' }}</h2>-->
                <input type="text" class="form-control" placeholder="Введите машину" [(ngModel)]='serchCar'>
                <hr>
                <button class="btn btn-danger" (click)='addCar()'>Добавить авто</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" *ngFor="let car of cars | carFilter:serchCar; let i = index">
                       {{ i + 1 }} - <strong>{{ car.name }}</strong>
                    </li>
                </ul>
<h1>{{ asyncTitle | async }}</h1>
            </div>
        </div>
    `,
    styles: []
})
export class AppComponent implements OnInit {
    asyncTitle = Observable.of('Title').delay(3000);
    serchCar = '';
    hederText = 'Создание своей директории!!!';
    pi = Math.PI;
    money = 350;
    date = new Date();
    obj = {
        prop1: true,
        prop2: 25,
        prop3: {
            z: 'z',
            f: 'f'
        }
    };
    num = 4;

    cars = [
        {name: 'Skoda'},
        {name: 'Mazda'},
        {name: 'Mazda'},
        {name: 'Lada'},
        {name: 'Ford'},
        {name: 'Lexus'},
        {name: 'Toyota'}
    ];
    ngOnInit() { }

    addCar() {
        this.cars.push({
            name: 'New car'
        });
    }
}
