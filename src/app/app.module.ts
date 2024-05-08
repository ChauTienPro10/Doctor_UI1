import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { BookingComponent } from './booking/booking.component';
import { CheckAppoinmentComponent } from './check-appoinment/check-appoinment.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { SharedDataService } from './Share';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'check-appoinment', component: CheckAppoinmentComponent },
  { path: 'appoinment', component: AppoinmentComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    LoginComponent,
    DoctorComponent,
    BookingComponent,
    CheckAppoinmentComponent,
    AppoinmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,RouterModule.forRoot(routes),FormsModule
  ],
  exports: [RouterModule],
  providers: [
    provideClientHydration(),SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
