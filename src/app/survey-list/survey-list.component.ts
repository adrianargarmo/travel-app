import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})

export class SurveyListComponent implements OnInit {
  surveys: any[] = [];

  constructor(private surveyService: SurveyService) {}

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys() {
    this.surveyService.getSurveys().subscribe((surveys) => {
      this.surveys = surveys;
    });
  }
  deleteSurvey(id: number) {
    this.surveyService.deleteSurvey(id).subscribe(() => {
      this.getSurveys();
    });
  }
}