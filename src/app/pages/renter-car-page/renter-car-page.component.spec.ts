import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterCarPageComponent } from './renter-car-page.component';

describe('RenterCarPageComponent', () => {
  let component: RenterCarPageComponent;
  let fixture: ComponentFixture<RenterCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenterCarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenterCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
