import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsService } from './cars.service';


@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        AddCarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [CarsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
