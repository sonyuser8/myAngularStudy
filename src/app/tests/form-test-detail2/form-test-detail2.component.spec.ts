import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTestDetail2Component } from './form-test-detail2.component';

describe('FormTestDetail2Component', () => {
  let component: FormTestDetail2Component;
  let fixture: ComponentFixture<FormTestDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTestDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTestDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
