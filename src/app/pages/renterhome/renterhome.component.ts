import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../../components/nav/nav.component";
import { RenterSideBarComponent } from "../../components/renter-side-bar/renter-side-bar.component";

@Component({
  selector: 'app-renterhome',
  imports: [RouterOutlet, NavComponent, RenterSideBarComponent],
  templateUrl: './renterhome.component.html',
  styleUrl: './renterhome.component.css'
})
export class RenterhomeComponent {

}
