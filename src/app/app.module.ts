import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { AppRoutingModule } from './app-routing.module';

import { CarsService } from './cars.service';
import { CarComponent } from './car/car.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
// import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    NotFoundComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [CarsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
