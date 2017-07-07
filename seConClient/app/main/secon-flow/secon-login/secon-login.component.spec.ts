import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconLoginComponent } from './secon-login.component';

describe('SeconLoginComponent', () => {
  let component: SeconLoginComponent;
  let fixture: ComponentFixture<SeconLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
