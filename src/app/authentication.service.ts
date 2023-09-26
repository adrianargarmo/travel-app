import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAdminAuthenticated: boolean = false;

  adminLogin(username: string): boolean {
    if (username === 'admin') {
      this.isAdminAuthenticated = true;
    }
    return this.isAdminAuthenticated;
  }

  adminLogout(): void {
    this.isAdminAuthenticated = false;
  }

  isAdminAuthenticatedUser(): boolean {
    return this.isAdminAuthenticated;
  }
}