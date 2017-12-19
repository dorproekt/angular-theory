import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'carFilter',
    pure: true
})
export class CarFilterPipe implements PipeTransform {

    transform(cars: any, searchStr: string) {
        if (searchStr === '') {
            return cars;
        }
        return cars.filter(car => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    }

}
