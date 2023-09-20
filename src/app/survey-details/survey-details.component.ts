import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {
  survey: any;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.getSurveyDetails();
  }

  getSurveyDetails() {
    const id = this.route.snapshot.paramMap.get('id');

    this.surveyService.getSurvey(Number(id)).subscribe((survey) => {
      this.survey = survey;
    });
  }
}