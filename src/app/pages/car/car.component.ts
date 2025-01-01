import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarListComponent } from "../../components/car-list/car-list.component";

@Component({
  selector: 'app-car',
  imports: [RouterOutlet, CarListComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

}
