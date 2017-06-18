import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWelcomeComponent } from './demo-welcome.component';

describe('DemoWelcomeComponent', () => {
  let component: DemoWelcomeComponent;
  let fixture: ComponentFixture<DemoWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
