import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPromotionComponent } from './stat-promotion.component';

describe('StatPromotionComponent', () => {
  let component: StatPromotionComponent;
  let fixture: ComponentFixture<StatPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
