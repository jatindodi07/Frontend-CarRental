import { Component } from '@angular/core';
import { LoginComponent } from "../../components/login/login.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [LoginComponent, HeaderComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
