import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

    id: number;
    name: string;
    color: string;
    year: string;
    has: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];
        this.color = this.route.snapshot.queryParams['color'];
        this.year = this.route.snapshot.queryParams['year'];
        this.has = this.route.snapshot.fragment;

        this.route.params.subscribe((params: Params) => {
            // console.log(params);
            this.id = +params['id'];
            this.name = params['name'];
        });

        this.route.queryParams.subscribe((params: Params) => {
            this.color: params['color'];
            this.year: params['year'];
        });
    }

}
