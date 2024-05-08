import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../Share';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
  
})
export class DoctorComponent {
  doctors: any[] = [];

  constructor(private doctorService: DoctorService,private router: Router, private sharedDataService:SharedDataService) {}

  ngOnInit() {
    this.doctorService.getDoctors().subscribe((data: any) => {
      this.doctors = data as any[];
      this.sharedDataService.loading=false;
    });
  }

  booking(doctorid: number){
    alert(doctorid);
    this.router.navigate(['/booking'], { queryParams: { doctorid: doctorid } });
  }
}
