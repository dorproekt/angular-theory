import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

    form: FormGroup;
    charsCount = 5;

    constructor() { }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email], this.checkEmail),
            pass: new FormControl('', [Validators.required, this.checkLength.bind(this)]),
            country: new FormControl('ua'),
            answer: new FormControl('no')
        });
    }

    onSubmit() {
        console.log('work!', this.form);
    }

    checkLength(control: FormControl) {
        if (control.value.length <= this.charsCount) {
            return {
                'errorLength': true,
            };
        }
        return null;
    }

    checkEmail(control: FormControl): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'i@i.ua') {
                    resolve({
                        'errEmail': true
                    });
                }else {
                    resolve(null);
                }
            }, 3000);
        });
    }
}
