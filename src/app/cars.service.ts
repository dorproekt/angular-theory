import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
     cars: [{}] = [
        {
            name: 'Skoda',
            id: 1,
            year: 2017,
            color: 'red'
        },
        {
            name: 'Mazda',
            id: 2,
            year: 2011,
            color: 'blue'
        },
        {
            name: 'Lada',
            id: 3,
            year: 2012,
            color: 'yellow'
        }
    ];
}
