import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [`
        /*input.ng-invalid.ng-touched{
            border: solid 1px red;
        }*/
    `]
})
export class AppComponent implements OnInit {

    answers = [
        {
            type: 'yes',
            text: 'да'
        },
        {
            type: 'no',
            text: 'нет'
        },
    ];

    defaultCountry = 'ua';
    defaultAnswer = 'no';

    constructor() { }

    ngOnInit() { }

    formSubmit(form: NgForm) {
        console.log(form);
    }

}
