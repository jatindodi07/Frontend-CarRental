import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-car-history',
  imports: [NgFor],
  templateUrl: './car-history.component.html',
  styleUrl: './car-history.component.css'
})
export class CarHistoryComponent implements OnInit{
  id:any
  bookingDetail:any
  constructor(private bookingService:BookingService,private actRoute:ActivatedRoute){

  }
  ngOnInit(): void 
  {

  this.actRoute.paramMap.subscribe(c=>{
    this.id=c.get('id');
    console.log(this.id)
    this.bookingService.getUserDetail(this.id).subscribe(
      {
        next:(data)=>{
          this.bookingDetail= data
          console.log(data)
        },
        error:(err)=>{}
      }
    )
  })
    
  }

}
