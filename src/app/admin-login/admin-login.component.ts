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

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  login(): void {
    // Perform admin login based on the username provided
    this.authenticationService.adminLogin(this.username);

    // Check if the user is authenticated as an admin
    if (this.authenticationService.isAdminAuthenticatedUser()) {
      // Navigate to the admin dashboard or any other admin-specific route
      this.router.navigate(['/admin-dashboard']);
    } else {
      // Display an error message or handle unauthorized access
      alert('Invalid admin username');
    }
  }
}