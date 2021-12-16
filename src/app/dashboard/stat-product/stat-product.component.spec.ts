import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatProductComponent } from './stat-product.component';

describe('StatProductComponent', () => {
  let component: StatProductComponent;
  let fixture: ComponentFixture<StatProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
