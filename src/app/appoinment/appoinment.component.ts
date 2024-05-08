import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../Share';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.scss'
})
export class AppoinmentComponent {
  appoinments:any[]=[];
  
  constructor(
    private router: Router, public sharedDataService:SharedDataService,private bookingService:BookingService
    
    ) {}
    
  ngOnInit() {
    
    if(this.sharedDataService.user!==undefined){
      this.getAppoinment(this.sharedDataService.user.id);
    }
   
     }
    goToConfirm(){
    this.router.navigate(['/check-appoinment']);
  }
  getAppoinment(id:number){
    this.bookingService.getAppoinment(id).subscribe((data:any)=>{
      this.appoinments=data as any[];
      this.sharedDataService.loading=false;
      console.log(data);
    },(error: any) => {
      alert("try again!")
      this.sharedDataService.loading=false;
    })
  }

  cancel(id:number){
    
    this.bookingService.cancelAppoinment(id).subscribe((data: any)=>{
      if(data==="Yes"){
        alert("success!");
        this.getAppoinment(this.sharedDataService.user.id);
        this.sharedDataService.loading=false;
      }
      else{
        alert("error!!!!!")
        this.sharedDataService.loading=false;
      }
    },(error:any)=>{
      alert("Sorry, try again!");
      this.sharedDataService.loading=false;
    })
  }
}
