import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericLoginSuccesComponent } from './generic-login-succes.component';

describe('GenericLoginSuccesComponent', () => {
  let component: GenericLoginSuccesComponent;
  let fixture: ComponentFixture<GenericLoginSuccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericLoginSuccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericLoginSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
