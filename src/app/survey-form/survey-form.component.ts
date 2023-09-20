import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  survey: any = {};
  isEditing: boolean = false;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private surveyService: SurveyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.getSurveyDetails(+id);
    }
  }

  getSurveyDetails(id: number) {
    this.surveyService.getSurvey(id).subscribe((survey) => {
      this.survey = survey;
    });
  }

  saveSurvey(){
    if (this.isEditing) {
      this.surveyService
      .updateSurvey(this.survey.id, this.survey)
      .subscribe(() => {
        this.router.navigate(['/surveys']);
      });
    } else {
      this.surveyService.createSurvey(this.survey).subscribe(() => {
        this.router.navigate(['/surveys']);
      });
    }
  }

  cancelForm() {this.router.navigate(['/surveys']);}
}
