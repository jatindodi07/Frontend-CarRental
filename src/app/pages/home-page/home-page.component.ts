import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { CarListComponent } from "../../components/car-list/car-list.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { SearchComponent } from "../../components/search/search.component";

@Component({
  selector: 'app-home-page',
  imports: [NavComponent, RouterModule, SidebarComponent, SearchComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
