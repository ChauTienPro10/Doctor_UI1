import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { SharedDataService } from '../Share';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
   name: string="";
   mail: string="";
   date: string="";
   time: string="";
   doctorid: number=-10;
  
  constructor(private bookingService:BookingService,private sharedDataService:SharedDataService
    ,private activatedRoute: ActivatedRoute,private router:Router){}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.doctorid = params['doctorid'];
       console.log(this.doctorid);
    });
  }
  booking(){
    this.bookingService.booking(this.name,this.mail,this.date, this.time, this.doctorid).subscribe((data: any) =>{
      alert("set a appoiment successful");
      this.name="";
      this.mail="";
      this.date="";
      this.time="";
      this.sharedDataService.loading=false;
    },
    (error: any) => {
      alert("try again!")
      this.sharedDataService.loading=false;
    })
  }

  check(){
    alert(this.time);
  }
  back(){
    this.router.navigate(['/doctor']);
  }

}

//newuser2@example.com