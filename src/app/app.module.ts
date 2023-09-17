import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    SurveyDetailsComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
