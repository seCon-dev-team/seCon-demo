import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconSiteComponent } from './secon-site.component';

describe('SeconSiteComponent', () => {
  let component: SeconSiteComponent;
  let fixture: ComponentFixture<SeconSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
