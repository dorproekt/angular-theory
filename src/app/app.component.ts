import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('clickedDiv', [
            state('start', style({
                backgroundColor: 'blue',
                width: '150px',
                height: '150px'
            })),
            state('end', style({
                backgroundColor: 'red',
                width: '300px',
                height: '300px'
            })),
            state('active', style({
                width: '170px',
                height: '170px',
                backgroundColor: 'yellow',
            })),
            transition('start <=> end', animate('800ms ease-out')),
            transition('start => active', animate(300)),
            transition('active => end', animate(300)),
        ]),
        trigger('multi', [
            state('start', style({
                width: '150px',
                height: '150px',
                border: '5px solid red'
            })),
            state('end', style({
                width: '180px',
                height: '180px',
                backgroundColor: 'orange'
            })),
            transition('start <=> end', [
                style({
                    backgroundColor: 'black'
                }),
                animate(500)
            ])
        ])
    ]
})
export class AppComponent {
    clickedDivState = 'start';
    multiState = 'start';
    isVisible = false;

    changeDivState() {
        this.clickedDivState = 'end';
        setTimeout(() => {
            this.clickedDivState = 'start';
        }, 1000);
    }
}
