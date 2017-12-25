import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
    { path: 'cars', component: CarsComponent, /*canActivate: [AuthGuard]*/ },
    { path: 'cars/:id/:name', component: CarComponent },
    { path: '', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
