import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { API_URL } from '../../constants';
import { SharedDataService } from '../Share';
import test from 'node:test';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient,private sharedDataService:SharedDataService) { }
  booking(name: string, email:string, date: string, time: string, doctor: number) {
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    const data = {
     name: name,
     email:email,
     appointmentDate: date,
     appointmentTime: time,
     iddoctor:doctor
    };
    return this.httpClient.post(`${API_URL}/confirm/add`,data,{ headers });
  }
  accept_appoinment(idUser:number){
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    const data={
      userid:idUser,
    }
    return this.httpClient.post(`${API_URL}/confirm/allConfirm`,data,{ headers });
  }

  accept(data:any[]){
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    return this.httpClient.post(`${API_URL}/confirm/agree`,data,{ headers ,responseType:'text'});
  }

  getAppoinment(id :number){
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    const data={
      iduser:id,
    }
    return this.httpClient.post(`${API_URL}/confirm/getAppoinment`,data,{ headers });
  }

  cancelAppoinment(id :number){
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    const data={
      id:id,
    }
    return this.httpClient.post(`${API_URL}/confirm/del`,data,{ headers,responseType:"text" });
  }
}
//tiendz@gmail.com