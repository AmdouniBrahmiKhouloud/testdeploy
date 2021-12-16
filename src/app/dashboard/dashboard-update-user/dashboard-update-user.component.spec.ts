import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUpdateUserComponent } from './dashboard-update-user.component';

describe('DashboardUpdateUserComponent', () => {
  let component: DashboardUpdateUserComponent;
  let fixture: ComponentFixture<DashboardUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUpdateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
