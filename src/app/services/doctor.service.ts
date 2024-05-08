import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants';
import { SharedDataService } from '../Share';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  constructor(private httpClient: HttpClient,private sharedDataService:SharedDataService) { }
  getDoctors() {
    this.sharedDataService.loading=true;
    return this.httpClient.get(`${API_URL}/doctor/getDoctor`);
  }
}
