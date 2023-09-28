import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../survey.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent implements OnInit {
  surveys: any[] = [];
  isAdminAuthenticated: boolean = false;
  @Input() location: string = "";
  isSurveyList: boolean = true;
  @Input() isLocationDetails: boolean = false;

  constructor(private authenticationService: AuthenticationService, private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    if (this.isLocationDetails) {
      this.isSurveyList = false;
    this.GetSurveyByLocation(this.location); }

    this.getSurveys();
    
    this.isAdminAuthenticated = this.authenticationService.isAdminAuthenticatedUser();
  }
  
  getSurveys() {
    this.surveyService.getSurveys().subscribe((surveys) => {
      this.surveys = surveys; });
  }

  GetSurveyByLocation(location: string) {
    this.surveyService.GetSurveyByLocation(location).subscribe(() => {
      this.getSurveys; });
  }

  deleteSurvey(id: number) {
    this.surveyService.deleteSurvey(id).subscribe(() => {
      this.getSurveys(); });
  }

  isAdminAuthenticatedUser(): boolean {
    return this.isAdminAuthenticatedUser();
  }

  logout(): void {
    this.authenticationService.adminLogout();
    this.router.navigate(['/surveys']);
  }
}