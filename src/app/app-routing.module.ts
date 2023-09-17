import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id', component: SurveyDetailsComponent },
  { path: 'add-survey', component: SurveyFormComponent },
  { path: 'edit-survey/:id', component: SurveyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }