import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rentercar',
  imports: [NgFor,RouterLink],
  templateUrl: './rentercar.component.html',
  styleUrl: './rentercar.component.css'
})
export class RentercarComponent implements OnInit{
  car:any
  constructor(private carService:CarServiceService){}
  ngOnInit(): void {
    this.carService.getCarByUser(localStorage.getItem('user_id')).subscribe({
      next:(data)=>{
        this.car =data
        console.log(this.car)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


}
