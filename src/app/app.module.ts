import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppPowPipe } from './pipes/app-pow.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        AppPowPipe,
        CarFilterPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
