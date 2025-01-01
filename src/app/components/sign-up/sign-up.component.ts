import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,NgIf,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
signupForm:FormGroup
sm:string|undefined
em:string|undefined
constructor(private authService:AuthService){
  this.signupForm = new FormGroup({
    name:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    state:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    street:new FormControl('',Validators.required),
    house_no:new FormControl('',Validators.required)

  })
}

onSubmit(){
 this.authService.onSignUp(this.signupForm.value).subscribe({
  next:(data)=>{
      this.sm="SignUp Success Please Log in"
  },
 error:(err)=>{
     
 }

 })
}
}
