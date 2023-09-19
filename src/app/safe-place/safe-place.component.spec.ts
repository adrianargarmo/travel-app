import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafePlaceComponent } from './safe-place.component';

describe('SafePlaceComponent', () => {
  let component: SafePlaceComponent;
  let fixture: ComponentFixture<SafePlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafePlaceComponent]
    });
    fixture = TestBed.createComponent(SafePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
