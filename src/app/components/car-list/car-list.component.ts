import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-car-list',
  imports: [NgFor, RouterLink, ReactiveFormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
  carData:any
  inputLocationForm:FormGroup

constructor(private carService:CarServiceService){
  this.inputLocationForm=new FormGroup({
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required)
  })


  }

  ngOnInit(): void {

  this.carService.getCars(localStorage.getItem('token')).subscribe({
    next: (data)=>{
      this.carData=data

     },
     error:(err)=>{
     }
   })

}
saveCarId(id:any){
localStorage.setItem('car_id',id)
}
onSubmit(){
    this.carService.getCarsV2(this.inputLocationForm.value.state,this.inputLocationForm.value.city).subscribe({
      next:(data)=>{
        this.carData=data;
      },
      error:(err)=>{
        
      }
    })


}


}

