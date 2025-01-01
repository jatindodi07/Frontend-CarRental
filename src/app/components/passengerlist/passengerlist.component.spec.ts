import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerlistComponent } from './passengerlist.component';

describe('PassengerlistComponent', () => {
  let component: PassengerlistComponent;
  let fixture: ComponentFixture<PassengerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
