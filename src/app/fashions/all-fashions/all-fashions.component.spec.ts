import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFashionsComponent } from './all-fashions.component';

describe('AllFashionsComponent', () => {
  let component: AllFashionsComponent;
  let fixture: ComponentFixture<AllFashionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFashionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFashionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
