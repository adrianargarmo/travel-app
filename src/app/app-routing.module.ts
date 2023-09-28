import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SafePlaceComponent } from './safe-place/safe-place.component';
import { PointsOfInterestComponent } from './points-of-interest/points-of-interest.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'safe-place', component: SafePlaceComponent },
  { path: 'points-of-interest', component: PointsOfInterestComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'surveys/:id', component: SurveyDetailsComponent },
  { path: 'add-survey', component: SurveyFormComponent },
  { path: 'edit-survey/:id', component: SurveyFormComponent },
  { path: 'location', component: LocationListComponent },
  { path: 'location/:id', component: LocationDetailsComponent},
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'about', component: AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }