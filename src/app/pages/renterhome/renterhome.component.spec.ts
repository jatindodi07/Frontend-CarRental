import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenterhomeComponent } from './renterhome.component';

describe('RenterhomeComponent', () => {
  let component: RenterhomeComponent;
  let fixture: ComponentFixture<RenterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenterhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
