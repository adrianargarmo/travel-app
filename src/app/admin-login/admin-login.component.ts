import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  isAdminAuthenticated: boolean = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.isAdminAuthenticated = this.authenticationService.isAdminAuthenticatedUser();
  }

  login(): void {
    this.isAdminAuthenticated = this.authenticationService.adminLogin(this.username);

    if (this.authenticationService.isAdminAuthenticatedUser()) {
      this.router.navigate(['/admin-dashboard']);
    } else {
      
      alert('Invalid admin username');
    }
  }
}