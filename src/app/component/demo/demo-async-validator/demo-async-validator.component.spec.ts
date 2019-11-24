import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAsyncValidatorComponent } from './demo-async-validator.component';

describe('DemoAsyncValidatorComponent', () => {
  let component: DemoAsyncValidatorComponent;
  let fixture: ComponentFixture<DemoAsyncValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAsyncValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
