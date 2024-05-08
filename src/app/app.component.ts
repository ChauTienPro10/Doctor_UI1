import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from './Share';
import { LoginserviceService } from './services/loginservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  isActiveClass: boolean = false;
  constructor(public sharedDataService: SharedDataService,private loginserviceService:LoginserviceService
    , private router:Router) {}
  
  addActiveClass(){
    this.isActiveClass = true;
  }
  logout(){

    this.isActiveClass = false;
    this.loginserviceService.logout()
    this.router.navigate(["/"]);
    localStorage.removeItem("user")
    console.log(localStorage.getItem("user"))
    window.location.reload();
  }

  close(){
    this.isActiveClass = false;
    
    
  }
  
  

}
