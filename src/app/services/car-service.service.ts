import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  getBookingByCar(carName: any) {
    throw new Error('Method not implemented.');
  }
  uploadedCarId:any
  carByUser:string="http://localhost:8083/get/car"
  carTypeUrl:string = "http://localhost:8083/api/get/car/type"
  carPurposeUrl:string = "http://localhost:8083/api/get/car/purpose"
  carUrl:string="http://localhost:8083/api/get/car/image"
  uploadCarUrl:string="http://localhost:8083/add/car/"
  getCarUrl:string="http://localhost:8083/api/get/car"
  getCarV2:string="http://localhost:8083/get/available/cars/v2"
  constructor(private http:HttpClient) { }
  
  getCars(token:any):Observable<any> {
    const HttpOptions=
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer '+ token
       })
      }
   return this.http.get(this.carUrl,HttpOptions)
  }
  getCarType(token:any):Observable<any> {
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ token
     })
    }
    return this.http.get(this.carTypeUrl,HttpOptions)
    
  }
  getCarPurpose(token:any):Observable<any> {
    const HttpOptions=
    {
      headers: new HttpHeaders({
        Authorization: 'Bearer '+ token
     })
    }
    return this.http.get(this.carPurposeUrl,HttpOptions)
}
  
uploadCar(token:any,id:any,car:any):Observable<any>{
  const HttpOptions=
  {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ token
   })
  }
  return this.http.post(this.uploadCarUrl + id , car,HttpOptions)

}

available(car_id:any, formData:any):Observable<any>{
  const HttpOptions=
  {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ localStorage.getItem('token')
   })
  
  }
    return this.http.get(this.getCarUrl+'?car_id='+car_id+'&pickupDate='+formData.pickupDate+'&dropDate='+formData.dropDate,HttpOptions)
}



getCarsV2(state:any,city:any):Observable<any>{
  const HttpOptions=
  {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ localStorage.getItem('token')
   })
  
  }
  return this.http.get(this.getCarV2+'?state='+state+'&city='+city,HttpOptions)

}

getCarByUser(id:any):Observable<any>{
  const HttpOptions=
  {
    headers: new HttpHeaders({
      Authorization: 'Bearer '+ localStorage.getItem('token')
   })
  
  }
  return this.http.get(this.carByUser+'/'+id,HttpOptions)
}

}
