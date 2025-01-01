import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { OnSameUrlNavigation } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  user:any
  profileForm:FormGroup
  mssg:string|undefined
   constructor(private authService:AuthService){
    this.profileForm = new FormGroup({
      name:new FormControl(''),
      username:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl(''),
      street:new FormControl('')
     })
   }
  ngOnInit(): void {
    this.authService.getdetails(localStorage.getItem("token")).subscribe({
      next:(data)=>{
         this.user=data
         console.log(this.user)
         this.profileForm = new FormGroup({
          name:new FormControl(this.user.name),
          username:new FormControl(this.user.username),
          city:new FormControl(this.user.address.city),
          state:new FormControl(this.user.address.state),
          pincode:new FormControl(this.user.address.pincode),
          street:new FormControl(this.user.address.street)
         })
      },
      error: (err)=>{

      }
    })

  }
  onSubmit(){
       this.user.name = this.profileForm.value.name
       this.user.username = this.profileForm.value.username
       this.user.address.city= this.profileForm.value.city
       this.user.address.pincode=this.profileForm.value.pincode
       this.user.address.street = this.profileForm.value.street

         this.authService.updateUserDetails(this.user , localStorage.getItem('token')).subscribe({
          next: (data)=>{
          this.mssg = "User Details updated"
          },
          error:(err)=>{
          
          }
         })
  }
}
