import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private auth: AuthService) { }

    ngOnInit() {
    }

    goCarsPage() {
        this.router.navigate(['/cars']);
    }

    changeAythStatus(status: string) {
        if (status === 'login') {
            this.auth.logIn();
        } else {
            this.auth.logOut();
        }
    }

}
