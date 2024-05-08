import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAppoinmentComponent } from './check-appoinment.component';

describe('CheckAppoinmentComponent', () => {
  let component: CheckAppoinmentComponent;
  let fixture: ComponentFixture<CheckAppoinmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckAppoinmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
