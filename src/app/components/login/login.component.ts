import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username:string=""
password:string=""
constructor(private authService:AuthService,private router:Router){}

onLogin(){
  console.log(this.username);
this.authService.getToken({
  username:this.username,
  password:this.password
}).subscribe({
  next:(data)=>{
   let token = data.token;
   this.authService.getUserDetails(token).subscribe({
    next:(data)=>{
      console.log(data)
      console.log(data.role)
      localStorage.setItem('token', token); 
      localStorage.setItem('username', data.username);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);
      localStorage.setItem('user_id', data.id);
      console.log(localStorage.getItem('user_id'))
      let role = data.role;
      switch(role){
        case 'CUSTOMER':
         
          this.router.navigateByUrl("/home-page");
          break; 
        case 'RENTER':
          this.router.navigateByUrl("/renter-page");
          break;
      }
   },
   error: (err)=>{
    console.log(err)
  }
})
  },
  error: (err)=>{
    console.log(err)
  }
})
}
}
