import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-renter-side-bar',
  imports: [RouterLink],
  templateUrl: './renter-side-bar.component.html',
  styleUrl: './renter-side-bar.component.css'
})
export class RenterSideBarComponent {
  name:any
  username:any
  role:any
  constructor(){
    this.name=localStorage.getItem('name')
    this.username=localStorage.getItem('username')
    this.role=localStorage.getItem('role')
  }

}
