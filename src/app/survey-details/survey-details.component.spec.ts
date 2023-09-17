import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDetailsComponent } from './survey-details.component';

describe('SurveyDetailsComponent', () => {
  let component: SurveyDetailsComponent;
  let fixture: ComponentFixture<SurveyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyDetailsComponent]
    });
    fixture = TestBed.createComponent(SurveyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
