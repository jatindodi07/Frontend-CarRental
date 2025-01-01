import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  constructor(private http:HttpClient) { }

  private addPassengerApi = "http://localhost:8083/add/passenger";
  private getPassengerUrl = "http://localhost:8083/passenger/details-on-booking"
  addPassenger(id: any, guest: any): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    }
    return this.http.post(this.addPassengerApi + '/' + id, guest, httpOptions);
  }
  getPassenger(id:any){
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    }
    return this.http.get(this.getPassengerUrl+'/'+id,httpOptions)
  }
}
