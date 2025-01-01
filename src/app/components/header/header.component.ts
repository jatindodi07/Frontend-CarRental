import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router:Router){}
OnSignUp(){
this.router.navigateByUrl("/sign-up")
}

OnLogin(){
  this.router.navigateByUrl("/login")
}

}
