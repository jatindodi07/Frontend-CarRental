import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPicsComponent } from './car-pics.component';

describe('CarPicsComponent', () => {
  let component: CarPicsComponent;
  let fixture: ComponentFixture<CarPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
