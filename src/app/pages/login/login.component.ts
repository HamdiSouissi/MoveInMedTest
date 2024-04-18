import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  logoPath: string = 'assets/images/logo.png';
  mobileLoginTop: string = 'assets/images/mobile-login.png';
}
