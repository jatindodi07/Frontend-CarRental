import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarServiceService } from '../../services/car-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-car-details',
  imports: [RouterLink,ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
carForm:FormGroup
car:any
car_id:any
submited:boolean=false
msg:string=""
t:any
p:any
constructor(private carService:CarServiceService){
  this.carForm = new FormGroup({
    car_company:new FormControl('',Validators.required),
    car_type: new FormControl('',Validators.required),
    car_name: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    driven_km: new FormControl('',Validators.required),
    mileage: new FormControl('',Validators.required),
    purpose: new FormControl('',Validators.required)

  })
}
  ngOnInit(): void {
    this.carService.getCarType(localStorage.getItem('token')).subscribe({
      next:(data)=>{
       this.t = data
      },
      error:(err)=>{

      }
    })

    this.carService.getCarPurpose(localStorage.getItem('token')).subscribe({
      next:(data)=>{
       this.p = data
      },
      error:(err)=>{

      }
    })


  }
onSubmit(){
this.car= this.carForm.value
this.submited=true
console.log(this.car)
console.log(localStorage.getItem('user_id'))
this.carService.uploadCar(localStorage.getItem('token'),localStorage.getItem('user_id'),this.car).subscribe({
  next:(data)=>{
      this.msg="car Uploaded in database"
      this.carService.uploadedCarId = data.id
  },
  error:(err)=>{

  }
})
}

}
