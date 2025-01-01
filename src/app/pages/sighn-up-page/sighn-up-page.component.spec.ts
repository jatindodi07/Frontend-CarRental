import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnUpPageComponent } from './sighn-up-page.component';

describe('SighnUpPageComponent', () => {
  let component: SighnUpPageComponent;
  let fixture: ComponentFixture<SighnUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SighnUpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SighnUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
