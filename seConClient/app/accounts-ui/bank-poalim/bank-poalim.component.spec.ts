import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPoalimComponent } from './bank-poalim.component';

describe('BankPoalimComponent', () => {
  let component: BankPoalimComponent;
  let fixture: ComponentFixture<BankPoalimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankPoalimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankPoalimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
