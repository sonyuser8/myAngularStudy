import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestDetailComponent } from './form-test-detail.component';

describe('FormTestDetailComponent', () => {
  let component: FormTestDetailComponent;
  let fixture: ComponentFixture<FormTestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
