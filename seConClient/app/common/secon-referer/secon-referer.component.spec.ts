import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconRefererComponent } from './secon-referer.component';

describe('SeconRefererComponent', () => {
  let component: SeconRefererComponent;
  let fixture: ComponentFixture<SeconRefererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconRefererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconRefererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
