import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconFlowComponent } from './secon-flow.component';

describe('SeconFlowComponent', () => {
  let component: SeconFlowComponent;
  let fixture: ComponentFixture<SeconFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
