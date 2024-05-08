import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  user: any;
  jwt: any;
  loading:boolean=false;

  constructor() {
    this.loadDataFromLocalStorage();
  }

  private loadDataFromLocalStorage(): void {
    try {
      const storedData = localStorage.getItem('user');
      if (storedData) {
        this.user = JSON.parse(storedData);
      }
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  }
  
  
}