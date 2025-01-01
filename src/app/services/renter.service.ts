import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenterService {
  changeRoleUrl:string="http://localhost:8083/api/change/role"

  constructor(private http:HttpClient) { }
  changeRole(user:any):Observable<any>{
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ localStorage.getItem('token')
     })
    
    }
return this.http.post(this.changeRoleUrl,user,HttpOptions)


  }
}
