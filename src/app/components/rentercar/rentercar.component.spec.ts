import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentercarComponent } from './rentercar.component';

describe('RentercarComponent', () => {
  let component: RentercarComponent;
  let fixture: ComponentFixture<RentercarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentercarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentercarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
