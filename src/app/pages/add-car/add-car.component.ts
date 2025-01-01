import { Component } from '@angular/core';
import { CarDetailsComponent } from "../../components/car-details/car-details.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-car',
  imports: [CarDetailsComponent,RouterOutlet],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

}
