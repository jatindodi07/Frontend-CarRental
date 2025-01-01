import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-availability',
  imports: [SearchComponent,RouterOutlet],
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css'
})
export class AvailabilityComponent {

}
