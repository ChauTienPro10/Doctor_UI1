import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { SharedDataService } from '../Share';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient: HttpClient, private sharedDataService:SharedDataService) { }
  login(username: string, password: string): Observable<any> {
    this.sharedDataService.loading=true;
    const body = { username, password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${API_URL}/api/login`, body, { headers });
  }

  logout(){
    this.sharedDataService.loading=true;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.sharedDataService.jwt}`);
    return this.httpClient.post(`${API_URL}/api/logout`, { headers });
  }


  signup(username: string, password: string , email: string,name:string){
    this.sharedDataService.loading=true;
    const body = {
      username:username,
      password:password,
      email:email,
      role:"USER",
      name:name,

    }
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(`${API_URL}/api/register`, body);

  }
  
}
