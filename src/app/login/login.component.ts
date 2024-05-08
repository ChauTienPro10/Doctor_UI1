import { Component } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../Share';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: any;
  username: string="";
  password: string="";
  email:string="";
  name:string="";
  constructor(private loginserviceService: LoginserviceService
    ,private router: Router
    ,private sharedDataService:SharedDataService) {}
  ngOnInit() {
  }
  handleLogin(){
    
    this.loginserviceService.login(this.username, this.password).subscribe(
      (data: any) => {
        this.user = data;
        this.sharedDataService.user =data;
        this.sharedDataService.jwt=data.jwt;
        localStorage.setItem("user",JSON.stringify(this.sharedDataService.user));
        console.log("jwtdd: "+localStorage.getItem("user"));
        this.sharedDataService.loading=false;
        alert("successful: "+this.username)
        this.router.navigate(['/home']);

      },
      (error: any) => {
        alert("try again!")
        this.sharedDataService.loading=false;
      }
    );
  }

  signup(){
    this.loginserviceService.signup(this.username,this.password,this.email,this.name).subscribe((data:any)=>{
      console.log(data);
      alert("you are register a new account .");
      this.username="";
      this.password="",
      this.email="";
      this.name="";
      this.sharedDataService.loading=false;
    },(error:any)=>{
      alert("signup falue, try again!,Password must be larger than 6 and less than 9 characters");
      this.sharedDataService.loading=false;
    })
  }
}
