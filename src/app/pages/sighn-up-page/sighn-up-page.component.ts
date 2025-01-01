import { Component } from '@angular/core';
import { SignUpComponent } from "../../components/sign-up/sign-up.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-sighn-up-page',
  imports: [SignUpComponent, HeaderComponent],
  templateUrl: './sighn-up-page.component.html',
  styleUrl: './sighn-up-page.component.css'
})
export class SighnUpPageComponent {

}
