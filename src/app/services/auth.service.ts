import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUpUrl:string="http://localhost:8083/api/signup"
  tokenUrl:string ="http://localhost:8083/api/token"
  userDetailUrl:string="http://localhost:8083/api/login"
  getUser:string="http://localhost:8083/api/get/user"
  updateUserUrl:string= "http://localhost:8083/update/user"
  constructor(private http:HttpClient){}
onSignUp(user:any):Observable<any>{
  return this.http.post(this.signUpUrl,user)
}
getToken(user:any):Observable<any>{
return this.http.post(this.tokenUrl,user);
}
getUserDetails(token:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ token
    })
  };
return this.http.get(this.userDetailUrl,httpOptions);
}
 getdetails(token:any){
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ token
    })
  };
  return this.http.get(this.getUser,httpOptions)

 }

updateUserDetails(user:any , token:any): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'Bearer '+ token
    })
  };
  return this.http.post(this.updateUserUrl,user,httpOptions)
}


}
