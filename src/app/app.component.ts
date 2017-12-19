import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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

    constructor() { }

    ngOnInit() { }

}
