import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionsComponent } from './fashions.component';

describe('FashionsComponent', () => {
  let component: FashionsComponent;
  let fixture: ComponentFixture<FashionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
