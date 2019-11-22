import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsBindComponent } from './props-bind.component';

describe('PropsBindComponent', () => {
  let component: PropsBindComponent;
  let fixture: ComponentFixture<PropsBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
