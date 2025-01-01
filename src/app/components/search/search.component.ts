import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CarServiceService } from '../../services/car-service.service';
import { NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
isPickupBeforeDrop():Boolean {
  const pickupDate = new Date(this.availibilityForm.value.pickupDate);
  const dropDate = new Date(this.availibilityForm.value.dropDate);

  return pickupDate < dropDate;
}
  availibilityForm :FormGroup
  mssg:string="";
  book:boolean=false
  confirm:boolean=true
  car:any
  bookingMssg:string=""
  rentalPrice:any
  totalPrice:any
  constructor(private carService:CarServiceService,private  bookingService:BookingService,private route:Router){
    this.availibilityForm = new FormGroup({
      pickupDate:new FormControl('',Validators.required),
      dropDate:new FormControl('',Validators.required),
    })

  }
  onSubmit(){
    console.log(localStorage.getItem('car_id'))
    this.carService.available(localStorage.getItem('car_id'),this.availibilityForm.value).subscribe({
     next:(data)=>{
      this.mssg=data.msg
      console.log(data)
     }
    })
   
  }

  handleBooking(){
   this.book=true
this.bookingService.getPrice(localStorage.getItem('car_id')).subscribe({
next:(data)=>{
this.car=data.car
this.rentalPrice=data.price
let pickupDate = new Date(this.availibilityForm.value.pickupDate);
let dropDate = new Date(this.availibilityForm.value.dropDate);
let diffInTime = dropDate.getTime() - pickupDate.getTime(); 
  let diffInDays = diffInTime / (1000 * 60 * 60 * 24); 
  this.totalPrice = diffInDays * this.rentalPrice;
},
error:(err)=>{

}
})
   
}
confirmBooking(){
  this.confirm=false
  this.bookingService.getBooking({
    car_id:localStorage.getItem('car_id'),
    user_id:localStorage.getItem('user_id'),
    pickupDate:this.availibilityForm.value.pickupDate,
    return_date:this.availibilityForm.value.dropDate,
    totalPrice:this.totalPrice

  }   
  ).subscribe({
    next:(data)=>{
      console.log(data)
    this.route.navigateByUrl('home-page/passenger/'+data.booking_id)
    },
    error:(err)=>{}
  })
}

}
