import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-booking-history',
  imports: [NgFor,RouterLink,ReactiveFormsModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.css'
})
export class BookingHistoryComponent implements OnInit{
  bookingData:any=[]
  searchBooking:FormGroup
  page:number=0
  size:number=2

  constructor(private bookingService:BookingService ){ 
    this.getData();
    this.searchBooking = new FormGroup({
    carName:new FormControl('',Validators.required)
    })
  }
  prev(){
    if(this.page>0){
      this.page=this.page-1;
      this.getData()
    }

  }
  next(){
    this.page=this.page+1
    this.getData()

  }
  getData(){
    this.bookingService.getBookingDetail(localStorage.getItem('user_id'),this.page,this.size).subscribe({
      next:(data)=>{
        this.bookingData=data.content;
      },
      error:(err)=>{}
    })

  }
  ngOnInit(): void {
    
  }
  onSubmit(){
    this.bookingService.getBookingByCar(this.searchBooking.value.carName).subscribe({
      next:(data)=>{this.bookingData=data},
      error:(err)=>{}
    })
    
  }
  saveBookingId(id:any){
    console.log(id)
    localStorage.setItem('booking_id',id)
  }

}
