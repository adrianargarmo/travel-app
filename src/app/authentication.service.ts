import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private isAdminAuthenticated = false;

  adminLogin(username: string): void {
    // Check if the provided username is valid for admin access
    // You can hardcode an admin username or use a predefined list
    if (username === 'admin') {
      this.isAdminAuthenticated = true;
    }
  }

  adminLogout(): void {
    this.isAdminAuthenticated = false;
  }

  isAdminAuthenticatedUser(): boolean {
    return this.isAdminAuthenticated;
  }
}