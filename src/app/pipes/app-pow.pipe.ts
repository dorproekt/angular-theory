import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appPow'
})
export class AppPowPipe implements PipeTransform {

    transform(value: any, num: number, text: string): any {
        return text + value * num;
    }

}
