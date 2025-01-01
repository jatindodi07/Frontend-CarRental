import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-passengerlist',
  imports: [NgFor],
  templateUrl: './passengerlist.component.html',
  styleUrl: './passengerlist.component.css'
})
export class PassengerlistComponent implements OnInit {
  passenger:any
  constructor(private passengerService:PassengerService){

  }
  ngOnInit(): void {
    console.log(localStorage.getItem('booking_id'))
   this.passengerService.getPassenger(localStorage.getItem('booking_id')).subscribe({
    next:(data)=>{
      this.passenger = data
      console.log(data)
    },
    error:(error)=>{
      console.log(error)
    }
   })
  }


}
