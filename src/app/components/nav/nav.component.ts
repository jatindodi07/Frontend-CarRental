import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  name: any; 
  
  constructor(private router: Router){
    this.name = localStorage.getItem('username');
  }
  loggingOut(){
    localStorage.clear()
    this.router.navigateByUrl('')
  }
}
