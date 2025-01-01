import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  username:any
  role:any
  name:any
  constructor(){
    this.username=localStorage.getItem('username')
    this.role = localStorage.getItem('role')
    this.name = localStorage.getItem('name')
  }
  
}
