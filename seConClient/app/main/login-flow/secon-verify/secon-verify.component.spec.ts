import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconVerifyComponent } from './secon-verify.component';

describe('SeconVerifyComponent', () => {
  let component: SeconVerifyComponent;
  let fixture: ComponentFixture<SeconVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
