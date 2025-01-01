import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RenterService } from '../../services/renter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-renter-login',
  imports: [ReactiveFormsModule],
  templateUrl: './renter-login.component.html',
  styleUrl: './renter-login.component.css'
})
export class RenterLoginComponent {
renterForm:FormGroup
constructor(private renterService:RenterService,private router:Router){
  this.renterForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  })
}

  onSubmit(){
  this.renterService.changeRole({
    username: this.renterForm.value.username,
    password: this.renterForm.value.password
  }).subscribe({
    next:(data)=>{
      this.router.navigateByUrl("/renter-page");
      console.log(data)
    },
    error:()=>{}
  })
  }


}
