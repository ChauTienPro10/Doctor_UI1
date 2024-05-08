import { Component } from '@angular/core';
import { SharedDataService } from '../Share';
import { BookingService } from '../services/booking.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-appoinment',
  templateUrl: './check-appoinment.component.html',
  styleUrl: './check-appoinment.component.scss'
})
export class CheckAppoinmentComponent {
  ListConfirm: any[]=[];
  constructor(public sharedDataService:SharedDataService, private bookingService:BookingService,private router: Router){}
  ngOnInit() {
    if(this.sharedDataService.user!==undefined){
      this.getAllConfirm(this.sharedDataService.user.id)
      
    }
    
   
  }
  getAllConfirm(idUser:number){
    this.bookingService.accept_appoinment(idUser).subscribe((data: any)=>{
      
      this.ListConfirm=data as any[];
      this.sharedDataService.loading=false;
      console.log(this.ListConfirm)
    },
    (error: any) => {
      console.log(error);
      this.sharedDataService.loading=false;
    })
  }
  handleAcceptAll() {
    const selectedConfirms = this.ListConfirm.filter((confirm) => confirm.checked);
    this.bookingService.accept(selectedConfirms).subscribe((data: any)=>{
      alert("success!")
      this.sharedDataService.loading=false;
      this.reloadPage();
    },
    (error: any) => {
      alert("try again!")
      console.log(error);
      this.sharedDataService.loading=false;
    })
    
  }

  reloadPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate(['/check-appoinment']));
  }

}
