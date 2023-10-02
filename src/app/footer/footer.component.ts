import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  companyName: string = 'The Solo Traveler';
  currentYear: number = new Date().getFullYear();
}
