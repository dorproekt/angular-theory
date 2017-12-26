import { Component } from '@angular/core';
import { divTrigger } from './app.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [divTrigger]
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
