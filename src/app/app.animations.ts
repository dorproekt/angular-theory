import { trigger, state, style, transition, animate } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
    transition(':enter', [
        style({
            opacity: 0,
        }),
        animate(500, style({
            opacity: 1,
        }))
    ]),
    transition(':leave',[
        style({
            opacity: 1
        }),
        animate(500, style({
            opacity: 0
        }))
    ])
]);
